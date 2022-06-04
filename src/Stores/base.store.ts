import { writable } from 'svelte/store';

export const allPokemons = writable([]);
const pokemonDetails: any = {};

const fetcthPokemon = async (num = 150) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
	const response = await fetch(url);
	const data = await response.json();
	const loadedPokmon = data.results.map((pokemon: { name: string }, index: number) => {
		return {
			name: pokemon.name,
			//url: pokemon.url,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	allPokemons.set(loadedPokmon);
};

export const getPokemonById = async (id: number) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};

fetcthPokemon();
