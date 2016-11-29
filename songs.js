// var firstDiv = document.getElementById("song1");
// console.log(firstDiv);
// var songH2 = firstDiv.querySelector("h2");
// console.log(songH2);
// var songUl = document.querySelector("div#song1 ul.musicInfo").children;
// var artistLi = songUl[0];
// console.log(artistLi);
// var albumLi = songUl[1];
// console.log(albumLi);
// var genreLi = songUl[2];
// console.log(genreLi);

var songs = [];
// songs.unshift("Broccoli-D.R.A.M.-Big Baby D.R.A.M.-Hip Hop");
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs.push("Black Beatles-Rae Sremmurd-StremmLife2-Hip Hop");

var re = [/\*|\@|\!|\(/g, "> "];
var change = ["", "- "];
var reFormat = / \- by | on the album /g;

for (var i = 0; i < songs.length; i++) {
  for (var j = 0; j < re.length; j++) {
    songs[i] = songs[i].replace(re[j], change[j]);
  }
  // console.log(songs[i]);
  songs[i] = songs[i].replace(reFormat, "-");
}

songs.push("Black Beatles-Rae Sremmurd-StremmLife2-Hip Hop");
songs.unshift("Broccoli-D.R.A.M.-Big Baby D.R.A.M.-Hip Hop");

for (var i = 1; i < songs.length-2; i++) {
  songs[i] = songs[i] + "-Rock";
}
songs[5] = songs[5] + "-Pop";

// console.log(songs);






var musicLibrary = {
                    songs : [],
                    artist : [],
                    album : [],
                    genre : []
                   };

for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].toString();
  var tempArray = songs[i].split("-");

  musicLibrary.songs.push(tempArray[0]);
  musicLibrary.artist.push(tempArray[1]);
  musicLibrary.album.push(tempArray[2]);
  musicLibrary.genre.push(tempArray[3]);
}

var songDiv = document.getElementsByClassName("songDiv");
var currentSong;
var songH2;
var songUl
var artistLi
var albumLi
var genreLi












}



// Not needed right now, maybe for future verisons
//
// function addGenre(indexNum, genre) {
//   songs[indexNum] = songs[indexNum] + genre;
// }
//
// addGenre(1, "-Rock");
// addGenre(2, "-Rock");
// addGenre(3, "-Rock");
// addGenre(4, "-Rock");
// addGenre(5, "-Pop");
