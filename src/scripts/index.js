import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/footer-component.js';
import './component/main.js';

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
 