import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./Pagination-CByB8qVB.js";var i,a=t((()=>{n(),i=({style:e=`default`,layout:t=`auto`,density:n=`default`,striped:i=`off`,sticky:a=`off`,height:o=!1,checkbox:s=!1,paginationInFooter:c=!1})=>{let l=document.createElement(`div`);l.className=`table table--container`;let u=document.createElement(`table`),d=``;return a!==`off`&&(d=`table--sticky-${a}`),a===`both`&&(d=`table--sticky-header table--sticky-footer`),u.className=[`table`,e==="default"?``:`table--${e}`,`table--${t}-layout`,`table--${n}-density`,i===`off`?``:`table--${i}-striped`,d].filter(Boolean).join(` `),u.innerHTML+=`
  <thead>
    <tr>
      ${s?`<th><div class='flex items-center gap-sm'><input type='checkbox' /><span>Select</span></div></th>`:``}
      <th>Movie</th>
      <th>Year Released</th>
      <th>Trilogy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode IV - A New Hope</td>
      <td>1977</td>
      <td>Original</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode V - The Empire Strikes Back</td>
      <td>1980</td>
      <td>Original</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode VI - The Return of the Jedi</td>
      <td>1983</td>
      <td>Original</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode I - The Phantom Menace</td>
      <td>1999</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode II - Attack of the Clones</td>
      <td>2002</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode III - The Revenge of the Sith</td>
      <td>2005</td>
      <td>Prequel</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode VII - The Force Awakens</td>
      <td>2015</td>
      <td>Sequel</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Rogue One</td>
      <td>2016</td>
      <td>Anthology</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode VIII - The Last Jedi</td>
      <td>2017</td>
      <td>Sequel</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Solo</td>
      <td>2018</td>
      <td>Anthology</td>
    </tr>
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td>Episode IX - The Rise of Skywalker</td>
      <td>2019</td>
      <td>Sequel</td>
    </tr>
  </tbody>
  <tfoot>
    ${c?`
      <tr>
        <td colspan="3">
          <div class='flex justify-end'>
            ${r({}).outerHTML}
          </div>
        </td>
      </tr>
      `:`
    <tr>
      ${s?`<th><input type='checkbox' /></th>`:``}
      <td colspan="2">Total movies</td>
      <td colspan="1">11</td>
    </tr>
    `}
  </tfoot>
  `,o?(l.style.height=`20vh`,l.appendChild(u),l):u}})),o=e({ComfortableDensity:()=>f,CompactDensity:()=>p,Danger:()=>u,Default:()=>c,FixedLayout:()=>d,PaginationInFooter:()=>y,Primary:()=>l,StickyBoth:()=>v,StickyFooter:()=>_,StickyHeader:()=>g,StripedEven:()=>m,StripedOdd:()=>h,__namedExportsOrder:()=>b,default:()=>s}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=t((()=>{a(),s={title:`Components/Table`,render:({...e})=>i({...e}),argTypes:{style:{control:{type:`select`},options:[`default`,`primary`,`danger`]},layout:{control:{type:`select`},options:[`auto`,`fixed`]},density:{control:{type:`select`},options:[`default`,`comfortable`,`compact`]},striped:{control:{type:`select`},options:[`off`,`even`,`odd`]},sticky:{control:{type:`select`},options:[`off`,`header`,`footer`,`both`]},checkbox:{control:`boolean`},height:{control:`boolean`,description:`This is not a class. It just provides a fixed height to demonstrate the sticky classes`},paginationInFooter:{control:`boolean`,description:`An example of using the pagination component in the footer of the table`}}},c={args:{}},l={args:{style:`primary`}},u={args:{style:`danger`}},d={args:{layout:`fixed`}},f={args:{density:`comfortable`}},p={args:{density:`compact`}},m={args:{striped:`even`}},h={args:{striped:`odd`}},g={args:{sticky:`header`,height:!0}},_={args:{sticky:`footer`,height:!0}},v={args:{sticky:`both`,height:!0}},y={args:{sticky:`footer`,height:!0,paginationInFooter:!0}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'primary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    style: 'danger'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'fixed'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'comfortable'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    striped: 'even'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    striped: 'odd'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'header',
    height: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'footer',
    height: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'both',
    height: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: 'footer',
    height: true,
    paginationInFooter: true
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Primary`,`Danger`,`FixedLayout`,`ComfortableDensity`,`CompactDensity`,`StripedEven`,`StripedOdd`,`StickyHeader`,`StickyFooter`,`StickyBoth`,`PaginationInFooter`]}));x();export{f as ComfortableDensity,p as CompactDensity,u as Danger,c as Default,d as FixedLayout,y as PaginationInFooter,l as Primary,v as StickyBoth,_ as StickyFooter,g as StickyHeader,m as StripedEven,h as StripedOdd,b as __namedExportsOrder,s as default,x as n,o as t};