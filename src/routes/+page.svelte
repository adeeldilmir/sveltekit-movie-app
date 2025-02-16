<script lang="ts">
	import { flip } from 'svelte/animate';
	const { data } = $props();
</script>

<main class="p-8">
	<h1 class="text-3xl font-bold mb-6 text-center">Now Playing Movies</h1>
	<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each data.movies as movie (movie.id)}
			<li
				class="group [perspective:1000px] w-full h-[500px] rounded-lg shadow-lg overflow-hidden"
				animate:flip
			>
				<div
					class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
				>
					<!-- Front Side (Poster) -->
					<div
						class="absolute inset-0 [backface-visibility:hidden] bg-white rounded-lg shadow-lg flex items-center justify-center"
					>
						<img
							class="rounded-lg w-full h-full object-cover"
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
						/>
					</div>
					<div
						class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-start gap-2"
					>
						<h2 class="text-2xl font-extrabold">{movie.title}</h2>
						<img
							class="rounded-lg w-full h-[250px] object-cover"
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt={movie.title}
						/>
						<p class="mt-2 text-yellow-500 font-bold">⭐ {movie.vote_average}</p>
						<p class="text-lg text-gray-700 line-clamp-3">{movie.overview}</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</main>

<style lang="postcss">
	@reference "tailwindcss/theme";
	:global(html) {
		background-color: theme(--color-gray-100);
	}
</style>
