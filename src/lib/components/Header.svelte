<header>
	<div class="header-content">
		<div class="logo">
			<img src="/pb_logo.svg" alt="Pebblebed logo" />
		</div>
		<span class="site-title">pebblebed</span>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		background-color: var(--off-white);
		padding: 24px 24px 16px;
		z-index: 100;
	}

	.header-content {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.logo {
		width: 18px;
		height: 18px;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}

	.site-title {
		font-family: 'Hanken Grotesk', sans-serif;
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.5px;
		color: var(--dark-grey);
	}

</style>
