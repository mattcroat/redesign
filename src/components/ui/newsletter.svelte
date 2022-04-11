<script lang="ts">
	import { MailIcon } from '@rgossiaux/svelte-heroicons/outline'
</script>

<form>
	<input type="email" placeholder="you@example.com" />
	<button type="submit">
		<MailIcon width="24" height="24" aria-hidden="true" />
		<span>Subscribe</span>
	</button>
</form>

<style>
	form {
		display: flex;
		max-width: 360px;
		height: 48px;
		margin: var(--spacing-16) 0;
		border-radius: var(--rounded-4);
		border: 1px solid hsl(0 0% 21%);
		box-shadow: var(--shadow-sm);
	}

	input {
		width: 100%;
		padding: var(--spacing-8) var(--spacing-16);
		background-color: var(--clr-input-bg);
		border-radius: var(--rounded-4) 0 0 var(--rounded-4);
		flex: 1;
	}

	input::placeholder {
		color: var(--clr-input-placeholder-txt);
	}

	button {
		padding: var(--spacing-8);
		color: var(--clr-input-txt);
		background-color: var(--clr-primary);
		font-weight: 700;
		border-radius: 0 var(--rounded-4) var(--rounded-4) 0;
	}

	button :global(svg) {
		display: none;
	}

	@media (min-width: 860px) {
		button {
			display: flex;
			align-items: center;
			gap: var(--spacing-4);
		}

		button :global(svg) {
			display: block;
		}
	}
</style>
