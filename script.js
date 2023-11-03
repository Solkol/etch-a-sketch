let color = 'green';

const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 16; i++) {      //grid creation loop
    const row = document.createElement('div');
    row.classList.add('row');
    row.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = color;
    });

    for (let j = 0; j < 16; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridElement');
        row.appendChild(gridDiv);
    }

    gridContainer.appendChild(row);
}