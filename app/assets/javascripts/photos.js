/* HOISTING 
  An important difference between function declarations and class declarations is that function
  declarations are hoisted and class declarations are not. You first need to declare your class and then access it, 
  otherwise you will get a reference error. 
*/

////////////////////////////    ATTACH LISTENERS ON PAGE LOAD   /////////////////////////////

$(document).on('turbolinks:load',
function(){
  attachListeners();
})

function attachListeners(){
  $(".js-get-photos").click((e) => getProfilePhotos(e));
  $(".js-previous").click((e) => getPreviousPhoto(e));
  $(".js-next").click((e) => getNextPhoto(e));
  $(".photoComments").click((e) => getPhotoComments(e));
}

///////////////////////////////  Javascript Model Objects  ///////////////////////////

class Comment{
  constructor(commentData){
    this.id = commentData.id;
    this.content = commentData.content;
    this.user_id = commentData.user.id;
    this.username = commentData.comment_username;
    this.user_email = commentData.user.email;
  }
  
  formatComment(){
    return `<p><strong><a href="/profiles/${this.user_id}">${this.username}</a></strong>: ${this.content}</p><br>`
  }
}

class Photo{
  constructor(photoData){
    this.id = photoData.id;
    this.user_id = photoData.user.id;
    this.user_email = photoData.user.email;
    this.title = photoData.title;
    this.description = photoData.description;
    this.image = photoData.image;
    this.formatted_date = photoData.formatted_date;
    this.comments = photoData.comments.map((commentData) => {
      const comment = new Comment(commentData);
      return comment;
    })
  }

  formatProfilePhoto(){
    return `<div class="box panel panel-default">
      <a href='/profiles/${this.user_id}/photos/${this.id}'>
        <img class="profile-photo" src=${this.image}></a>
      <h2><a href="/profiles/${this.user_id}/photos/{this.id}.html">${this.title}</a></h2>
      <p>${this.formatted_date}</p>
      </div>`
  }

  displayPhotoData(){
    $(".js-show-comments").empty();
    $(".photoTitle").text(this.title);
    $(".photoDescription").text(this.description);
    $(".photoDate").text(this.formatted_date);
    $(".photoImage").attr("src", this.image);
    $(".photoUserEmail").text(this.user_email);
    $(".photoUserEmail").attr("href", `/profiles/${this.user_id}`);
    $(".js-previous").attr("data-id", this.id);
    $(".js-next").attr("data-id", this.id);
    $(".photoComments").attr("data-id", this.id);
    $(".photoComments").text(`${this.comments.length} Comments`)
         /*  TODO
      - update comments link and count on show page
      - how can we update the edit/delete buttons on that show page?
      */ 
  }

  formatPhotoComments(){
     return `<h3> ${this.comments.length} Comments: </h3><br>
     ${this.comments.map((comment) => {
        return comment.formatComment();
     }).join('')}`
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
  if ($("#all-photos-div").is(':empty')){
    $("#featured-photos").contents().hide();
    $(".js-get-photos").text("Featured Photos");
      jsonPhotos.forEach(photoData => {
        let photo = new Photo(photoData);
        let photosUl = document.getElementById("all-photos-div");
        photosUl.innerHTML += photo.formatProfilePhoto();
      })} else {
      $("#featured-photos").contents().show();
      $(".js-get-photos").text("All Photos")
      $("#all-photos-div").html('');
    }
}

///////////////////  REQ 2 RENDER NEXT & PREVIOUS PHOTO SHOW PAGE VIA JS, AMS AND JSON BACKEND  ////////////////////

function getPreviousPhoto(e){
  e.preventDefault();
  let previousID = parseInt($(".js-previous").attr("data-id")) - 1;
  $.get(`/photos/${previousID}.json`, function(photoData){
    createPreviousPhoto(photoData);
  });
}

function createPreviousPhoto(data){
  let previousPhoto = new Photo(data);
  previousPhoto.displayPhotoData();
}

function getNextPhoto(e){
  e.preventDefault();
  let nextID = parseInt($(".js-next").attr("data-id")) + 1;
  $.get(`/photos/${nextID}.json`, function(response){
    createNextPhoto(response);
  });
}

function createNextPhoto(response){
  let nextPhoto = new Photo(response)
  nextPhoto.displayPhotoData();
}


/////////////////// REQ 3 DYNAMICALLY RENDERS A HAS_MANY RELATIONSHIP: PHOTO HAS MANY COMMENTS ////////////////////#endregion

function getPhotoComments(e){
  e.preventDefault();
  $.getJSON(`/photos/${e.target.dataset.id}.json`, function(photoData){
    const photo = new Photo(photoData);
    let formattedComments = photo.formatPhotoComments();
    $(".js-show-comments").append(formattedComments);
  })
}