import { useState } from 'react'

interface PanelData {
  id: string;
  number: number;
}

function Panel({ 
  id, 
  number, 
  removePanel, 
  movePanelUp, 
  movePanelDown 
}: { 
  id: string; 
  number: number; 
  removePanel: (id: string) => void;
  movePanelUp: (id: string) => void;
  movePanelDown: (id: string) => void;
}) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [advSettingsOpen, setAdvSettingsOpen] = useState(true); // Open by default as in photo

  // Advanced settings state
  const [transition, setTransition] = useState('Slide');
  const [duration, setDuration] = useState('5');
  const [animIn, setAnimIn] = useState('0.8');
  const [animOut, setAnimOut] = useState('0.8');
  const [fontFamily, setFontFamily] = useState('Montserrat');
  const [nameSize, setNameSize] = useState('32');
  const [titleSize, setTitleSize] = useState('20');
  const [nameColor, setNameColor] = useState('#ffffff');
  const [titleColor, setTitleColor] = useState('#ffa500'); // Orange
  const [bgStyle, setBgStyle] = useState('Blue-Purple Gradient');
  const [transparency, setTransparency] = useState('95');
  const [typewriter, setTypewriter] = useState(true);

  const handleClear = () => {
    setName('');
    setTitle('');
  };

  const handleShow = () => {
    setIsActive(true);
  };

  const handleHide = () => {
    setIsActive(false);
  };

  return (
    <div className="panel-card" style={{ border: isActive ? '1px solid var(--success-color)' : '1px solid var(--border-color)' }}>
      <div className="panel-header">
        <div className="panel-header-left">
          <i className="fa-solid fa-grip-vertical drag-handle"></i>
          <div className="panel-number">{number}</div>
          <div className="panel-title-label">Lower Third {number}</div>
          <div className="panel-indicator" style={{ backgroundColor: isActive ? 'var(--success-color)' : 'var(--text-secondary)' }}></div>
        </div>
        <div className="panel-header-right">
          <button className="icon-btn" onClick={() => movePanelUp(id)}><i className="fa-solid fa-arrow-up"></i></button>
          <button className="icon-btn" onClick={() => movePanelDown(id)}><i className="fa-solid fa-arrow-down"></i></button>
          <button className="icon-btn delete-btn" onClick={() => removePanel(id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      
      <div className="input-group">
        <label>Name</label>
        <input 
          type="text" 
          placeholder="Enter name..." 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="input-group">
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Enter title..." 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      
      <div className="action-row">
        <button className="btn-show" onClick={handleShow} style={{ opacity: isActive ? 1 : 0.7 }}>SHOW</button>
        <button className="btn-hide" onClick={handleHide} style={{ opacity: !isActive ? 1 : 0.7 }}>HIDE</button>
        <button className="btn-clear" onClick={handleClear}>CLEAR</button>
      </div>
      
      <div className="advanced-settings-toggle" onClick={() => setAdvSettingsOpen(!advSettingsOpen)}>
        <i className="fa-solid fa-gear"></i> Advanced Settings
      </div>

      {advSettingsOpen && (
        <div className="advanced-settings-content">
          <div className="form-row">
            <div className="input-group">
              <label>Transition</label>
              <select value={transition} onChange={e => setTransition(e.target.value)}>
                <option value="Slide">Slide</option>
                <option value="Fade">Fade</option>
                <option value="Zoom">Zoom</option>
              </select>
            </div>
            <div className="input-group">
              <label>Duration (s)</label>
              <input type="number" step="0.1" value={duration} onChange={e => setDuration(e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Anim In (s)</label>
              <input type="number" step="0.1" value={animIn} onChange={e => setAnimIn(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Anim Out (s)</label>
              <input type="number" step="0.1" value={animOut} onChange={e => setAnimOut(e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Font Family</label>
              <select value={fontFamily} onChange={e => setFontFamily(e.target.value)}>
                <option value="Montserrat">Montserrat</option>
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Name Size (px)</label>
              <input type="number" value={nameSize} onChange={e => setNameSize(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Title Size (px)</label>
              <input type="number" value={titleSize} onChange={e => setTitleSize(e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Name Text Color</label>
              <input type="color" className="color-picker" value={nameColor} onChange={e => setNameColor(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Title Text Color</label>
              <input type="color" className="color-picker" value={titleColor} onChange={e => setTitleColor(e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Background Style</label>
              <select value={bgStyle} onChange={e => setBgStyle(e.target.value)}>
                <option value="Blue-Purple Gradient">Blue-Purple Gradient</option>
                <option value="Solid Black">Solid Black</option>
                <option value="Transparent">Transparent</option>
              </select>
            </div>
          </div>

          <div className="form-row" style={{ alignItems: 'center' }}>
            <div className="input-group" style={{ marginBottom: 0 }}>
              <label>Transparency: {transparency}%</label>
              <input 
                type="range" 
                className="range-slider" 
                min="0" max="100" 
                value={transparency} 
                onChange={e => setTransparency(e.target.value)} 
              />
            </div>
          </div>
          
          <div className="form-row" style={{ marginTop: '8px' }}>
            <label className="checkbox-group">
              <input type="checkbox" checked={typewriter} onChange={e => setTypewriter(e.target.checked)} />
              Typewriter Effect
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  const [panels, setPanels] = useState<PanelData[]>([
    { id: '1', number: 1 },
    { id: '2', number: 2 },
    { id: '3', number: 3 },
    { id: '4', number: 4 },
  ])
  const [nextNumber, setNextNumber] = useState(5)
  const [globalExpanded, setGlobalExpanded] = useState(true)

  // Global settings state
  const [gInterval, setGInterval] = useState('2')
  const [gTransition, setGTransition] = useState('Slide')
  const [gDuration, setGDuration] = useState('5')
  const [gAnimIn, setGAnimIn] = useState('0.8')
  const [gAnimOut, setGAnimOut] = useState('0.8')
  const [gFont, setGFont] = useState('Montserrat')
  const [gNameSize, setGNameSize] = useState('32')
  const [gTitleSize, setGTitleSize] = useState('20')
  const [gBgStyle, setGBgStyle] = useState('Blue-Purple Gradient')
  const [gTransp, setGTransp] = useState('95')
  const [gTypewriter, setGTypewriter] = useState(true)

  const addPanel = () => {
    setPanels([...panels, { id: Date.now().toString(), number: nextNumber }])
    setNextNumber(n => n + 1)
  }

  const removePanel = (id: string) => {
    setPanels(panels.filter(p => p.id !== id))
  }

  const movePanelUp = (id: string) => {
    const index = panels.findIndex(p => p.id === id);
    if (index > 0) {
      const newPanels = [...panels];
      const temp = newPanels[index - 1];
      newPanels[index - 1] = newPanels[index];
      newPanels[index] = temp;
      setPanels(newPanels);
    }
  }

  const movePanelDown = (id: string) => {
    const index = panels.findIndex(p => p.id === id);
    if (index < panels.length - 1) {
      const newPanels = [...panels];
      const temp = newPanels[index + 1];
      newPanels[index + 1] = newPanels[index];
      newPanels[index] = temp;
      setPanels(newPanels);
    }
  }

  return (
    <div className="container">
      <header>
        <h1>OBS Lower Thirds Control</h1>
      </header>

      <div className={`global-settings ${globalExpanded ? 'expanded' : ''}`} onClick={() => setGlobalExpanded(!globalExpanded)}>
        <span>Global Settings (Apply to All)</span>
        <i className={`fa-solid fa-caret-${globalExpanded ? 'up' : 'down'}`} style={{color: '#fff'}}></i>
      </div>

      {globalExpanded && (
        <div className="global-settings-content">
          <div className="form-row">
            <div className="input-group">
              <label>Auto Sequence Interval (sec)</label>
              <input type="number" value={gInterval} onChange={e => setGInterval(e.target.value)} />
            </div>
          </div>
          
          <div className="form-row">
            <div className="input-group">
              <label>Transition</label>
              <select value={gTransition} onChange={e => setGTransition(e.target.value)}>
                <option value="Slide">Slide</option>
                <option value="Fade">Fade</option>
                <option value="Zoom">Zoom</option>
              </select>
            </div>
            <div className="input-group">
              <label>Display Duration (sec)</label>
              <input type="number" step="0.1" value={gDuration} onChange={e => setGDuration(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Animation In (sec)</label>
              <input type="number" step="0.1" value={gAnimIn} onChange={e => setGAnimIn(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Animation Out (sec)</label>
              <input type="number" step="0.1" value={gAnimOut} onChange={e => setGAnimOut(e.target.value)} />
            </div>
          </div>

          <div className="form-row flex-2">
            <div className="input-group">
              <label>Font Family</label>
              <select value={gFont} onChange={e => setGFont(e.target.value)}>
                <option value="Montserrat">Montserrat</option>
                <option value="Inter">Inter</option>
              </select>
            </div>
            <div className="input-group">
              <label>Name Font Size (px)</label>
              <input type="number" value={gNameSize} onChange={e => setGNameSize(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Title Font Size (px)</label>
              <input type="number" value={gTitleSize} onChange={e => setGTitleSize(e.target.value)} />
            </div>
          </div>

          <div className="form-row flex-2" style={{ alignItems: 'flex-end' }}>
            <div className="input-group">
              <label>Background Style</label>
              <select value={gBgStyle} onChange={e => setGBgStyle(e.target.value)}>
                <option value="Blue-Purple Gradient">Blue-Purple Gradient</option>
                <option value="Solid Black">Solid Black</option>
              </select>
            </div>
            <div className="input-group">
              <label>Transparency (%)</label>
              <input type="number" value={gTransp} onChange={e => setGTransp(e.target.value)} />
            </div>
            <div className="input-group" style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '8px' }}>
              <label className="checkbox-group">
                <input type="checkbox" checked={gTypewriter} onChange={e => setGTypewriter(e.target.checked)} />
                Typewriter Effect
              </label>
            </div>
          </div>

          <button className="btn-apply-all">APPLY TO ALL LOWER THIRDS</button>
        </div>
      )}

      <div className="panels-grid" id="panels-container">
        {panels.map((p) => (
          <Panel 
            key={p.id} 
            id={p.id} 
            number={p.number} 
            removePanel={removePanel} 
            movePanelUp={movePanelUp}
            movePanelDown={movePanelDown}
          />
        ))}
      </div>

      <div className="action-buttons">
        <button className="btn-add" id="add-panel-btn" onClick={addPanel}>
          + ADD LOWER THIRD PANEL
        </button>
        <button className="btn-start" id="start-sequence-btn" onClick={() => alert('Starting auto sequence...')}>
          <i className="fa-solid fa-play" style={{marginRight: '6px', fontSize: '11px'}}></i> START AUTO SEQUENCE
        </button>
      </div>
    </div>
  )
}

export default App
