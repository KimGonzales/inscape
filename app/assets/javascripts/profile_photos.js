$(document).on('turbolinks:load',
function(){
  attachListeners();
})

function attachListeners(){
  $(".js-get-photos").click((e) => getPhotos(e));
  $(".js-previous").click((e) => getPreviousPhoto(e));
  $(".js-next").click((e) => getNextPhoto(e));
}

function getPhotos(e){
  e.preventDefault();
  let id = e.target.dataset["id"]
  fetch(`/profiles/${id}/photos`)
    .then(response => response.json())
    .then(data => appendPhotosAndHideFeatured(data));
}

function appendPhotosAndHideFeatured(jsonPhotos){
  console.log(jsonPhotos);
  $("#featured-photos").contents().hide();
  jsonPhotos.forEach(photoData => {
    let photo = new Photo(photoData);
    let photosUl = document.getElementById("all-photos-div");
    photosUl.innerHTML += photo.formatPhotoAsLi();
  })
}

class Photo{
  constructor(photoData){
    this.id = photoData.id;
    this.user_id = photoData.user.id;
    this.title = photoData.title;
    this.description = photoData.description;
    this.image = photoData.image;
    this.created_at = photoData.created_at;
  }
  formatPhotoAsLi(){
    return `<a href='/profiles/${this.user_id}/photos/${this.id}'><img class="profile-photo" src=${this.image}></a>`
    //restyle me
  }
}