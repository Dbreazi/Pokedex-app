
let pokemonRepo = (function () {
    let PokemonList = [
        {name: 'Bulbasaur', height: 7, type: ['grass', 'poison']},
        {name: 'Froslass', height: 3, type: ['ice', 'ghost']},
        {name: 'Horsea', height: 1, type: ['water', 'racing']}
];

return {
    getAll: function() {
        return PokemonList;
    },

    add: function (item) {
        PokemonList.push(item);
    }
    };
})();


let pokemon = pokemonRepo.getAll();
    pokemon.forEach(function(item) {
        document.write(item.name + ' / Height: ' + item.height + (item.height > 5 ? " - Wow, that's a big one!" : "") + '<br>');
});


/* previous foreach loop

function pokemonLoopFunction(pokemon) {
    document.write(pokemon.name + ' / Height: ' + pokemon.height + (pokemon.height > 5 ? " - Wow, that's a big one!" : "") + '<br>');



}

PokemonList.forEach(pokemonLoopFunction);
*/
