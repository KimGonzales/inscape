$(attachListener);


function attachListener(){
  $(".js-get-photos").click((e) => getPhotos(e))
}

function getPhotos(e){
  debugger
  let id = e.data("id");
  console.log(id)
  debugger
}

