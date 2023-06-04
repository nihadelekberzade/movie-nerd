<script>
  import MovieList from "$lib/components/MovieList.svelte"
  import '../assets/styles/tailwind.css'
  import { authStore, setApiKey } from "../store/authStore"
  import { fetchUpcomingTitles, movieStore } from "../store/movieStore"
 
    const clickHandler = async () => {
       await setApiKey('k_3q');
       await fetchUpcomingTitles()
    }
</script>




<div>
    <h1>Welcome to SvelteKit {$authStore.apiKey}</h1>
    <button on:click={clickHandler}>
        fetch upcoming movies
    </button>
    <a href="/about"> About  </a>
    <MovieList movies={$movieStore.upcomingMovies?.results} />

</div>