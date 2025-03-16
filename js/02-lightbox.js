// Task 2 - SimpleLightbox library
// Create the same gallery as in the first task, but using the SimpleLightbox library, which will handle image clicks, modal opening and closing and image scrolling with the keyboard.

// It is necessary to slightly change the gallery card markup; use this template.

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>

// Do this task in the 02-lightbox.html and 02-lightbox.js files. Break it down into several subtasks:

// Creating and rendering markup from the galleryItems data array and provided gallery element template. Use the ready-made code from the first task.
// Adding the script and library styles using the cdnjs CDN service. You need to add links to two files: simple-lightbox.min.js and simple-lightbox.min.css.
// Library initialization after gallery items are created and added to ul.gallery. To do this, read the SimpleLightbox documentation - first of all, the Usage and Markup sections.
// Look in the documentation for the Options section and add image caption display from the alt attribute. Let the caption be at the bottom and appear 250 milliseconds after image opening.
"use strict";

import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
      <li class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
      </li>
    `
  )
  .join("");

gallery.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.8,
});
