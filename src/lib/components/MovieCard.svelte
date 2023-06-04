<script lang="ts">
  import type { IMovie } from "../../interfaces/IMovie"

	export let movie : IMovie;


	const addToCart = async () => {
		if (!movie) return
	}
</script>

<div class="product-card cursor-pointer">
	<a href={`title/${movie.id}`}>
		<img 
		style="object-fit: contain;height: 150px; align-self: center;width: 100%" 
		src={movie?.primaryImage?.url} 
		alt={movie?.primaryImage?.caption?.plainText} 
		/>
	</a>
	<div class="product-card__title">{movie.titleText.text}</div>
	<button class="product-card__cart-btn" on:click={addToCart}>
		Add to cart
	</button>
</div>

<style lang="scss">
	.product-card {
		cursor: pointer;
		@apply relative cursor-pointer;
		&__title {
			@apply p-2 text-lg text-center bg-sky-500;
		}
	}
	.product-card__price {
		@apply p-2 text-base pt-1 hidden;
	}
	.product-card__cart-btn {
		@apply w-full p-2;
	}
	img {
		height: 200px;
	}
</style>
