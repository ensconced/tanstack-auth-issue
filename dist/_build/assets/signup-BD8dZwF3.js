import{u as n,a as o,s as r,j as a,A as i}from"./client-DgwULqby.js";const p=function(){const t=n({fn:o(r)});return a.jsx(i,{actionText:"Sign Up",status:t.status,onSubmit:e=>{const s=new FormData(e.target);t.mutate({data:{email:s.get("email"),password:s.get("password")}})},afterSubmit:t.data?.error?a.jsx(a.Fragment,{children:a.jsx("div",{className:"text-red-400",children:t.data.message})}):null})};export{p as component};
