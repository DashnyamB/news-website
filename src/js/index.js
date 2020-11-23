require("@babel/polyfill");
import { DOMElements as elements } from "./model/DOMSelector";
import PopularPost from "../js/model/popularPost";
import PopularPostView from "./view/popularPostView";

let postPost = new PopularPost();
let postView = new PopularPostView();

let posts = [];

// post nemeh event listener tur haasan bga

(function () {
  const btnClick = () => {
    if (elements.postbtn) {
      elements.postbtn.addEventListener("click", () => {
        postPost.newPost(elements.postTitle.value, elements.postPhoto.value);
      });
    }
  };
  btnClick();
})();

console.log(window.location.href);

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
