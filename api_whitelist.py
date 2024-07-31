import json
from typing import Dict

from fastapi import APIRouter, Depends, HTTPException

from freqtrade.rpc.rpc import RPC
from freqtrade.rpc.api_server.deps import get_rpc
from freqtrade.rpc.api_server.api_schemas import WhitelistResponse

router = APIRouter()

@router.get("/whitelist", response_model=WhitelistResponse, tags=["info", "pairlist"])
def whitelist(rpc: RPC = Depends(get_rpc)):
    return rpc._rpc_whitelist()

@router.post("/whitelist/add", response_model=WhitelistResponse, tags=["info", "pairlist"])
def add_to_whitelist(pair: str, rpc: RPC = Depends(get_rpc)):
    whitelist_file = "user_data/whitelist.json"
    try:
        with open(whitelist_file, 'r') as f:
            whitelist = json.load(f)
        
        if pair not in whitelist['whitelist']:
            whitelist['whitelist'].append(pair)
            
            with open(whitelist_file, 'w') as f:
                json.dump(whitelist, f, indent=4)
            
            # Update the configuration
            rpc._freqtrade.config['exchange']['pair_whitelist'] = whitelist['whitelist']
            rpc._freqtrade.pairlists.refresh_pairlist()
            
            return rpc._rpc_whitelist()
        else:
            raise HTTPException(status_code=400, detail=f"{pair} is already in the whitelist.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error adding pair to whitelist: {str(e)}")