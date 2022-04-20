import React from "react";

const movieCard = ({movie}) => {
	return(
		<a
			className="movie"
			href={`https://www.imdb.com/title/${movie.imdbID}`}
			target="_blank"
			rel="noreferrer"
		>
			<div>
				<p>{movie.Year}</p>
			</div>

			<div>
				<img
					src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
					alt={movie.Title}
				/>
			</div>

			<div>
				<span>{movie.Type}</span>
				<h3>{movie.Title}</h3>
			</div>
		</a>
	)
}

export default movieCard