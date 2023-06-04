<script>
	let isGreen = false

	const toggle = () => {
		isGreen = !isGreen
	}

	$: btnClasses = `btn-primary ${isGreen ? 'green' : 'red'}`
</script>

<div>
	<button
		on:click={toggle}
		class={isGreen ? 'isGreen' : 'notGreen'}
	>
		{isGreen ? 'isGreen' : 'notGreen'}
	</button>
	<button
		class={btnClasses}
		on:click={toggle}
	>
		{btnClasses}
	</button>
</div>
