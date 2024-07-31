import{o as d,c as g,a as w,g as L,r as k,u as F,k as N,t as V,m as R,b as B,w as x,h as p,y as P,M as T,F as z,L as E,x as C,e as q,q as S,z as M,a0 as G,$ as I,Z as K,Y as O,_ as Y,ai as $,aj as j}from"./index-DlUcbSds.js";import{a as U,b as Z}from"./InfoBox.vue_vue_type_script_setup_true_lang-D0p1AO7G.js";const D={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},H=w("path",{fill:"currentColor",d:"M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"},null,-1),b=[H];function J(_,l){return d(),g("svg",D,[...b])}const Q={name:"mdi-lock",render:J},W=["title"],X=L({__name:"PairSummary",props:{pairlist:{required:!0,type:Array},currentLocks:{required:!1,type:Array,default:()=>[]},trades:{required:!0,type:Array},sortMethod:{default:"normal",type:String},backtestMode:{required:!1,default:!1,type:Boolean}},setup(_){const l=k(""),a=_,f=F(),v=N(()=>{const i=[];return a.pairlist.forEach(e=>{const o=a.trades.filter(u=>u.pair===e),s=a.currentLocks.filter(u=>u.pair===e);let r="",c;s.sort((u,A)=>u.lock_end_timestamp>A.lock_end_timestamp?-1:1),s.length>0&&([c]=s,r=`${V(c.lock_end_timestamp)} - ${c.reason}`);let n="",m=0,y=0;o.forEach(u=>{m+=u.profit_ratio,y+=u.profit_abs??0});const t=o.length,h=t?o[0]:void 0;o.length>0&&(n=`Current profit: ${R(m)}`),h&&(n+=`
Open since: ${V(h.open_timestamp)}`),(l.value===""||e.toLocaleLowerCase().includes(l.value.toLocaleLowerCase()))&&i.push({pair:e,trade:h,locks:c,lockReason:r,profitString:n,profit:m,profitAbs:y,tradeCount:t})}),a.sortMethod==="profit"?i.sort((e,o)=>e.profit>o.profit?-1:1):i.sort((e,o)=>e.trade&&!o.trade?-1:e.trade&&o.trade?e.trade.trade_id>o.trade.trade_id?1:-1:!e.locks&&o.locks?-1:e.locks&&o.locks?e.locks.lock_end_timestamp>o.locks.lock_end_timestamp?1:-1:1),i});return(i,e)=>{const o=G,s=I,r=Q,c=U,n=Z,m=K,y=O;return d(),g("div",null,[B(s,{"label-for":"trade-filter",class:T(["mb-2 ms-2",{"me-4":_.backtestMode,"me-2":!_.backtestMode}])},{default:x(()=>[B(o,{id:"trade-filter",modelValue:p(l),"onUpdate:modelValue":e[0]||(e[0]=t=>P(l)?l.value=t:null),type:"text",placeholder:"Filter"},null,8,["modelValue"])]),_:1},8,["class"]),B(y,null,{default:x(()=>[(d(!0),g(z,null,E(p(v),t=>(d(),C(m,{key:t.pair,button:"",class:"d-flex justify-content-between align-items-center py-1",active:t.pair===p(f).activeBot.selectedPair,title:`${t.pair} - ${t.tradeCount} trades`,onClick:h=>p(f).activeBot.selectedPair=t.pair},{default:x(()=>[w("div",null,[q(S(t.pair)+" ",1),t.locks?(d(),g("span",{key:0,title:t.lockReason},[B(r)],8,W)):M("",!0)]),t.trade&&!_.backtestMode?(d(),C(c,{key:0,trade:t.trade},null,8,["trade"])):M("",!0),_.backtestMode&&t.tradeCount>0?(d(),C(n,{key:1,"profit-ratio":t.profit,"stake-currency":p(f).activeBot.stakeCurrency},null,8,["profit-ratio","stake-currency"])):M("",!0)]),_:2},1032,["active","title","onClick"]))),128))]),_:1})])}}}),oe=Y(X,[["__scopeId","data-v-466f3470"]]),ae=L({__name:"MessageBox",setup(_,{expose:l}){const a=k(!1),f=k(""),v=k(""),i=k(()=>{console.warn("Accepted not set.")}),e=()=>{i.value(),a.value=!1};return l({show:s=>{f.value=s.title,v.value=s.message,a.value=!0,i.value=s.accept}}),(s,r)=>{const c=j;return d(),C(c,{id:"MsgBoxModal",ref:"removeTradeModal",modelValue:p(a),"onUpdate:modelValue":r[0]||(r[0]=n=>P(a)?a.value=n:null),title:p(f),onOk:e,onCancel:r[1]||(r[1]=n=>a.value=!1),onKeyup:[r[2]||(r[2]=$(n=>a.value=!1,["esc"])),$(e,["enter"])]},{default:x(()=>[q(S(p(v)),1)]),_:1},8,["modelValue","title"])}}});export{ae as _,oe as a};
//# sourceMappingURL=MessageBox.vue_vue_type_script_setup_true_lang-wRB1Pw6g.js.map