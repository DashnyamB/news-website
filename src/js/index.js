import { DOMElements as elements } from "./model/DOMSelector";
import PopularPost from "../js/model/popularPost";

let postPost = new PopularPost();

(function () {
  const btnClick = () => {
    elements.postbtn.addEventListener("click", () => {
      postPost.newPost(elements.postTitle.value, elements.postPhoto.value);
    });
  };
  btnClick();
})();

postPost.getPost();
