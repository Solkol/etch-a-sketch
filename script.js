let color = 'green';
let squares = 16;

const btnSquare = document.querySelector('#btnSquare');
const gridContainer = document.querySelector('#gridContainer');

btnSquare.addEventListener('click', () => {
	squares = getSquaresNumber();
    deleteGrid(gridContainer);
    createGrid(gridContainer);
});

createGrid(gridContainer);

function createGrid(grid) {
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

        grid.appendChild(row);
    }
}

function deleteGrid(grid) {
	while (grid.firstChild) {
		grid.removeChild(grid.firstChild);
	}
}

function getSquaresNumber() {
    let number;
    do {
        number = Number(prompt('Select number of elements per side of the grid (max: 100; min: 16):', "16"));
        if (number > 100 || number < 16) {
            alert('Invalid Number! Try again.');
        }
    } while (number > 100 || number < 16);

    return number;
}