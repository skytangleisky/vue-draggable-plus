import{V as p,u as b}from"./component.2b825938.js";import{d as c,h as u,o as t,b as v,w as f,k as e,c as l,G as m,F as i,l as h,t as s,a0 as g}from"./framework.c4174f91.js";import{v as J}from"./directive.7dbad33b.js";const k=e("thead",null,[e("tr",null,[e("th",null,"Id"),e("th",null,"Name")])],-1),y={class:"sort-target"},w=c({__name:"demo",setup(_){const n=u([{name:"Joao",id:1},{name:"Jean",id:2},{name:"Johanna",id:3},{name:"Juan",id:4}]);return(r,o)=>(t(),v(h(p),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),target:".sort-target",animation:"150"},{default:f(()=>[e("table",null,[k,e("tbody",y,[(t(!0),l(i,null,m(n.value,a=>(t(),l("tr",{key:a.name,class:"cursor-move"},[e("td",null,s(a.id),1),e("td",null,s(a.name),1)]))),128))])])]),_:1},8,["modelValue"]))}}),V={class:"table table-striped"},x=e("thead",{class:"thead-dark"},[e("tr",null,[e("th",null,"Id"),e("th",null,"Name")])],-1),I=c({__name:"hooks",setup(_){const n=u([{name:"Joao",id:1},{name:"Jean",id:2},{name:"Johanna",id:3},{name:"Juan",id:4}]),r=u();return b(r,n),(o,a)=>(t(),l("table",V,[x,e("tbody",{ref_key:"el",ref:r,class:"sort-target"},[(t(!0),l(i,null,m(n.value,d=>(t(),l("tr",{key:d.name,class:"cursor-move"},[e("td",null,s(d.id),1),e("td",null,s(d.name),1)]))),128))],512)]))}}),D=e("thead",null,[e("tr",null,[e("th",null,"Id"),e("th",null,"Name")])],-1),C=c({__name:"directive",setup(_){const n=u([{name:"Joao",id:1},{name:"Jean",id:2},{name:"Johanna",id:3},{name:"Juan",id:4}]);return(r,o)=>(t(),l("table",null,[D,g((t(),l("tbody",null,[(t(!0),l(i,null,m(n.value,a=>(t(),l("tr",{key:a.name,class:"cursor-move"},[e("td",null,s(a.id),1),e("td",null,s(a.name),1)]))),128))])),[[h(J),n.value]])]))}});export{w as _,I as a,C as b};
