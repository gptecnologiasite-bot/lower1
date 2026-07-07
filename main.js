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
        alert(`Configurações avançadas do Painel ${panelCount} abertas!`);
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

const globalSettingsBtn = document.querySelector('.global-settings');
if (globalSettingsBtn) {
    globalSettingsBtn.addEventListener('click', () => {
        alert('Configurações Globais abertas!');
    });
}
