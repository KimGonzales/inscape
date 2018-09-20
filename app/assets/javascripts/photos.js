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


// load ajax on for photo show from photo index (root)

// When I click a photo, the app makes a get request for that resource via jquery and AMS JSON backend
// you might allow a user to sift through posts by clicking a 'Next button on the posts show page, with the next
// post being fetched and rendered via Jquery/Ajax 

//getPreviousPhoto(e));
// getNextPhoto(e))

function getPreviousPhoto(e){
  e.preventDefault();
  let previousID = parseInt($(".js-previous").attr("data-id")) - 1;
  $.get(`/photos/${previousID}.json`, function(photoData){
    showPreviousPhoto(photoData);
  })
}

// Photo attrs include title, description, date, user email, comment count and link


function showPreviousPhoto(data){
  $(".photoTitle").text(data["title"]);
  $(".photoDescription").text(data["description"]);
  $(".photoDate").text(data["created_at"]);
  $(".photoImage").attr("src", data["image"]);
  $(".photoUserEmail").text(data["user"]["email"]);
  $(".photoUserEmail").attr("href", `/profiles/${data["user"]["id"]}`);

  $(".js-previous").attr("data-id", data["id"]);
}

