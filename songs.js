var firstDiv = document.getElementById("first-song");
console.log(firstDiv);

var songs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var re = [/\*|\@|\!|\(/g, "> "];
var change = ["", "- "];
for (var i = 0; i < songs.length; i++) {
  for (var j = 0; j < re.length; j++) {
    songs[i] = songs[i].replace(re[j], change[j]);
  }
  console.log(songs[i]);
}
