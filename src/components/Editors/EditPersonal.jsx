import React from 'react';
import { uid } from '../../utils';

export default function EditPersonal({ resume, update }) {
  const p = resume.personal;
  const upd = (field, val) => update(n => { n.personal[field] = val; });
  const updLink = (id, field, val) => update(n => {
    const l = n.personal.links.find(x => x.id === id);
    if (l) l[field] = val;
  });

  return (
    <div>
      <div className="personal-block">
        <div className="pblock-title">Basic Info</div>
        <div className="fg"><label className="fl">Full Name</label><input className="fi" value={p.name} onChange={e=>upd("name",e.target.value)}/></div>
        <div className="fg"><label className="fl">Professional Title</label><input className="fi" value={p.title} onChange={e=>upd("title",e.target.value)}/></div>
        <div className="frow">
          <div className="fg"><label className="fl">Email</label><input className="fi" value={p.email} onChange={e=>upd("email",e.target.value)}/></div>
          <div className="fg"><label className="fl">Phone</label><input className="fi" value={p.phone} onChange={e=>upd("phone",e.target.value)}/></div>
        </div>
        <div className="fg"><label className="fl">Location</label><input className="fi" value={p.location} onChange={e=>upd("location",e.target.value)}/></div>
        <div className="fg"><label className="fl">Portfolio URL</label><input className="fi" value={p.portfolio||""} onChange={e=>upd("portfolio",e.target.value)}/></div>
      </div>
      <div className="personal-block">
        <div className="pblock-title">Links & Profiles</div>
        {p.links.map(link=>
          <div key={link.id} className="link-row">
            <button className={`eye-btn${link.visible?"":" off"}`} onClick={()=>updLink(link.id,"visible",!link.visible)}>{link.visible?"👁":"○"}</button>
            <input className="fi" style={{width:"28%"}} placeholder="Label" value={link.label} onChange={e=>updLink(link.id,"label",e.target.value)}/>
            <input className="fi" style={{flex:1}} placeholder="Display text" value={link.text} onChange={e=>updLink(link.id,"text",e.target.value)}/>
            <input className="fi" style={{flex:1}} placeholder="URL" value={link.url} onChange={e=>updLink(link.id,"url",e.target.value)}/>
            <button className="icon-btn" onClick={()=>update(n=>{n.personal.links=n.personal.links.filter(x=>x.id!==link.id);})}>✕</button>
          </div>
        )}
        <button className="add-btn" onClick={()=>update(n=>{n.personal.links.push({id:uid(),label:"Link",text:"",url:"",visible:true});})}>+ Add Link</button>
      </div>
    </div>
  );
}
