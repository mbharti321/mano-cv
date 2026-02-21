import React, { useState, useCallback, useEffect } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SectionsTab from './components/LeftPanel/SectionsTab';
import CustomizeTab from './components/LeftPanel/CustomizeTab';
import JsonTab from './components/LeftPanel/JsonTab';
import AddSectionModal from './components/Modals/AddSectionModal';
import ResumePreview from './components/Preview/ResumePreview';
import { useHistory } from './hooks/useHistory';
import { INIT, DFLT_CUSTOM } from './data';
import { cl, uid } from './utils';
import './App.css';

function App() {
  const { current: resume, push: pushResume, undo, redo, canUndo, canRedo } = useHistory(INIT);
  const [custom, setCustom] = useState(DFLT_CUSTOM);
  const [tab, setTab] = useState('sections');
  const [addModal, setAddModal] = useState(false);
  const [jsonText, setJsonText] = useState('');

  const update = useCallback(fn => {
    const next = cl(resume);
    fn(next);
    pushResume(next);
  }, [resume, pushResume]);

  useEffect(() => {
    const handler = e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo, redo]);

  useEffect(() => {
    if (tab === 'json') setJsonText(JSON.stringify({ resume, customization: custom }, null, 2));
  }, [tab, resume, custom]);

  const exportJSON = () => {
    const b = new Blob([JSON.stringify({ resume, customization: custom }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = `${resume.personal.name.replace(/\s+/g, '-')}-resume.json`;
    a.click();
  };

  const createCopy = () => {
    const b = new Blob([JSON.stringify({ resume, customization: custom }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = `${resume.personal.name.replace(/\s+/g, '-')}-copy-${Date.now()}.json`;
    a.click();
  };

  const importJSON = () => {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.json';
    inp.onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = ev => {
        try {
          const d = JSON.parse(ev.target.result);
          if (d.resume) pushResume(d.resume);
          if (d.customization) setCustom(d.customization);
          alert('Resume loaded successfully!');
        } catch {
          alert('Invalid JSON file.');
        }
      };
      r.readAsText(f);
    };
    inp.click();
  };

  const applyJSON = () => {
    try {
      const d = JSON.parse(jsonText);
      if (d.resume) update(n => { Object.assign(n, d.resume); });
      if (d.customization) setCustom(d.customization);
      alert('Applied!');
    } catch {
      alert('Invalid JSON.');
    }
  };

  const addSection = (type, title) => {
    const templates = {
      text: { id: uid(), title, type: 'text', visible: true, content: '' },
      skills: { id: uid(), title, type: 'skills', visible: true, items: [{ id: uid(), label: 'Category', value: 'Skill 1, Skill 2', visible: true }] },
      experience: { id: uid(), title, type: 'experience', visible: true, items: [] },
      projects: { id: uid(), title, type: 'projects', visible: true, items: [] },
      education: { id: uid(), title, type: 'education', visible: true, items: [] },
      publications: { id: uid(), title, type: 'publications', visible: true, items: [] },
      list: { id: uid(), title, type: 'list', visible: true, items: [{ id: uid(), text: 'Item', source: '', url: '', visible: true }] },
      custom: { id: uid(), title, type: 'text', visible: true, content: '' },
    };
    update(n => { n.sections.push(templates[type] || templates.text); });
    setAddModal(false);
  };

  return (
    <div className="app">
      <Toolbar
        undo={undo}
        redo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
        importJSON={importJSON}
        exportJSON={exportJSON}
        createCopy={createCopy}
      />
      <div className="app-body">
        <div className="left-panel">
          <div className="panel-tabs">
            <button className={`panel-tab${tab==="sections"?" active":""}`} onClick={()=>setTab("sections")}>Sections</button>
            <button className={`panel-tab${tab==="customize"?" active":""}`} onClick={()=>setTab("customize")}>Customize</button>
            <button className={`panel-tab${tab==="json"?" active":""}`} onClick={()=>setTab("json")}>JSON</button>
          </div>
          <div className="panel-content">
            {tab==="sections"&&<SectionsTab resume={resume} update={update} onAddSection={()=>setAddModal(true)}/>}            
            {tab==="customize"&&<CustomizeTab custom={custom} setCustom={setCustom}/>}            
            {tab==="json"&&<JsonTab jsonText={jsonText} setJsonText={setJsonText} onApply={applyJSON}/>}          
          </div>
        </div>
        <div className="preview-area">
          <div className="preview-scale-note">Live preview — Ctrl+Z to undo · Ctrl+Y to redo</div>
          <div className="resume-paper">
            <ResumePreview resume={resume} custom={custom}/>
          </div>
        </div>
      </div>
      {addModal && <AddSectionModal onAdd={addSection} onClose={()=>setAddModal(false)}/>}    
    </div>
  );
}

export default App;
