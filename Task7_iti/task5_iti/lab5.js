const data = ['1', '1', '3', '4', '5', '6', '7'];

const container = document.getElementById('dataContainer');

data.forEach((item, index) => {
    const p = document.createElement('p');
    p.textContent = `Value: ${item}`;
    p.className = index % 2 === 0 ? 'even' : 'odd';
    container.appendChild(p);
});
