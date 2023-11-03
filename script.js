let color = 'green';
let squares = 16;

const btnSquare = document.querySelector('#btnSquare');
const gridContainer = document.querySelector('#gridContainer');

btnSquare.addEventListener('click', () => {
	squares = Number(prompt('Select number of elements per side of the grid: ', "16"));
    deleteGrid(gridContainer);
});

for (let i = 0; i < squares; i++) {      //grid creation loop
    const row = document.createElement('div');
    row.classList.add('row');
    row.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = color;
    });

    for (let j = 0; j < squares; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridElement');
        row.appendChild(gridDiv);
    }

    gridContainer.appendChild(row);
}

function deleteGrid(gridContainer) {
	while (gridContainer.firstChild) {
		gridContainer.removeChild(gridContainer.firstChild);
	}
}