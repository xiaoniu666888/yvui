import{d as U,h as v,x as M,j as p,a7 as W,o as i,c as u,I as f,w as m,F as j,E as q,n as g,a0 as b,m as C,b as $,S as z}from"./framework.D9kFHdZA.js";import{d as T,_ as Y}from"./Tooltip.vue_vue_type_script_setup_true_lang.BODTrLKp.js";import{_ as G}from"./Input.vue_vue_type_script_setup_true_lang.Dwu2HV-d.js";import{_ as y,i as D}from"./Icon.vue_vue_type_script_setup_true_lang.DxazROui.js";import{R as J}from"./RenderVnode.DmCD1gjr.js";const Q={key:0,class:"yv-select__loading"},X={key:1,class:"yv-select__loading"},Z={key:2,class:"yv-select__menu"},ee=["id","onClick"],se=U({name:"YvSelect",__name:"Select",props:{modelValue:{},options:{default:()=>[]},placeholder:{},disabled:{type:Boolean},clearable:{type:Boolean},renderLabel:{},filterable:{type:Boolean},filterMethod:{},remote:{type:Boolean},remoteMethod:{}},emits:["change","update:modelValue","visible-change","clear"],setup(B,{emit:S}){const _=l=>{const n=t.options.find(a=>a.value===l);return n||null},t=B,r=S,F=v(()=>t.remote?300:0);let c=_(t.modelValue);M(()=>t.modelValue,l=>{c=_(l)});const h=p(),k=p(),e=W({inputValue:c?c.label:"",selectedOption:c,mouseHover:!1,loading:!1,highlightIndex:-1}),s=p(!1),R=v(()=>t.clearable&&e.mouseHover&&e.selectedOption&&e.inputValue.trim()!==""),H=()=>{e.selectedOption=null,e.inputValue="",r("change",""),r("clear"),r("update:modelValue","")},E={modifiers:[{name:"offset",options:{offset:[0,9]}},{name:"sameWidth",enabled:!0,fn:({state:l})=>{l.styles.popper.width=`${l.rects.reference.width}px`},phase:"beforeWrite",requires:["computeStyles"]}]},o=p(t.options);M(()=>t.options,l=>{o.value=l});const w=async l=>{if(t.filterable){if(t.filterMethod&&D(t.filterMethod))o.value=t.filterMethod(l);else if(t.remote&&t.remoteMethod&&D(t.remoteMethod)){e.loading=!0;try{o.value=await t.remoteMethod(l)}catch(n){console.error(n),o.value=[]}finally{e.loading=!1}}else o.value=t.options.filter(n=>n.label.includes(l));e.highlightIndex=-1}},L=()=>{w(e.inputValue)},A=T(()=>{L()},F.value),K=v(()=>t.filterable&&e.selectedOption&&s.value?e.selectedOption.label:t.placeholder),d=l=>{l?(t.filterable&&e.selectedOption&&(e.inputValue=""),t.filterable&&w(e.inputValue),h.value.show()):(h.value.hide(),t.filterable&&(e.inputValue=e.selectedOption?e.selectedOption.label:""),e.highlightIndex=-1),s.value=l,r("visible-change",l)},N=()=>{t.disabled||(s.value?d(!1):d(!0))},I=()=>{},O=async l=>{l.disabled||(e.inputValue=l.label,e.selectedOption=l,r("change",l.value),r("update:modelValue",l.value),d(!1),await z(),k.value.ref.focus())},P=l=>{switch(l.key){case"Enter":s.value?e.highlightIndex>-1&&o.value[e.highlightIndex]&&O(o.value[e.highlightIndex]):d(!0);break;case"Escape":s.value&&d(!1);break;case"ArrowUp":l.preventDefault(),o.value.length>0&&(e.highlightIndex===-1||e.highlightIndex===0?e.highlightIndex=o.value.length-1:e.highlightIndex--);break;case"ArrowDown":l.preventDefault(),o.value.length>0&&(e.highlightIndex===-1||e.highlightIndex===o.value.length-1?e.highlightIndex=0:e.highlightIndex++);break}};return(l,n)=>(i(),u("div",{class:g(["yv-select",{"is-disabled":l.disabled}]),onClick:N,onMouseenter:n[2]||(n[2]=a=>e.mouseHover=!0),onMouseleave:n[3]||(n[3]=a=>e.mouseHover=!1)},[f(Y,{ref_key:"tooltipRef",ref:h,placement:"bottom-start",manual:"","popper-options":E,onClickOutside:n[1]||(n[1]=a=>d(!1))},{content:m(()=>[e.loading?(i(),u("div",Q,[f(y,{icon:"spinner",spin:""})])):l.filterable&&o.value.length===0?(i(),u("div",X," no Data ")):(i(),u("ul",Z,[(i(!0),u(j,null,q(o.value,(a,V)=>{var x;return i(),u("li",{key:V,class:g(["yv-select__menu-item",{"is-disabled":a.disabled,"is-selected":((x=e.selectedOption)==null?void 0:x.value)===a.value,"is-highlight":e.highlightIndex===V}]),id:`select-item-${a.value}`,onClick:b(le=>O(a),["stop"]),onMousedown:b(I,["prevent"])},[f(C(J),{"v-node":l.renderLabel?l.renderLabel(a):a.label},null,8,["v-node"])],42,ee)}),128))]))]),default:m(()=>[f(G,{ref_key:"inputRef",ref:k,modelValue:e.inputValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e.inputValue=a),disabled:l.disabled,placeholder:K.value,readonly:!l.filterable||!s.value,onInput:C(A),onKeydown:P},{suffix:m(()=>[R.value?(i(),$(y,{key:0,icon:"circle-xmark",class:"yv-input__clear",onClick:H,onMousedown:b(I,["prevent"])})):(i(),$(y,{key:1,icon:"angle-down",class:g(["header-angle",{"is-active":s.value}])},null,8,["class"]))]),_:1},8,["modelValue","disabled","placeholder","readonly","onInput"])]),_:1},512)],34))}});export{se as _};
