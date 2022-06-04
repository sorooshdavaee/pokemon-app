<script>
	import { allPokemons } from '../Stores/base.store';
	import PokemonCard from '../components/pokemonCard.svelte';

	let seachTerm = '';
	/**
	 * @type {any[]}
	 */
	let filteredPokemon = [];

	$: {
		if (seachTerm) {
			filteredPokemon = $allPokemons.filter((p) =>
				p.name.toLowerCase().includes(seachTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$allPokemons];
		}
	}
</script>

<svelte:head>
	<title>svelte kit PokoDic</title>
</svelte:head>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-blue-100 mb-5 hover:border-blue-400 focus:border-blue-900"
	type="text"
	placeholder="seach for a pokemon"
	bind:value={seachTerm}
/>
<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokemon}
		<PokemonCard pokeman={pokemon} />
	{/each}
</div>
