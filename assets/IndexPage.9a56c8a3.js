import{Q as c}from"./QImg.832430c2.js";import{h as k,Q as B}from"./QBtn.59465d27.js";import{Q as T,_ as f,a as A,b as M,c as O}from"./Malaysia.3e5f1ded.js";import{c as P,d as R}from"./render.f12b7ce0.js";import{h as _,c as m,d as j,r as q,M as z,O as D,Q as I,R as d,W as t,$ as b,f as i}from"./index.e74139f3.js";import{Q as W}from"./QPage.ba59439a.js";import"./QIcon.e5a5af18.js";const $={name:String};function F(e={}){return(o,r,u)=>{o[r](_("input",{class:"hidden"+(u||""),...e.value}))}}var J=P({name:"QBtnToggle",props:{...$,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(o=>("label"in o||"icon"in o||"slot"in o)&&"value"in o)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:o,emit:r}){const u=m(()=>e.options.find(l=>l.value===e.modelValue)!==void 0),p=m(()=>({type:"hidden",name:e.name,value:e.modelValue})),g=F(p),h=m(()=>k(e)),y=m(()=>({rounded:e.rounded,dense:e.dense,...h.value})),C=m(()=>e.options.map((l,s)=>{const{attrs:x,value:v,slot:Q,...a}=l;return{slot:Q,props:{key:s,"aria-pressed":v===e.modelValue?"true":"false",...x,...a,...y.value,disable:e.disable===!0||a.disable===!0,color:v===e.modelValue?n(a,"toggleColor"):n(a,"color"),textColor:v===e.modelValue?n(a,"toggleTextColor"):n(a,"textColor"),noCaps:n(a,"noCaps")===!0,noWrap:n(a,"noWrap")===!0,size:n(a,"size"),padding:n(a,"padding"),ripple:n(a,"ripple"),stack:n(a,"stack")===!0,stretch:n(a,"stretch")===!0,onClick(S){V(v,l,S)}}}}));function V(l,s,x){e.readonly!==!0&&(e.modelValue===l?e.clearable===!0&&(r("update:modelValue",null,null),r("clear")):r("update:modelValue",l,s),r("click",x))}function n(l,s){return l[s]===void 0?e[s]:l[s]}function w(){const l=C.value.map(s=>_(B,s.props,s.slot!==void 0?o[s.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&u.value===!0&&g(l,"push"),R(o.default,l)}return()=>_(T,{class:"q-btn-toggle",...h.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},w)}});const N={class:"text-bold text-center",style:{"font-size":"17px","margin-bottom":"50px"}},U={class:"text-center",style:{"margin-bottom":"30px"}},G={class:"text-bold",style:{color:"#0a84ff"}},Y={class:"column items-center no-wrap"},E=t("div",{class:"text-center text-caption text-bold"},"JP",-1),H={class:"column items-center no-wrap"},K=t("div",{class:"text-center text-caption text-bold"},"CN",-1),L={class:"column items-center no-wrap"},X=t("div",{class:"text-center text-caption text-bold"},"RU",-1),Z={class:"column items-center no-wrap"},ee=t("div",{class:"text-center text-caption text-bold"},"MY",-1),te={class:"column items-center no-wrap"},oe=t("div",{class:"text-center text-caption text-bold"},"US",-1),de=j({__name:"IndexPage",setup(e){const o=q("Japan"),r=z(),u=()=>{r.push("/home")};return(p,g)=>(D(),I(W,{class:"row items-center justify-evenly"},{default:d(()=>[t("div",null,[t("div",N,b(p.$t("chooseTitle")),1),t("div",U,[i(c,{src:`/src/assets/icon/select_${o.value}.png`,width:"77px"},null,8,["src"]),t("div",G,b(o.value),1)]),t("div",null,[i(J,{modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=h=>o.value=h),push:"",flat:"",dense:"",class:"q-gutter-x-sm",color:"black","toggle-color":"primary",options:[{value:"Japan",slot:"1"},{value:"China",slot:"2"},{value:"Russia",slot:"3"},{value:"Malaysia",slot:"4"},{value:"Russia",slot:"5"}]},{1:d(()=>[t("div",Y,[i(c,{src:f,width:"53px",height:"53px"}),E])]),2:d(()=>[t("div",H,[i(c,{src:A,width:"53px",height:"53px"}),K])]),3:d(()=>[t("div",L,[i(c,{src:M,width:"53px",height:"53px"}),X])]),4:d(()=>[t("div",Z,[i(c,{src:O,width:"53px",height:"53px"}),ee])]),5:d(()=>[t("div",te,[i(c,{src:f,width:"53px",height:"53px"}),oe])]),_:1},8,["modelValue"]),t("div",null,[i(B,{label:p.$t("continue"),class:"full-width bg-primary text-white",flat:"",color:"primary",style:{"margin-top":"30px",height:"45px"},onClick:u},null,8,["label"])])])])]),_:1}))}});export{de as default};
