const pokeName = document.querySelector('#pokename');

document.querySelector('#searchButton').addEventListener('click', () => {
    const pokemon = document.getElementById('searchField').value;
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(URL)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res.types[0].type.name)})
});

const addName = (name) => {
    const markup = `
    <h2>${name}</h2>
    `;
    pokeName.insertAdjacentElement('afterbegin', markup);
}
