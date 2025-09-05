import{c as v}from"./Pagination-CeSb3t6J.js";const E=({style:h="default",layout:S="auto",density:k="default",striped:b="off",sticky:y="off",height:I=!1,checkbox:t=!1,paginationInFooter:$=!1})=>{const m=document.createElement("div");m.className="table table--container";const g=document.createElement("table");let f="";y!=="off"&&(f=`table--sticky-${y}`),y==="both"&&(f="table--sticky-header table--sticky-footer"),g.className=["table",h!=="default"?`table--${h}`:"",`table--${S}-layout`,`table--${k}-density`,b==="off"?"":`table--${b}-striped`,f].filter(Boolean).join(" ");const T=()=>$?`
      <tr>
        <td colspan="3">
          <div class='flex justify-end'>
            ${v({}).outerHTML}
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
    ${T()}
  </tfoot>
  `,I?(m.style.height="20vh",m.appendChild(g),m):g},x={title:"Components/Table",render:({...h})=>E({...h}),argTypes:{style:{control:{type:"select"},options:["default","primary","danger"]},layout:{control:{type:"select"},options:["auto","fixed"]},density:{control:{type:"select"},options:["default","comfortable","compact"]},striped:{control:{type:"select"},options:["off","even","odd"]},sticky:{control:{type:"select"},options:["off","header","footer","both"]},checkbox:{control:"boolean"},height:{control:"boolean",description:"This is not a class. It just provides a fixed height to demonstrate the sticky classes"},paginationInFooter:{control:"boolean",description:"An example of using the pagination component in the footer of the table"}}},e={args:{}},r={args:{style:"primary"}},o={args:{style:"danger"}},a={args:{layout:"fixed"}},s={args:{density:"comfortable"}},n={args:{density:"compact"}},d={args:{striped:"even"}},i={args:{striped:"odd"}},c={args:{sticky:"header",height:!0}},p={args:{sticky:"footer",height:!0}},l={args:{sticky:"both",height:!0}},u={args:{sticky:"footer",height:!0,paginationInFooter:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'primary'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'danger'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'fixed'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'comfortable'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    striped: 'even'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    striped: 'odd'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'header',
    height: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'footer',
    height: true
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'both',
    height: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'footer',
    height: true,
    paginationInFooter: true
  }
}`,...u.parameters?.docs?.source}}};const F=["Default","Primary","Danger","FixedLayout","ComfortableDensity","CompactDensity","StripedEven","StripedOdd","StickyHeader","StickyFooter","StickyBoth","PaginationInFooter"],C=Object.freeze(Object.defineProperty({__proto__:null,ComfortableDensity:s,CompactDensity:n,Danger:o,Default:e,FixedLayout:a,PaginationInFooter:u,Primary:r,StickyBoth:l,StickyFooter:p,StickyHeader:c,StripedEven:d,StripedOdd:i,__namedExportsOrder:F,default:x},Symbol.toStringTag,{value:"Module"}));export{s as C,e as D,a as F,r as P,d as S,C as T,o as a,n as b,i as c,c as d,p as e,l as f,u as g};
