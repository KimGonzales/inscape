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
  //fetch the photo data
  // pass the photo data to appendPhotos(data)
}



function appendPhotos(jsonPhotos){
  console.log(jsonPhotos);
  jsonPhotos.forEach(photoData => {
    let photo = new Photo(photoData);
    let photosUl = document.getElementById("all-photos-div");
    photosUl.innerHTML += photo.formatPhotoAsLi();
  })
//   receives the response data from the getPhotos function
// iterates through json photodata to 
// 1. make a new photo (passing it to photo constructor), 
// 2. Gets the photosList on the profile index page and stores it in a variable (document.getElementbyId('photosList'))
// 3. passes the newly instantiated javascript photo objects to the formatPhotoasLi() and appends 
//    each formatted photo to the photosList on the user profile show page
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
  }
  //formatPhotosLi() - function that formats the photos. perhaps use a template
}