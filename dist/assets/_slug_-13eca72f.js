import{d as h,s as x,g as i,r as v,o as y,a as p,c as B,u as e,b as $,e as w,f as s,h as N,t as g,F as k,_ as C,i as V}from"./index-4859262b.js";const b={class:"mt-12 flex flex-col md:px-32 px-12 my-24 gap-4 items-center w-3/4 mx-auto"},D={class:"page-img"},F=["src","alt"],A={class:"text-3xl mt-2 text-primary font-semibold"},E={class:"leading-8 text-1xl"},S=h({__name:"[slug]",setup(I){const{news:_,getNewsById:t}=x(i()),o=v(!1);return y(()=>{console.log(1),_.value.length===0&&(o.value=!0,i().getNews().finally(()=>{o.value=!1}))}),(a,M)=>{var l,n,r,c,u,m;const d=V,f=C;return p(),B(k,null,[e(o)?(p(),$(d,{key:0})):w("",!0),s("div",null,[N(f,{img:"newsBg",title:(n=e(t)((l=a.$route.params)==null?void 0:l.slug))==null?void 0:n.header},null,8,["title"]),s("div",b,[s("div",D,[s("img",{src:`${(r=e(t)(a.$route.params.slug))==null?void 0:r.image}`,alt:(c=e(t)(a.$route.params.slug))==null?void 0:c.content,class:"w-full mx-auto"},null,8,F)]),s("h1",A,g((u=e(t)(a.$route.params.slug))==null?void 0:u.header),1),s("p",E,g((m=e(t)(a.$route.params.slug))==null?void 0:m.content),1)])])],64)}}});export{S as default};