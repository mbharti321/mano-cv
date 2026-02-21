import React from 'react';
import './Toolbar.css';

export default function Toolbar({ undo, redo, canUndo, canRedo, importJSON, exportJSON, createCopy }) {
  return (
    <div className="toolbar">
      <div className="logo">
        Resume<span>Forge</span>
      </div>
      <div className="sep" />
      <button className="tb-btn" onClick={undo} disabled={!canUndo} title="Undo (Ctrl+Z)">↩ Undo</button>
      <button className="tb-btn" onClick={redo} disabled={!canRedo} title="Redo (Ctrl+Y)">↪ Redo</button>
      <div className="sep" />
      <button className="tb-btn secondary" onClick={importJSON}>📂 Import</button>
      <button className="tb-btn secondary" onClick={exportJSON}>💾 Save JSON</button>
      <button className="tb-btn secondary" onClick={createCopy}>📋 Create Copy</button>
      <div className="tr">
        <button className="tb-btn primary" onClick={() => window.print()}>🖨 Export PDF</button>
      </div>
    </div>
  );
}
