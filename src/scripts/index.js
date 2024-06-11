import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/responsivehp.css';
import '../styles/map.css';
import "./component/footer-component.js";



// document.addEventListener("DOMContentLoaded", async () => {
//   const jsonData = await import('../DATA.json');
//   const datas = jsonData.default.restaurants;
//   let dataCard = '';
//   datas.forEach(function(data) {
//       dataCard +=`
//       <div class="card">
//           <img class="card_thumbs" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
//           <div class="city">${data.city}</div>
//           <div class="card_contents">
//               <p class="card_ratings">
//                   Rating : 
//                   <a href="#" class="card_ratings_number">${data.rating}</a>
//               </p>
//               <h3 class="card_title"><a href="#">${data.name}</a></h3>
//               <div class="card_desc">${data.description.slice(0, 200)}...</div>
//           </div>
//       </div>
//       `;
//   });
//   document.querySelector('#testing').innerHTML = dataCard;
  


// });
 

let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


