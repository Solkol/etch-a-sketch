const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridElement');
        row.appendChild(gridDiv);
    }

    gridContainer.appendChild(row);
}