<script context="module">
    import { getPokemonById } from "../../stores/base.store";
    // @ts-ignore
    export async function load({params}) {
        let id = params.id;
        const pokeman = await getPokemonById(id);
        return { props: { pokeman }}
    }
</script>

<script>
	export /**
	 * @type {{ types: { type: { name: any; }; }[]; name: string | null | undefined; height: any; weight: any; sprites: { [x: string]: string | null | undefined; }; }}
	 */
	let pokeman;
    console.log({pokeman});
	const type = pokeman.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>
