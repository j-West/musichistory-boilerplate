var navBar = document.querySelector("#navBar")
var mainDiv = document.querySelector(".mainDiv")
var formDiv = document.querySelector("#formDiv")
var addMusicView = document.querySelector(".add-music-view")

var songs = [];
// songs.unshift("Broccoli-D.R.A.M.-Big Baby D.R.A.M.-Hip Hop");
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs.push("Black Beatles-Rae Sremmurd-StremmLife2-Hip Hop");

// Regular expression to take out characters that don't belong
var re = [/\*|\@|\!|\(/g, "> "];
//Regular expression to get the array formatted
var reFormat = / \- by | on the album /g;
// The second argument that will be passed to the replace method calls
var change = ["", "- "];

// Outer for loop to loop over each index of songs array
for (var i = 0; i < songs.length; i++) {
  // Inner loop to loop over each index of the regEx re array and change array.
  for (var j = 0; j < re.length; j++) {
    // Replaces unwanted characters in the current index of songs with wanted characters
    songs[i] = songs[i].replace(re[j], change[j]);
  }
  // console.log(songs[i]);
  // Replacing all instances of '>' with '-'
  songs[i] = songs[i].replace(reFormat, "-");
}

// Push a song and it's info to the end of the songs array and add one to the front with unshift
songs.push("Black Beatles-Rae Sremmurd-StremmLife2-Hip Hop");
songs.unshift("Broccoli-D.R.A.M.-Big Baby D.R.A.M.-Hip Hop");

// Use a loop to add genre because it's the same for multiple songs
for (var i = 1; i < songs.length-2; i++) {
  songs[i] = songs[i] + "-Rock";
}
// Add genre to a single song
songs[5] = songs[5] + "-Pop";

// console.log(songs);





// Object to hold the information about all of the songs in the song array,
// broken down into song, artist, album, and genre
var musicLibrary = {
                    songs : [],
                    artist : [],
                    album : [],
                    genre : []
                   };

// Loop to loop over the songs array
for (var i = 0; i < songs.length; i++) {
  // Splitting the current index of songs array by '-' and storing the resulting array in tempArray
  var tempArray = songs[i].split("-");
  // console.log(tempArray);
  // Pushing the indexes of tempArray to the musicLibrary object each time through the loop
  musicLibrary.songs.push(tempArray[0]);
  musicLibrary.artist.push(tempArray[1]);
  musicLibrary.album.push(tempArray[2]);
  musicLibrary.genre.push(tempArray[3]);
}

// Storing the songDiv element in a variable
var songDiv = document.querySelectorAll(".songDiv");
// Declaring multiple variables to hold the children os songDiv
var currentSong;
var songH2;
var songUl;
var artistLi;
var albumLi;
var genreLi;

// Loop over the musicLibrary object to place each key's value index into variables innerHTML
for (var i = 0; i < musicLibrary.songs.length; i++) {
  // Store current index of songDiv in current song
  currentSong = songDiv[i];
  // Select and store the h2 element in songDiv in songH2
  songH2 = currentSong.querySelector("h2");
  // Select and store the ul's children in songUl
  songUl = currentSong.querySelector("ul").children;
  // Assign artistLi, albumLi and genreLi the correct index of songUl
  artistLi = songUl[0];
  albumLi = songUl[1];
  genreLi = songUl[2];

// Changing the innerHTML of the html elements to the values in musicLibrary
  songH2.innerHTML = musicLibrary.songs[i];
  artistLi.innerHTML = musicLibrary.artist[i];
  albumLi.innerHTML = musicLibrary.album[i];
  genreLi.innerHTML = musicLibrary.genre[i];
}


navBar.addEventListener("click", (e) => {
  if (e.target.textContent === "View Music") {
    addMusicView.classList.toggle("hidden")
    formDiv.classList.toggle("hidden")
    mainDiv.classList.toggle("hidden")
  } else if (e.target.textContent === "Add Music") {
    formDiv.classList.toggle("hidden")
    mainDiv.classList.toggle("hidden")
    addMusicView.classList.toggle("hidden")

  }
})

addMusicView.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    musicLibrary.songs.push(document.querySelector("#add-music-song-input").value)
    musicLibrary.artist.push(document.querySelector("#add-music-artist-input").value)
    musicLibrary.album.push(document.querySelector("#add-music-album-input").value)
    musicLibrary.genre.push(document.querySelector("#add-music-genre-input").value)
    console.log(musicLibrary);
  }
})
