

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('#pokeData').innerHTML = '';
    const pokemon = document.querySelector('#searchField').value.toLowerCase();
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(URL)
    .then(data=>{return data.json()})
    .then(res=>{addPoke(res.name, res.types[0].type.name, res.sprites.front_default)});
    document.querySelector('#searchField').value = '';
});

const addPoke = (name, type, img) => {
    const markup = `
    <h2>${name}</h2>
    <img src="${img}">
    <ul>
        <li>Type: ${type}</li>
        <li>Weak to: ${calcWeakness(type)}</li>
    </ul>
    `;

    document.querySelector('#pokeData').insertAdjacentHTML('afterbegin', markup);
};

const calcWeakness = pokeType => {
    switch (pokeType) {
        case 'normal': 
            return 'Fighting';
            break;
        case 'fire':
            return 'Water, Ground, Rock';
            break;
        case 'water':
            return 'Electric, Grass';
            break;
        case 'electric':
            return 'Ground';
            break;
        case 'grass':
            return 'Fire, Ice, Poison, Flying, Bug';
            break;
        case 'ice':
            return 'Fire, Fighting, Rock';
            break;
        case 'fighting':
            return 'Flying, Psychic, Fairy';
            break;
        case 'poison':
            return 'Ground, Psychic';
            break;
        case 'ground':
            return 'Water, Grass, Ice';
            break;
        case 'flying':
            return 'Electric, Ice, Rock';
            break;
        case 'psychic':
            return 'Bug, Ghost, Dark';
            break;
        case 'bug':
            return 'Fire, Flying, Rock';
            break;
        case 'rock':
            return 'Water, Grass, Fighting, Ground';
            break;
        case 'ghost':
            return 'Ghost, Dark';
            break;
        case 'dragon':
            return 'Ice, Dragon, Fairy';
            break;
        case 'dark':
            return 'Fighting, Bug, Fairy';
            break;
        case 'steel':
            return 'Fire, Fighting, Ground';
            break;
        case 'fairy':
            return 'Poison, Steel';
            break;
        default:
            console.log('Type not found');
    }
};