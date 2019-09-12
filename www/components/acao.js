//camera
$(document).on("click", "#camera", function(){
navigator.camera.getPicture(onSuccess, onFail, {
  quality:100,
  destinationType: Camera.DestinationType.FILE_URI,
  correctOrientation: true
});

function onSuccess(IMAGE_URI) {
  var image = document.getElementByld("image");
  image.src = imageURI;
}

function onFail(message) {
  navigator.notification.alert("Falhou pois: " + message);
}
});
