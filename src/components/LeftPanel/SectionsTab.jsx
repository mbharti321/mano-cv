import React, { useState } from 'react';
import EditPersonal from '../Editors/EditPersonal';
import SectionEditor from '../Editors/SectionEditor';
import './SectionsTab.css';

export default function SectionsTab({ resume, update, onAddSection }) {
  const [expandedPersonal, setExpandedPersonal] = useState(false);
  const [expanded, setExpanded] = useState({});
  const toggle = id => setExpanded(p => ({ ...p, [id]: !p[id] }));

  return (
    <div>
      {/* Personal */}
      <div className="section-row" style={{marginBottom:7,borderColor:expandedPersonal?"#e84393":"#eee"}}>
        <div className="section-header" onClick={()=>setExpandedPersonal(v=>!v)}>
          <span className="drag-icon">⠿</span>
          <span style={{flex:1,fontSize:13,fontWeight:700,color:"#1a1a2e"}}>Personal Info</span>
          <span className={`chevron${expandedPersonal?" open":""}`}>▼</span>
        </div>
        {expandedPersonal&&<div className="section-body"><EditPersonal resume={resume} update={update}/></div>}
      </div>

      {/* Sections */}
      {resume.sections.map(sec=>(
        <div key={sec.id} className={`section-row${expanded[sec.id]?" expanded":""}`}>
          <div className="section-header">
            <span className="drag-icon">⠿</span>
            <button className={`eye-btn${sec.visible?"":" off"}`} onClick={e=>{e.stopPropagation();update(n=>{const s=n.sections.find(x=>x.id===sec.id);if(s)s.visible=!s.visible;});}}>
              {sec.visible?"👁":"○"}
            </button>
            <input
              className={`sec-title-input${sec.visible?"":" dimmed"}`}
              value={sec.title}
              onChange={e=>update(n=>{const s=n.sections.find(x=>x.id===sec.id);if(s)s.title=e.target.value;})}
              onClick={e=>e.stopPropagation()}
            />
            <button className="del-btn" onClick={e=>{e.stopPropagation();if(window.confirm("Delete this section?"))update(n=>{n.sections=n.sections.filter(x=>x.id!==sec.id);});}} title="Delete section">✕</button>
            <span className={`chevron${expanded[sec.id]?" open":""}`} onClick={()=>toggle(sec.id)}>▼</span>
          </div>
          {expanded[sec.id]&&(
            <div className="section-body" onClick={e=>e.stopPropagation()}>
              <SectionEditor sec={sec} update={update}/>
            </div>
          )}
        </div>
      ))}
      <button className="add-section-btn" onClick={onAddSection}>+ Add New Section</button>
    </div>
  );
}
