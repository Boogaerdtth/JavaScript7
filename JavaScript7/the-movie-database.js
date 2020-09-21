const myFavMovie = {
    title: 'Wolf of Wall Street',
    duration: 180,
    stars: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie']
};

let printMovie = function () {

    let movie = myFavMovie.title + ' last for ' + myFavMovie.duration + ' minutes. Stars:' + myFavMovie.stars;
    console.log(movie)
}
printMovie();







