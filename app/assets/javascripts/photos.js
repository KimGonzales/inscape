////////////////////////////    ATTACH LISTENERS ON PAGE LOAD   /////////////////////////////

$(document).on('turbolinks:load',
function(){
  attachListeners();
})

function attachListeners(){
  $(".js-get-photos").click((e) => getProfilePhotos(e));
  $(".js-previous").click((e) => getPreviousPhoto(e));
  $(".js-next").click((e) => getNextPhoto(e));
}

///////////////////////////////  Javascript Model Objects  ///////////////////////////

/* HOISTING 
  An important difference between function declarations and class declarations is that function
  declarations are hoisted and class declarations are not. You first need to declare your class and then access it, 
  otherwise you will get a reference error. 
*/

class Photo{
  constructor(photoData){
    this.id = photoData.id;
    this.user_id = photoData.user.id;
    this.user_email = photoData.user.email;
    this.title = photoData.title;
    this.description = photoData.description;
    this.image = photoData.image;
    this.created_at = photoData.created_at;
  }
  formatProfilePhoto(){
    return `<div class="box panel panel-default">
      <a href='/profiles/${this.user_id}/photos/${this.id}'><img class="profile-photo" src=${this.image}></a>
      <h2><a href="/profiles/${this.user_id}/photos/{this.id}.html">${this.title}</a></h2>
      <p>${this.created_at}</p>
      </div>`
  }
}


///////// REQ 1 GET PROFILE PHOTOS INDEX FUNCTIONS //////////////////////////


function getProfilePhotos(e){
  e.preventDefault();
  let id = e.target.dataset["id"]
  fetch(`/profiles/${id}/photos`)
    .then(response => response.json())
    .then(data => appendPhotosAndHideFeatured(data));
}

function appendPhotosAndHideFeatured(jsonPhotos){
  $("#featured-photos").contents().hide();
  jsonPhotos.forEach(photoData => {
    let photo = new Photo(photoData);
    let photosUl = document.getElementById("all-photos-div");
    photosUl.innerHTML += photo.formatProfilePhoto();
  })
}


///////////////////  REQ 2 RENDER NEXT & PREVIOUS PHOTO SHOW PAGE VIA JS,AMS AND JSON BACKEND  ////////////////////

function getPreviousPhoto(e){
  e.preventDefault();
  let previousID = parseInt($(".js-previous").attr("data-id")) - 1;
  $.get(`/photos/${previousID}.json`, function(photoData){
    showPreviousPhoto(photoData);
  });
}

function showPreviousPhoto(data){
  $(".photoTitle").text(data["title"]);
  $(".photoDescription").text(data["description"]);
  $(".photoDate").text(data["created_at"]);
  $(".photoImage").attr("src", data["image"]);
  $(".photoUserEmail").text(data["user"]["email"]);
  $(".photoUserEmail").attr("href", `/profiles/${data["user"]["id"]}`);
  $(".js-previous").attr("data-id", data["id"]);
  $(".js-next").attr("data-id", data["id"]);
      /*  TODO
      - update time format
      - update comments link and count on show page
      - how can we update the edit/delete buttons on that show page?
      */ 
}

function getNextPhoto(e){
  let nextID = parseInt($(".js-next").attr("data-id")) + 1;
  $.get(`/photos/${nextID}.json`, function(response){
    showNextPhoto(response);
  });
  e.preventDefault();
}

// function showNextPhoto(response){
//   $(".photoTitle").text(response["title"]);
//   $(".photoDescription").text(response["description"]);
//   $(".photoDate").text(response["created_at"]);
//   $(".photoImage").attr("src", response["image"]);
//   $(".photoUserEmail").text(response["user"]["email"]);
//   $(".photoUserEmail").attr("href", `/profiles/${response["user"]["id"]}`);
//   $(".js-next").attr("data-id", response["id"]);
//   $(".js-previous").attr("data-id", response["id"]);
// }

function showNextPhoto(response){
  let nextPhoto = new Photo(response)
  $(".photoTitle").text(nextPhoto.title);
  $(".photoDescription").text(nextPhoto.description);
  $(".photoDate").text(nextPhoto.created_at);
  $(".photoImage").attr("src", nextPhoto.image);
  $(".photoUserEmail").text(nextPhoto.user_email);
  $(".photoUserEmail").attr("href", `/profiles/${nextPhoto.user_id}`);
  $(".js-next").attr("data-id", nextPhoto.id);
  $(".js-previous").attr("data-id", nextPhoto.id);
}

