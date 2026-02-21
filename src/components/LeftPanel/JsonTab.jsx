import React from 'react';
import './JsonTab.css';

export default function JsonTab({ jsonText, setJsonText, onApply }) {
  return (
    <div>
      <p style={{fontSize:12,color:"#888",marginBottom:8}}>Edit the JSON below and click Apply to update your resume, or use Export to save.</p>
      <textarea className="json-ta" value={jsonText} onChange={e=>setJsonText(e.target.value)}/>
      <button className="btn pink" style={{width:"100%",marginTop:8,padding:9}} onClick={onApply}>Apply JSON Changes</button>
    </div>
  );
}
