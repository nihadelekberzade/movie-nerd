<script>
	import { cartStore } from '../../store/cart'
</script>

<header class="flex justify-center items-center ">
	<nav
		class="
		py-3 
		
		xl:px-10
		my-5
		xl:rounded-full 
		xl:bg-green-900
		"
	>
		<ul class="flex gap-3">
			<li aria-current="page">
				<a href="/">Home</a>
			</li>
			<li aria-current="page">
				<a
					href="/products"
					data-sveltekit-preload-data="hover">Products</a
				>
			</li>
			<li aria-current="location">
				<a href="/members">Members</a>
			</li>
			<li aria-current="location">
				<a href="/cart">Cart {$cartStore.productCount}</a>
			</li>
			<li aria-current="location">
				<a href="/login">Form</a>
			</li>
		</ul>
	</nav>
</header>

<style style="postcss">
	header nav ul li a {
		@apply py-2 px-8 w-full bg-blue-600 text-white rounded-full hover:bg-blue-900 cursor-pointer;
	}
</style>
