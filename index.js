let buttonBackground = document.querySelector("button.share-btn");
let buttonImage = document.querySelector(`img[src="images/icon-share.svg"]`);
let boxMedia = document.querySelector(".share div");
let click = true;



buttonBackground.addEventListener( "click", function() {

  if (window.matchMedia("(min-width: 855px)").matches) {

    if(click) {
      buttonBackground.classList.add("share-btn-click");
      buttonImage.classList.add("image-click");
      boxMedia.classList.add("share-box-click");
      document.querySelector(".author-data").classList.add("author-data-click");
      document.querySelector(".share").classList.add("share-click");
      document.querySelector(".description-item").lastElementChild.classList.remove("author");
      click = !click;
    } else {
      buttonBackground.classList.remove("share-btn-click");
      buttonImage.classList.remove("image-click");
      boxMedia.classList.remove("share-box-click");
      document.querySelector(".author-data").classList.remove("author-data-click");
      document.querySelector(".share").classList.remove("share-click");
            document.querySelector(".description-item").lastElementChild.classList.add("author");
      click = !click;
    }




  } else {

    if(click) {
      document.querySelector(".description-item").lastElementChild.classList.remove("author");
      document.querySelector(".author-data").classList.add("author-data-click");
      document.querySelector(".share").classList.add("share-click");
      buttonBackground.classList.add("share-btn-click");
      buttonImage.classList.add("image-click");
      boxMedia.classList.add("share-box-click");
      click = !click;
    } else {
      document.querySelector(".description-item").lastElementChild.classList.add("author");
      document.querySelector(".author-data").classList.remove("author-data-click");
      document.querySelector(".share").classList.remove("share-click");
      buttonBackground.classList.remove("share-btn-click");
      buttonImage.classList.remove("image-click");
      boxMedia.classList.remove("share-box-click");
      click = !click;
    }
  }

})




// buttonBackground.addEventListener( "click", function() {
//
//   if (window.matchMedia("(min-width: 855px)").matches) {
//
//     if(click) {
//       buttonBackground.classList.add("share-btn-click");
//       buttonImage.classList.add("image-click");
//       boxMedia.classList.add("share-box-click");
//     }
//
//
//     document.querySelector(".author-data").classList.toggle("author-data-click");
//
//   } else {
//     document.querySelector(".description-item").lastElementChild.classList.toggle("author");
//     document.querySelector(".author-data").classList.toggle("author-data-click");
//     document.querySelector(".share").classList.toggle("share-click");
//     buttonBackground.classList.toggle("share-btn-click");
//     buttonImage.classList.toggle("image-click");
//     boxMedia.classList.toggle("share-box-click");
//   }
//
// })
