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
  console.log(id)
}

// function getPhotos(){
//   var id = this.event.target.dataset["id"];
//   $.getJSON(`/profiles/${id}/photos`), function(data){
//     debugger
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
//     }
//   }
// }

class photo {
  constructor(title, description, image_url){
    this.title = title;
    this.description = description
    this.image_url = image_url
  }
}