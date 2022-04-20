import { useState, useEffect } from "react"
import "./App.css"
import searchLogo from "./search.svg"
import MovieCard from "./components/MovieCard"

const apiKey = '4d6cb4b6'
const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`

const App = () => {

	const [movies, setMovies] = useState([])
	const [searchPhrase, setSearchPhrase] = useState("")

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()

		setMovies(data.Search)
		console.log(data.Search)
	}

	useEffect(() => {
		searchMovies(searchPhrase)
	}, [])

	return(
		<div className="app">
			<h1>MovieLand</h1>
			<div className="search">
				<input
					placeholder="Search for Movies"
					value={searchPhrase}
					onChange={(event) => setSearchPhrase(event.target.value)}
					onKeyDown={(event) => {
						if(event.key === "Enter") {
							searchMovies(event.target.value)
						}
					}}
				/>
				<img
					src={searchLogo}
					alt="Search Logo Icon"
					onClick={() => searchMovies(searchPhrase)}
				/>
			</div>

			{movies?.length > 0
				? (
					<div className="container">
						{movies.map(movie => (
							<MovieCard
								movie={movie}
							/>
						))}
					</div>
				) : (
					<div className="empty">
						<h2>No Movies Were Found</h2>
					</div>
				)
			}

		</div>
	)
}

export default App