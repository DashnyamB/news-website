require("@babel/polyfill");
import { DOMElements as elements } from "./model/DOMSelector";
import PopularPost from "../js/model/popularPost";
import PopularPostView from "./view/popularPostView";

let postPost = new PopularPost();
let postView = new PopularPostView();

let posts = [];

// post nemeh event listener tur haasan bga

// (function () {
//   if (window.location.href.indexOf("admin.html")) {
//     const btnClick = () => {
//       elements.postbtn.addEventListener("click", () => {
//         postPost.newPost(elements.postTitle.value, elements.postPhoto.value);
//       });
//     };
//     btnClick();
//   }
// })();

postPost.getPost().then((e) => {
  posts = e;
  postView.renderPosts(posts.slice(0, 6));
});

setInterval(() => {
  postPost.getPost().then((e) => {
    posts = e;
  });
  postView.renderPosts(posts.slice(0, 6));
}, 3000);

console.log(posts);
