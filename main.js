const panelsContainer = document.getElementById('panels-container');
const addPanelBtn = document.getElementById('add-panel-btn');

let panelCount = 0;

function createPanel() {
    panelCount++;
    const panel = document.createElement('div');
    panel.className = 'panel-card';
    
    panel.innerHTML = `
        <div class="panel-header">
            <div class="panel-header-left">
                <i class="fa-solid fa-grip-vertical drag-handle"></i>
                <div class="panel-number">${panelCount}</div>
                <div class="panel-title-label">Lower Third ${panelCount}</div>
                <div class="panel-indicator"></div>
            </div>
            <div class="panel-header-right">
                <button class="icon-btn"><i class="fa-solid fa-arrow-up"></i></button>
                <button class="icon-btn"><i class="fa-solid fa-arrow-down"></i></button>
                <button class="icon-btn delete-btn"><i class="fa-solid fa-trash-can"></i></button>
                <label class="toggle-switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
            </div>
        </div>
        
        <div class="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter name...">
        </div>
        
        <div class="input-group">
            <label>Title</label>
            <input type="text" placeholder="Enter title...">
        </div>
        
        <div class="action-row">
            <button class="btn-show">SHOW</button>
            <button class="btn-hide">HIDE</button>
            <button class="btn-clear">CLEAR</button>
        </div>
        
        <div class="advanced-settings">
            <i class="fa-solid fa-gear"></i> Advanced Settings
        </div>

        <div class="advanced-settings-panel" style="display: none;">
            <div class="settings-grid-small">
                <div class="input-group">
                    <label>Transition</label>
                    <select><option>Slide</option><option>Fade</option></select>
                </div>
                <div class="input-group">
                    <label>Duration (s)</label>
                    <input type="number" value="5">
                </div>
                <div class="input-group">
                    <label>Anim In (s)</label>
                    <input type="number" value="0.8" step="0.1">
                </div>
                <div class="input-group">
                    <label>Anim Out (s)</label>
                    <input type="number" value="0.8" step="0.1">
                </div>
                <div class="input-group full-width">
                    <label>Font Family</label>
                    <select><option>Montserrat</option><option>Inter</option></select>
                </div>
                <div class="input-group">
                    <label>Name Size (px)</label>
                    <input type="number" value="32">
                </div>
                <div class="input-group">
                    <label>Title Size (px)</label>
                    <input type="number" value="20">
                </div>
                <div class="input-group">
                    <label>Name Text Color</label>
                    <input type="color" value="#ffffff">
                </div>
                <div class="input-group">
                    <label>Title Text Color</label>
                    <input type="color" value="#ffa500">
                </div>
                <div class="input-group full-width">
                    <label>Background Style</label>
                    <select><option>Blue-Purple Gradient</option><option>Solid Black</option></select>
                </div>
                <div class="input-group full-width">
                    <label>Transparency: <span class="transparency-val">95</span>%</label>
                    <input type="range" min="0" max="100" value="95" class="slider-range">
                </div>
                <div class="input-group full-width checkbox-group">
                    <label>
                        <input type="checkbox" checked> Typewriter Effect
                    </label>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for buttons
    const deleteBtn = panel.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        panel.remove();
    });

    const showBtn = panel.querySelector('.btn-show');
    const hideBtn = panel.querySelector('.btn-hide');
    const clearBtn = panel.querySelector('.btn-clear');
    const inputs = panel.querySelectorAll('input[type="text"]');
    const indicator = panel.querySelector('.panel-indicator');
    const advancedSettingsBtn = panel.querySelector('.advanced-settings');
    const advancedSettingsPanel = panel.querySelector('.advanced-settings-panel');
    const transparencyRange = panel.querySelector('.slider-range');
    const transparencyVal = panel.querySelector('.transparency-val');

    if (transparencyRange && transparencyVal) {
        transparencyRange.addEventListener('input', (e) => {
            transparencyVal.textContent = e.target.value;
        });
    }

    showBtn.addEventListener('click', () => {
        indicator.style.backgroundColor = '#00c853'; // Green for showing
        console.log(`Showing panel ${panelCount}:`, inputs[0].value, inputs[1].value);
    });

    hideBtn.addEventListener('click', () => {
        indicator.style.backgroundColor = '#ff1744'; // Red for hidden
        console.log(`Hiding panel ${panelCount}`);
    });

    clearBtn.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
        indicator.style.backgroundColor = '#9aa0a6'; // Back to neutral
    });
    
    advancedSettingsBtn.addEventListener('click', () => {
        if (advancedSettingsPanel.style.display === 'none') {
            advancedSettingsPanel.style.display = 'block';
        } else {
            advancedSettingsPanel.style.display = 'none';
        }
    });

    panelsContainer.appendChild(panel);
}

// Initialize with 4 panels
for (let i = 0; i < 4; i++) {
    createPanel();
}

addPanelBtn.addEventListener('click', createPanel);

const startSequenceBtn = document.getElementById('start-sequence-btn');
if (startSequenceBtn) {
    startSequenceBtn.addEventListener('click', () => {
        console.log('Starting auto sequence...');
        alert('Auto sequence started!');
    });
}

const globalSettingsBtn = document.getElementById('global-settings-toggle');
const globalSettingsPanel = document.getElementById('global-settings-panel');
if (globalSettingsBtn && globalSettingsPanel) {
    globalSettingsBtn.addEventListener('click', () => {
        if (globalSettingsPanel.style.display === 'none') {
            globalSettingsPanel.style.display = 'block';
        } else {
            globalSettingsPanel.style.display = 'none';
        }
    });
}
