import React, { useState } from 'react';
// import { uid } from '../../utils';
import './AddSectionModal.css';

export default function AddSectionModal({ onAdd, onClose }) {
  const [title, setTitle] = useState("New Section");
  const [type, setType] = useState("text");
  const types=[
    {v:"text",l:"Text / Paragraph"},
    {v:"skills",l:"Skills"},
    {v:"experience",l:"Work Experience"},
    {v:"projects",l:"Projects"},
    {v:"education",l:"Education"},
    {v:"publications",l:"Publications"},
    {v:"list",l:"List (Certifications etc.)"},
    {v:"custom",l:"Custom (Free-form)"},
  ];
  return (
    <div className="overlay" onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div className="modal">
        <div className="modal-title">Add New Section</div>
        <div className="fg"><label className="fl">Section Title</label><input className="fi" value={title} onChange={e=>setTitle(e.target.value)} autoFocus/></div>
        <div className="fg"><label className="fl">Section Type</label>
          <select className="fi" value={type} onChange={e=>setType(e.target.value)}>
            {types.map(t=><option key={t.v} value={t.v}>{t.l}</option>)}
          </select>
        </div>
        <div className="modal-actions">
          <button className="btn ghost" onClick={onClose}>Cancel</button>
          <button className="btn pink" onClick={()=>onAdd(type,title)}>Add Section</button>
        </div>
      </div>
    </div>
  );
}
