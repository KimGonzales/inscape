$(document).on('turbolinks:load',
function(){
  attachListeners()
})

function attachListeners(){
  $(".js-get-photos").on("click", function(){
    getPhotos();
  })
  // $(".js-get-photos").on("click", function(){
  //   var id = $(this).data("id");
  //   $.getJSON(`/profiles/${id}/photos`, function(data){
  //     for (const key in data){
  //       let photoid = data[key]["id"];
  //       let photoTitle = data[key]["title"];
  //       let photoDescription = data[key]["description"];
  //       let photoImage = data[key]["description"];
        
  //       console.log(photoid, photoTitle, photoDescription)
  //       let photoDiv = $(".all-photos")
  //       let title = document.createElement('h1');
  //       title.innerHTML = photoTitle;
  //       photoDiv.append(title);


  //       //i want to get every photo's details in my all-photos div
  //     }
  //   })
  // })
}

function getPhotos(){
  var id = this.event.target.dataset["id"];
  $.getJSON(`/profiles/${id}/photos`), function(data){
    debugger
    for (const key in data){
      let photoid = data[key]["id"];
      let photoTitle = data[key]["title"];
      let photoDescription = data[key]["description"];
      let photoImage = data[key]["description"];
      
      console.log(photoid, photoTitle, photoDescription)
      let photoDiv = $(".all-photos")
      let title = document.createElement('h1');
      title.innerHTML = photoTitle;
      photoDiv.append(title);
    }
  }
}