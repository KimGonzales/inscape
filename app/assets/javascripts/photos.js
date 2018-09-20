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
    return `<div class="box panel panel-default">
      <a href='/profiles/${this.user_id}/photos/${this.id}'><img class="profile-photo" src=${this.image}></a>
      <h2><a href="/profiles/${this.user_id}/photos/{this.id}.html">${this.title}</a></h2>
      </div>`
  }
}


///////// GET PROFILE PHOTOS INDEX FUNCTIONS //////////////////////////


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
    photosUl.innerHTML += photo.formatPhotoAsLi();
  })
}





// load ajax on for photo show from photo index (root)

// When I click a photo, the app makes a get request for that resource via jquery and AMS JSON backend
// you might allow a user to sift through posts by clicking a 'Next button on the posts show page, with the next
// post being fetched and rendered via Jquery/Ajax 

//getPreviousPhoto(e));
// getNextPhoto(e))

function getPreviousPhoto(e){
  e.preventDefault();
  let previousID = parseInt($(".js-previous").attr("data-id")) - 1;
  $.getJSON(`/photos/${previousID}.json`, function(data){
    showPreviousPhoto(data);
  })
}


function showPreviousPhoto(data){
  $(".photoTitle").text(data["title"]);
  $(".photoDescription").text(data["description"]);
  $(".photoImage").attr("src", data["image"]);
  console.log(data["created_at"])
}

