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
    
    // Add event listeners for delete button if needed
    const deleteBtn = panel.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        panel.remove();
        // Option to renumber panels or let them be
    });
    
    panelsContainer.appendChild(panel);
}

// Initialize with 4 panels
for (let i = 0; i < 4; i++) {
    createPanel();
}

addPanelBtn.addEventListener('click', createPanel);
