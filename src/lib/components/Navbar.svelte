<script>
	const menu = [
		{
			title: 'Home',
			url: '/',
			imageUrl: 'src/assets/images/twitter-logo.svg'
		},
		{
			title: 'Cart',
			url: 'login',
			imageUrl: 'src/assets/images/twitter-logo.svg'
		},
		{
			title: 'Notifications',
			url: 'notifications',
			imageUrl: 'src/assets/images/twitter-logo.svg'
		},
		{
			title: 'Mesages',
			url: 'messages',
			imageUrl: 'src/assets/images/twitter-logo.svg'
		},
		{
			title: 'Bookmarks',
			url: 'bookmarks',
			imageUrl: 'src/assets/images/twitter-logo.svg'
		}
	]
</script>

<nav>
	<nav>
		{#each menu as item}
			<a
				class="flex gap-2 p items-center"
				href={item.url}
			>
				<img
					src={item.imageUrl}
					alt="icon"
				/>
				<h2 class="p-3 text-lg">
					{item.title}
				</h2>
			</a>
		{/each}
	</nav>
	<button class="btn-blue w-full mt-3"> Tweet </button>
</nav>

<style>
	nav {
		@apply mt-20;
		padding: 0 7px;
	}
	nav ul li a:hover {
		background-color: rgba(231, 233, 234, 0.1);
		transition: all 0.3s;
	}
</style>
