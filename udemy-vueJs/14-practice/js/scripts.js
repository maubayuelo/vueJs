document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data:{
      display: true,
      movies: [
        {
          title:'The Matrix',
          year:'1999',
          description:"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
          img:'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        },
        {
          title:'Casino Royale',
          year:'2006',
          description:"Armed with a license to kill, Secret Agent James Bond sets out on his first mission as 007, and must defeat a private banker to terrorists in a high stakes game of poker at Casino Royale, Montenegro, but things are not what they seem.",
          img:'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
        },
        {
          title:'Fight Club',
          year:'1999',
          description:"An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          img:'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,676,1000_AL_.jpg',
        },
        {
          title:'Mad Max: Fury Road',
          year:'2015',
          description:"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
          img:'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
        {
          title:'Blade Runner 2049',
          year:'2017',
          description:"A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
          img:'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        }
      ]
    }
  })
});
