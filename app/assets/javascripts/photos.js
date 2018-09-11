$(document).on('turbolinks:load',
function(){
  attachListeners();
})

function attachListeners(){
  $(".js-get-photos").click((e) => getPhotos(e));
}

function getPhotos(e){
  e.preventDefault();
  let id = e.target.dataset["id"]
  fetch(`/profiles/${id}/photos`)
    .then(response => response.json())
    .then(data => appendPhotos(data));
}



function appendPhotos(jsonPhotos){
  console.log(jsonPhotos);
  jsonPhotos.forEach(photoData => {
    let photo = new Photo(photoData);
    let photosUl = document.getElementById("all-photos-div");
    photosUl.innerHTML += photo.formatPhotoAsLi();
  })
}

class Photo{
  constructor(photoData){
    this.id = photoData.id;
    this.title = photoData.title;
    this.description = photoData.description;
    this.image = photoData.image;
  }
  formatPhotoAsLi(){
    return `<div class="box panel panel-default">
    <img src=${this.image}>
    </div>`
    //restyle me
  }
}