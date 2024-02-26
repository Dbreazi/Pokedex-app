
let PokemonList = [
    {name: 'Bulbasaur', height: 7, type: ['grass', 'poison']},
    {name: 'Froslass', height: 3, type: ['ice', 'ghost']},
    {name: 'Horsea', height: 1, type: ['water', 'racing']}
];

/*PokemonList.forEach (function(pokemon) {
    document.write(pokemon.name + ' / Height: ' + pokemon.height + ' <br> ');
});
*/

function pokemonLoopFunction(pokemon) {
    document.write(pokemon.name + ' / Height: ' + pokemon.height + (pokemon.height > 5 ? " - Wow, that's a big one!" : "") + '<br>');

    /* method 1 for >5 hieght rule
    if (pokemon.height > 5 ) {
        document.write (" - Wow, that's a big one!");   
    }*/

}


PokemonList.forEach(pokemonLoopFunction);
