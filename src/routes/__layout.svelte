<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
</script>

<h1 class="text-center  text-3xl font-bold upercase">Svelte kit PokoDic</h1>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>
