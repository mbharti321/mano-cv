import React from 'react';
import { FONTS, DFLT_CUSTOM } from '../../data';
import './CustomizeTab.css';

export default function CustomizeTab({ custom, setCustom }) {
  const set = (k, v) => setCustom(p => ({ ...p, [k]: v }));
  return (
    <div>
      <div className="cust-section">
        <div className="cust-title">Typography</div>
        <div className="cust-row">
          <label>Font Family</label>
          <select className="cust-select" value={custom.fontFamily} onChange={e=>set("fontFamily",e.target.value)}>
            {FONTS.map(f=><option key={f} value={f}>{f}</option>)}
          </select>
        </div>
        <div className="cust-row">
          <label>Base Font Size</label>
          <input type="range" min={8} max={13} step={0.5} value={custom.fontSize} onChange={e=>set("fontSize",+e.target.value)}/>
          <span>{custom.fontSize}pt</span>
        </div>
        <div className="cust-row">
          <label>Name Size</label>
          <input type="range" min={18} max={38} step={1} value={custom.nameSize} onChange={e=>set("nameSize",+e.target.value)}/>
          <span>{custom.nameSize}pt</span>
        </div>
        <div className="cust-row">
          <label>Title Size</label>
          <input type="range" min={16} max={24} step={0.5} value={custom.titleSize} onChange={e=>set("titleSize",+e.target.value)}/>
          <span>{custom.titleSize}pt</span>
        </div>
        <div className="cust-row">
          <label>Heading Size</label>
          <input type="range" min={9} max={16} step={0.5} value={custom.headingSize} onChange={e=>set("headingSize",+e.target.value)}/>
          <span>{custom.headingSize}pt</span>
        </div>
        <div className="cust-row">
          <label>Line Height</label>
          <input type="range" min={1.1} max={2} step={0.05} value={custom.lineHeight} onChange={e=>set("lineHeight",+e.target.value)}/>
          <span>{custom.lineHeight.toFixed(2)}</span>
        </div>
      </div>
      <div className="cust-section">
        <div className="cust-title">Page Layout</div>
        <div className="cust-row">
          <label>Horizontal Margin</label>
          <input type="range" min={8} max={45} step={1} value={custom.marginX} onChange={e=>set("marginX",+e.target.value)}/>
          <span>{custom.marginX}mm</span>
        </div>
        <div className="cust-row">
          <label>Vertical Margin</label>
          <input type="range" min={8} max={40} step={1} value={custom.marginY} onChange={e=>set("marginY",+e.target.value)}/>
          <span>{custom.marginY}mm</span>
        </div>
      </div>
      <div className="cust-section">
        <div className="cust-title">Colors</div>
        <div className="cust-row"><label>Name Color</label><input type="color" className="color-dot" value={custom.nameColor} onChange={e=>set("nameColor",e.target.value)}/></div>
        <div className="cust-row"><label>Accent / Heading</label><input type="color" className="color-dot" value={custom.accentColor} onChange={e=>set("accentColor",e.target.value)}/></div>
        <div className="cust-row"><label>Section Line</label><input type="color" className="color-dot" value={custom.sectionLineColor} onChange={e=>set("sectionLineColor",e.target.value)}/></div>
        <div className="cust-row"><label>Link Color</label><input type="color" className="color-dot" value={custom.linkColor} onChange={e=>set("linkColor",e.target.value)}/></div>
        <div className="cust-row"><label>Date Color</label><input type="color" className="color-dot" value={custom.dateColor} onChange={e=>set("dateColor",e.target.value)}/></div>
        <div className="cust-row"><label>Body Text Color</label><input type="color" className="color-dot" value={custom.bulletColor} onChange={e=>set("bulletColor",e.target.value)}/></div>
      </div>
      <div className="cust-section">
        <div className="cust-title">Section Heading Style</div>
        <div className="cust-row">
          <label>Heading Weight</label>
          <select className="cust-select" value={custom.headingWeight} onChange={e=>set("headingWeight",e.target.value)}>
            <option value="400">Regular</option>
            <option value="500">Medium</option>
            <option value="600">Semibold</option>
            <option value="700">Bold</option>
            <option value="800">Extrabold</option>
          </select>
        </div>
      </div>
      <button className="add-btn" style={{marginTop:8}} onClick={()=>setCustom(DFLT_CUSTOM)}>↺ Reset to Defaults</button>
    </div>
  );
}
