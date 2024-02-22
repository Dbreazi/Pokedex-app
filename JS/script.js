
let PokemonList= [
    {name: 'Bulbasaur', height: 7, type: ['grass', 'poison']},
    {name: 'Froslass', height: 3, type: ['ice', 'ghost']},
    {name: 'Horsea', height: 1, type: ['water', 'racing']}
];

for (let i=0; i<PokemonList.length; i++) {
    document.write(`${PokemonList[i].name} (height: ${PokemonList[i].height})`);

    if (PokemonList[i].height >5 ){
    document.write (" - Wow, that's a big one!");
    }

    document.write('<br>');
}
