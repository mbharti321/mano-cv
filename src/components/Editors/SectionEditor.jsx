import React, { useState } from 'react';
import { uid } from '../../utils';

export default function SectionEditor({ sec, update }) {
  const upd = fn => update(n => { const s = n.sections.find(x => x.id === sec.id); if (s) fn(s); });
  if (sec.type === 'text') return <EditText sec={sec} upd={upd} />;
  if (sec.type === 'skills') return <EditSkills sec={sec} upd={upd} />;
  if (sec.type === 'experience') return <EditExperience sec={sec} upd={upd} />;
  if (sec.type === 'projects') return <EditProjects sec={sec} upd={upd} />;
  if (sec.type === 'education') return <EditEducation sec={sec} upd={upd} />;
  if (sec.type === 'publications') return <EditPublications sec={sec} upd={upd} />;
  if (sec.type === 'list') return <EditList sec={sec} upd={upd} />;
  return <div style={{fontSize:12,color:'#888'}}>Unsupported type: {sec.type}</div>;
}

function EditText({sec,upd}){
  return <div className="fg"><label className="fl">Content</label><textarea className="fta" style={{minHeight:100}} value={sec.content} onChange={e=>upd(s=>s.content=e.target.value)}/></div>;
}

function EditSkills({sec,upd}){
  return(
    <div>
      {sec.items.map((item,i)=>(
        <div key={item.id} className="skill-row">
          <button className={`eye-btn${item.visible?"":" off"}`} onClick={()=>upd(s=>{s.items[i].visible=!s.items[i].visible;})}>{item.visible?"👁":"○"}</button>
          <input className="sk-label" placeholder="Category" value={item.label} onChange={e=>upd(s=>{s.items[i].label=e.target.value;})}/>
          <input className="sk-val" placeholder="Skills..." value={item.value} onChange={e=>upd(s=>{s.items[i].value=e.target.value;})}/>
          <button className="icon-btn" onClick={()=>upd(s=>{s.items.splice(i,1);})}>✕</button>
        </div>
      ))}
      <button className="add-btn" onClick={()=>upd(s=>{s.items.push({id:uid(),label:"",value:"",visible:true});})}>+ Add Skill Category</button>
    </div>
  );
}

function EditExperience({sec,upd}){
  const [exp,setExp]=useState({});
  return(
    <div>
      {sec.items.map((item,i)=>(
        <div key={item.id} className="icard">
          <div className="icard-hd" onClick={()=>setExp(p=>({...p,[item.id]:!p[item.id]}))}>
            <button className={`eye-btn${item.visible?"":" off"}`} onClick={e=>{e.stopPropagation();upd(s=>{s.items[i].visible=!s.items[i].visible;});}}>{item.visible?"👁":"○"}</button>
            <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.title||"New Experience"}</span>
            <button className="icon-btn" onClick={e=>{e.stopPropagation();upd(s=>{s.items.splice(i,1);});}}>✕</button>
            <span className={`chevron${exp[item.id]?" open":""}`}>▼</span>
          </div>
          {exp[item.id]&&(
            <div className="icard-body">
              <div className="fg"><label className="fl">Job Title</label><input className="fi" value={item.title} onChange={e=>upd(s=>{s.items[i].title=e.target.value;})}/></div>
              <div className="fg"><label className="fl">Company</label><input className="fi" value={item.company} onChange={e=>upd(s=>{s.items[i].company=e.target.value;})}/></div>
              <div className="fg"><label className="fl">Company URL</label><input className="fi" placeholder="https://..." value={item.companyUrl||""} onChange={e=>upd(s=>{s.items[i].companyUrl=e.target.value;})}/></div>
              <div className="frow">
                <div className="fg"><label className="fl">Start Date</label><input className="fi" value={item.startDate} onChange={e=>upd(s=>{s.items[i].startDate=e.target.value;})}/></div>
                <div className="fg"><label className="fl">End Date</label><input className="fi" value={item.endDate} onChange={e=>upd(s=>{s.items[i].endDate=e.target.value;})}/></div>
              </div>
              <div className="fg"><label className="fl">Location</label><input className="fi" value={item.location} onChange={e=>upd(s=>{s.items[i].location=e.target.value;})}/></div>
              <div className="fg"><label className="fl">Bullet Points</label>
                {item.bullets.map((b,bi)=>(
                  <div key={b.id} className={`bullet-row${b.visible?"":" off"}`}>
                    <button className="bicon-btn" onClick={()=>upd(s=>{s.items[i].bullets[bi].visible=!s.items[i].bullets[bi].visible;})}>{b.visible?"👁":"○"}</button>
                    <textarea className="btext" value={b.text} rows={2} onChange={e=>upd(s=>{s.items[i].bullets[bi].text=e.target.value;})}/>
                    <button className="bicon-btn" onClick={()=>upd(s=>{s.items[i].bullets.splice(bi,1);})}>✕</button>
                  </div>
                ))}
                <button className="add-btn" onClick={()=>upd(s=>{s.items[i].bullets.push({id:uid(),text:"",visible:true});})}>+ Add Bullet</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button className="add-btn" onClick={()=>upd(s=>{s.items.push({id:uid(),title:"New Position",company:"",companyUrl:"",startDate:"",endDate:"",location:"",visible:true,bullets:[]});})}>+ Add Experience</button>
    </div>
  );
}

function EditProjects({sec,upd}){
  const [exp,setExp]=useState({});
  return(
    <div>
      {sec.items.map((item,i)=>(
        <div key={item.id} className="icard">
          <div className="icard-hd" onClick={()=>setExp(p=>({...p,[item.id]:!p[item.id]}))}>
            <button className={`eye-btn${item.visible?"":" off"}`} onClick={e=>{e.stopPropagation();upd(s=>{s.items[i].visible=!s.items[i].visible;});}}>{item.visible?"👁":"○"}</button>
            <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.title||"New Project"}</span>
            <button className="icon-btn" onClick={e=>{e.stopPropagation();upd(s=>{s.items.splice(i,1);});}}>✕</button>
            <span className={`chevron${exp[item.id]?" open":""}`}>▼</span>
          </div>
          {exp[item.id]&&(
            <div className="icard-body">
              <div className="fg"><label className="fl">Project Title</label><input className="fi" value={item.title} onChange={e=>upd(s=>{s.items[i].title=e.target.value;})}/></div>
              <div className="fg"><label className="fl">Subtitle / Type</label><input className="fi" value={item.subtitle||""} onChange={e=>upd(s=>{s.items[i].subtitle=e.target.value;})}/></div>
              <div className="fg"><label className="fl">URL (optional)</label><input className="fi" placeholder="https://..." value={item.url||""} onChange={e=>upd(s=>{s.items[i].url=e.target.value;})}/></div>
              <div className="fg"><label className="fl">Bullet Points</label>
                {item.bullets.map((b,bi)=>(
                  <div key={b.id} className={`bullet-row${b.visible?"":" off"}`}>
                    <button className="bicon-btn" onClick={()=>upd(s=>{s.items[i].bullets[bi].visible=!s.items[i].bullets[bi].visible;})}>{b.visible?"👁":"○"}</button>
                    <textarea className="btext" value={b.text} rows={2} onChange={e=>upd(s=>{s.items[i].bullets[bi].text=e.target.value;})}/>
                    <button className="bicon-btn" onClick={()=>upd(s=>{s.items[i].bullets.splice(bi,1);})}>✕</button>
                  </div>
                ))}
                <button className="add-btn" onClick={()=>upd(s=>{s.items[i].bullets.push({id:uid(),text:"",visible:true});})}>+ Add Bullet</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <button className="add-btn" onClick={()=>upd(s=>{s.items.push({id:uid(),title:"New Project",subtitle:"",url:"",visible:true,bullets:[]});})}>+ Add Project</button>
    </div>
  );
}

function EditEducation({sec,upd}){
  const [exp,setExp]=useState({});
  return(
    <div>
      {sec.items.map((item,i)=>(
        <div key={item.id} className="icard">
          <div className="icard-hd" onClick={()=>setExp(p=>({...p,[item.id]:!p[item.id]}))}>
            <button className={`eye-btn${item.visible?"":" off"}`} onClick={e=>{e.stopPropagation();upd(s=>{s.items[i].visible=!s.items[i].visible;});}}>{item.visible?"👁":"○"}</button>
            <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.degree||"New Degree"}</span>
            <button className="icon-btn" onClick={e=>{e.stopPropagation();upd(s=>{s.items.splice(i,1);});}}>✕</button>
            <span className={`chevron${exp[item.id]?" open":""}`}>▼</span>
          </div>
          {exp[item.id]&&(
            <div className="icard-body">
              <div className="fg"><label className="fl">Degree</label><input className="fi" value={item.degree} onChange={e=>upd(s=>{s.items[i].degree=e.target.value;})}/></div>
              <div className="fg"><label className="fl">School / University</label><input className="fi" value={item.school} onChange={e=>upd(s=>{s.items[i].school=e.target.value;})}/></div>
              <div className="fg"><label className="fl">School URL</label><input className="fi" placeholder="https://..." value={item.schoolUrl||""} onChange={e=>upd(s=>{s.items[i].schoolUrl=e.target.value;})}/></div>
              <div className="frow">
                <div className="fg"><label className="fl">Start Date</label><input className="fi" value={item.startDate} onChange={e=>upd(s=>{s.items[i].startDate=e.target.value;})}/></div>
                <div className="fg"><label className="fl">End Date</label><input className="fi" value={item.endDate} onChange={e=>upd(s=>{s.items[i].endDate=e.target.value;})}/></div>
              </div>
              <div className="fg"><label className="fl">Location</label><input className="fi" value={item.location} onChange={e=>upd(s=>{s.items[i].location=e.target.value;})}/></div>
              <div className="fg"><label className="fl">Description (optional)</label><textarea className="fta" value={item.description||""} onChange={e=>upd(s=>{s.items[i].description=e.target.value;})}/></div>
            </div>
          )}
        </div>
      ))}
      <button className="add-btn" onClick={()=>upd(s=>{s.items.push({id:uid(),degree:"",school:"",schoolUrl:"",startDate:"",endDate:"",location:"",description:"",visible:true});})}>+ Add Education</button>
    </div>
  );
}

function EditPublications({sec,upd}){
  return(
    <div>
      {sec.items.map((item,i)=>(
        <div key={item.id} className="icard" style={{marginTop:6}}>
          <div className="icard-body">
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}>
              <button className={`eye-btn${item.visible?"":" off"}`} onClick={()=>upd(s=>{s.items[i].visible=!s.items[i].visible;})}>{item.visible?"👁":"○"}</button>
              <strong style={{fontSize:12,flex:1}}>Publication {i+1}</strong>
              <button className="icon-btn" onClick={()=>upd(s=>{s.items.splice(i,1);})}>✕</button>
            </div>
            <div className="fg"><label className="fl">Title</label><input className="fi" value={item.title} onChange={e=>upd(s=>{s.items[i].title=e.target.value;})}/></div>
            <div className="frow">
              <div className="fg"><label className="fl">Publisher</label><input className="fi" value={item.publisher} onChange={e=>upd(s=>{s.items[i].publisher=e.target.value;})}/></div>
              <div className="fg"><label className="fl">Date</label><input className="fi" value={item.date} onChange={e=>upd(s=>{s.items[i].date=e.target.value;})}/></div>
            </div>
            <div className="fg"><label className="fl">URL</label><input className="fi" placeholder="https://..." value={item.url||""} onChange={e=>upd(s=>{s.items[i].url=e.target.value;})}/></div>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={()=>upd(s=>{s.items.push({id:uid(),title:"",publisher:"",date:"",url:"",visible:true});})}>+ Add Publication</button>
    </div>
  );
}

function EditList({sec,upd}){
  return(
    <div>
      {sec.items.map((item,i)=>(
        <div key={item.id} className="list-row">
          <button className={`eye-btn${item.visible?"":" off"}`} onClick={()=>upd(s=>{s.items[i].visible=!s.items[i].visible;})}>{item.visible?"👁":"○"}</button>
          <input className="fi" style={{flex:1.5}} placeholder="Title / Name" value={item.text} onChange={e=>upd(s=>{s.items[i].text=e.target.value;})}/>
          <input className="fi" style={{flex:1}} placeholder="Source" value={item.source||""} onChange={e=>upd(s=>{s.items[i].source=e.target.value;})}/>
          <input className="fi" style={{flex:1}} placeholder="URL" value={item.url||""} onChange={e=>upd(s=>{s.items[i].url=e.target.value;})}/>
          <button className="icon-btn" onClick={()=>upd(s=>{s.items.splice(i,1);})}>✕</button>
        </div>
      ))}
      <button className="add-btn" onClick={()=>upd(s=>{s.items.push({id:uid(),text:"",source:"",url:"",visible:true});})}>+ Add Item</button>
    </div>
  );
}