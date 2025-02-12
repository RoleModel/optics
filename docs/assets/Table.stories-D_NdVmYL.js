import{c as nt}from"./Pagination-CeSb3t6J.js";const dt=({style:h="default",layout:et="auto",density:rt="default",striped:b="off",sticky:y="off",height:ot=!1,checkbox:t=!1,paginationInFooter:at=!1})=>{const m=document.createElement("div");m.className="table table--container";const g=document.createElement("table");let f="";y!=="off"&&(f=`table--sticky-${y}`),y==="both"&&(f="table--sticky-header table--sticky-footer"),g.className=["table",h!=="default"?`table--${h}`:"",`table--${et}-layout`,`table--${rt}-density`,b==="off"?"":`table--${b}-striped`,f].filter(Boolean).join(" ");const st=()=>at?`
      <tr>
        <td colspan="3">
          <div class='flex justify-end'>
            ${nt({}).outerHTML}
          </div>
        </td>
      </tr>
      `:`
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
    `;return g.innerHTML+=`
  <thead>
    <tr>
      ${t?"<th><div class='flex items-center gap-sm'><input type='checkbox' /><span>Select</span></div></th>":""}
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      ${t?"<th><input type='checkbox' /></th>":""}
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    ${st()}
  </tfoot>
  `,ot?(m.style.height="20vh",m.appendChild(g),m):g},it={title:"Content Components/Table",render:({...h})=>dt({...h}),argTypes:{style:{control:{type:"select"},options:["default","primary","danger"]},layout:{control:{type:"select"},options:["auto","fixed"]},density:{control:{type:"select"},options:["default","comfortable","compact"]},striped:{control:{type:"select"},options:["off","even","odd"]},sticky:{control:{type:"select"},options:["off","header","footer","both"]},checkbox:{control:"boolean"},height:{control:"boolean",description:"This is not a class. It just provides a fixed height to demonstrate the sticky classes"},paginationInFooter:{control:"boolean",description:"An example of using the pagination component in the footer of the table"}}},e={args:{}},r={args:{style:"primary"}},o={args:{style:"danger"}},a={args:{layout:"fixed"}},s={args:{density:"comfortable"}},n={args:{density:"compact"}},d={args:{striped:"even"}},i={args:{striped:"odd"}},c={args:{sticky:"header",height:!0}},p={args:{sticky:"footer",height:!0}},l={args:{sticky:"both",height:!0}},u={args:{sticky:"footer",height:!0,paginationInFooter:!0}};var S,k,I;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(I=(k=e.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var $,T,v;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    style: 'primary'
  }
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var E,x,C;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    style: 'danger'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var F,P,D;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    layout: 'fixed'
  }
}`,...(D=(P=a.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var O,_,q;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    density: 'comfortable'
  }
}`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,j,H;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  }
}`,...(H=(j=n.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var L,M,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    striped: 'even'
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var V,B,w;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    striped: 'odd'
  }
}`,...(w=(B=i.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var N,J,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    sticky: 'header',
    height: true
  }
}`,...(z=(J=c.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var X,Y,G;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    sticky: 'footer',
    height: true
  }
}`,...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var K,Q,U;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    sticky: 'both',
    height: true
  }
}`,...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Z,tt;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    sticky: 'footer',
    height: true,
    paginationInFooter: true
  }
}`,...(tt=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};const ct=["Default","Primary","Danger","FixedLayout","ComfortableDensity","CompactDensity","StripedEven","StripedOdd","StickyHeader","StickyFooter","StickyBoth","PaginationInFooter"],lt=Object.freeze(Object.defineProperty({__proto__:null,ComfortableDensity:s,CompactDensity:n,Danger:o,Default:e,FixedLayout:a,PaginationInFooter:u,Primary:r,StickyBoth:l,StickyFooter:p,StickyHeader:c,StripedEven:d,StripedOdd:i,__namedExportsOrder:ct,default:it},Symbol.toStringTag,{value:"Module"}));export{s as C,e as D,a as F,r as P,d as S,lt as T,o as a,n as b,i as c,c as d,p as e,l as f,u as g};
