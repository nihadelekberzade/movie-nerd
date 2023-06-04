<script lang="ts">
  import type { IMovie } from "../../../interfaces/IMovie"
  import type { IRating } from "../../../interfaces/IRating"


	export let data: {
		movie: IMovie,
		rating: IRating
	}
	
	
</script>



<section>
		<h2 class="text-lg text-center mt-9 font-bold">
			 	{data.movie.titleText.text}
		</h2>
		<h3>
			IMDB : {data.rating?.averageRating}
		</h3>
		<h3>
			IMDB : {data.rating?.tconst}
		</h3>
		<h3>
			IMDB : {data.rating?.numVotes}
		</h3>

	<img 
	style="max-height: 700px"
			src={data.movie.primaryImage.url}
	 alt={data.movie.primaryImage.caption.plainText}
	 	 />
	
</section>
