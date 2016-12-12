var navBar = document.querySelector("#navBar")
var mainDiv = document.querySelector(".mainDiv")
var formDiv = document.querySelector("#formDiv")
var addMusicView = document.querySelector(".add-music-view")


function addUpdatedMusic(library) {

  // Loop over the musicLibrary object to place each value into the songDiv
  for (let i = 0; i < library.music.length; i++) {


    let songDiv = document.createElement("div")
    songDiv.classList.add("songDiv")

      songDiv.innerHTML = `

                                <h2>${library.music[i].Song}</h2>
                                <ul class="musicInfo">
                                  <li>${library.music[i].Artist}</li>
                                  <li>${library.music[i].Album}</li>
                                  <li class="no-borderR">${library.music[i].Genre}</li>
                                </ul>
                                <button id="delButton" class="floatR">Delete</button>

                           `
mainDiv.appendChild(songDiv)

if (i === library.music.length - 1) {
  var moreDiv = document.createElement("div")
  moreDiv.classList.add("more-div")
  moreDiv.innerHTML = `<button id="more-btn">More</button>`
  mainDiv.appendChild(moreDiv)
  buttonListeners()
}

function buttonListeners() {
document.querySelector(".mainDiv").addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    console.log(e);
    var parent = e.target.parentNode;
    mainDiv.removeChild(parent)

  } else if (e.target.textContent === "More"){

  var musicRequest = new XMLHttpRequest();
  musicRequest.addEventListener("load", (e) => {
    data2 = JSON.parse(e.target.responseText)
    console.log(data2);
    addUpdatedMusic(data2)
    mainDiv.removeChild(document.querySelector(".more-div"))

  })
  musicRequest.open("GET", "musicLibrary2.json")
  musicRequest.send()



}
})
}



  }
}


function showViewMusicView() {
  addMusicView.classList.toggle("hidden")
  formDiv.classList.toggle("hidden")
  mainDiv.classList.toggle("hidden")
}

function clearInputs() {
  var inputs = addMusicView.querySelectorAll("input")
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = ""
  }
}

navBar.addEventListener("click", (e) => {
  if (e.target.textContent === "View Music") {
    showViewMusicView()
  } else if (e.target.textContent === "Add Music") {
    formDiv.classList.toggle("hidden")
    mainDiv.classList.toggle("hidden")
    addMusicView.classList.toggle("hidden")
    addMusicView.querySelector("#add-music-song-input").focus()

  }
})





// addMusicView.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     var num = library.music.length;
//     console.log(num);
//     library.music[num].Song = addMusicView.querySelector("#add-music-song-input").value
//     library.music[num].Artist = addMusicView.querySelector("#add-music-artist-input").value
//     library.music[num].Album = addMusicView.querySelector("#add-music-album-input").value
//     library.music[num].Genre = addMusicView.querySelector("#add-music-genre-input").value
//     addUpdatedMusic()
//     showViewMusicView()
//     clearInputs()
//   }
// })

var musicRequest = new XMLHttpRequest();
musicRequest.addEventListener("load", (e) => {
  var data1 = JSON.parse(e.target.responseText)
  // console.log(library);
  addUpdatedMusic(data1)
})
musicRequest.open("GET", "musicLibrary.json")
musicRequest.send()
