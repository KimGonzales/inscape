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
    setPreviousPhoto(data);
    // $(".photoTitle").text(data["title"]);
    // $(".photoDescription").text(data["description"]);
    // $(".photoImage").attr("src", data["image"]);
  })
}


function setPreviousPhoto(data){
  $(".photoTitle").text(data["title"]);
  $(".photoDescription").text(data["description"]);
  $(".photoImage").attr("src", data["image"]);
}

