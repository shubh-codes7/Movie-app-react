import '../App.css'

const GenreFilter = ({genres, setGenre}) => {

    function handleClick(e){
        console.log("Filtering by",e.target.textContent)
        setGenre(e.target.textContent)
    }

    return(
        <div id="genreContainer">
            <h2>Filter by Genre</h2>
            <div id="genreFilter">
                {genres.map((genre, idx) => <button onClick={(e)=>handleClick(e)} key={idx}>{genre}</button>)}
            </div>
        </div>
    )
}

export default GenreFilter