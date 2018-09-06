
$(function(){
    $(".js-get-photos").on("click", function(){
      var id = $(this).data("id");
      $.getJSON(`/profiles/${id}/photos`, function(data){
        for (const key in data){
          let photoid = data[key]["id"];
          let photoTitle = data[key]["title"];
          let photoDescription = data[key]["description"];
          let photoImage = data[key]["description"];
          
          let photoDiv= $(".all-photos")
          photoDiv.html += (`<h1>${photoTitle}</h1><p>${photoDescription}</p>`);
          //i want to get every photo's details in my all-photos div
        }
      })
    })
  })
