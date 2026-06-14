<script lang="ts">
	import { onDestroy } from 'svelte';

	export let message = '';
	export let type: 'success' | 'error' = 'success';
	let visible = true;

	onDestroy(() => {
		visible = false;
	});

	setTimeout(() => {
		visible = false;
	}, 2500);
</script>

{#if visible}
	<div class="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-700 animate-slide-up">
		{#if type === 'success'}
			<span class="text-green-400 text-2xl">✓</span>
		{:else}
			<span class="text-red-400 text-2xl">⚠</span>
		{/if}
		<span class="font-medium">{message}</span>
	</div>
{/if}

<style>
	@keyframes slideUp {
		from { transform: translateY(30px); opacity: 0; }
		to { transform: translateY(0); opacity: 1; }
	}
	.animate-slide-up {
		animation: slideUp 0.3s ease forwards;
	}
</style>