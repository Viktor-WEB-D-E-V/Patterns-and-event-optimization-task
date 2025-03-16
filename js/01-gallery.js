//Task 1 - Image gallery
// Create a gallery with the ability to click on its items and view full size images in a modal window.

// Do this task in the 01-gallery.html and 01-gallery.js files. Break it down into several subtasks:

// Creating and rendering markup from the galleryItems data array and provided gallery item template.
// Implementing delegation to ul.gallery and getting the url of a large image.
// Adding the script and styles of the modal window library basicLightbox. Use the jsdelivrCDN service and add links to minified (.min) library files to your project.
// Opening a modal window by clicking on a gallery item. To do this, check out the documentation and examples.
// Replacing the value of the src attribute of the <img> element in a modal window before opening. Use the ready-made modal window markup with the image from the examples of the basicLightbox library.
// Gallery item markup
// The link to the original image must be stored in the source data attribute on the <img> element and specified in the link's href. Do not add any HTML tags or CSS classes other than those in this template.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to another page by default. Disable this behavior by default.

// Closing from keyboard

// Add modal window closing upon pressing the Escape key. Make keyboard listening available only while the modal window is open. In the basicLightbox library, there is a method to close the modal window programmatically.

import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createMarkup(gallery, galleryItems) {
  const markup = galleryItems
    .map((galleryItem) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src=${galleryItem.preview}
                data-source="large-image.jpg"
                alt=${galleryItem.description}
                />
                </a>
        </li>`;
    })
    .join("");

  console.log(gallery);
  gallery.insertAdjacentHTML("beforebegin", markup);
}

console.log(createMarkup(gallery, galleryItems));
