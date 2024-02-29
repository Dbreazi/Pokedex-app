
let pokemonRepo = (function () {
    let PokemonList = [
        {name: 'Bulbasaur', height: 7, type: ['grass', 'poison']},
        {name: 'Froslass', height: 3, type: ['ice', 'ghost']},
        {name: 'Horsea', height: 1, type: ['water', 'racing']}
    ];


    function addListItem(pokemon){
    let ulElement = document.querySelector('.pokemon-list');
        let listItem = document.createElement ('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('buttonStyle')
        listItem.appendChild(button);
        ulElement.appendChild(listItem);

        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
    getAll: function() {
        return PokemonList;
    },

    add: function (item) {
        PokemonList.push(item);
    },

    addListItem: addListItem
    }
})();


pokemonRepo.getAll().forEach(function(pokemon) {
        pokemonRepo.addListItem(pokemon);
});

