<script>
	import { fade } from 'svelte/transition';
	export /**
	 * @type {{ id: any; image: string | null | undefined; name: string | null | undefined; }}
	 */
	let pokeman;
</script>

<a
	class="p-6 bg-blue-200 text-black text-center rounded-md shadow-sm hover:shadow-md flex flexco items-center mx"
	href={`/pokeman/${pokeman.id}`}
	transition:fade
>
	<img class="h-40 w-40" src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-xl">{pokeman.name}</h2>
</a>
