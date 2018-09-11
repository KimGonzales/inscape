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
//   receives the response data from the getPhotos function
// iterates through json photodata to 
// 1. make a new photo (passing it to photo constructor), 
// 2. Gets the photosList on the profile index page and stores it in a variable (document.getElementbyId('photosList'))
// 3. passes the newly instantiated javascript photo objects to the formatPhotoasLi() and appends 
//    each formatted photo to the photosList on the user profile show page
}

class photo {
  constructor(title, description, image_url){
    this.title = title;
    this.description = description
    this.image_url = image_url
  }

  //formatPhotosLi() - function that formats the photos. perhaps use a template
}