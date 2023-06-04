<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte'
	import type { IMovie } from '../../interfaces/IMovie'

	export let movies: IMovie[] = [];
</script>

<div class="productList">
	<ul>
		{#each movies as movie}
			<li>
				<MovieCard movie={movie} />
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.productList ul {
		@apply grid gap-5 columns-1 md:columns-2 lg:columns-3 max-xl:columns-4;
	}

	@media only screen and (min-width: 500px) {
		.productList ul {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media only screen and (min-width: 1024px) {
		.productList ul {
			grid-template-columns: repeat(6, 1fr);
		}
	}
</style>
