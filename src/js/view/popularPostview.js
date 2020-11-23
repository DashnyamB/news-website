import { DOMElements as selector } from "../model/DOMSelector";

class PopularPostView {
  constructor() {
    this.container = selector.popularPostContainer;
    this.prevPosts = null;
  }
  clearArea() {
    this.container.innerHTML = " ";
  }
  renderPosts(poPosts) {
    // console.log(poPosts.length);
    if (this.prevPosts === null) {
      this.prevPosts = poPosts;
    } else {
      poPosts.forEach((el) => {
        let i = 0;
        this.prevPosts.forEach((e) => {
          if (el[0] === e[0]) i++;
        });
        if (i === 0) {
          this.prevPosts.unshift(el);
        }
      });
    }
    this.clearArea();

    this.prevPosts = this.prevPosts.slice(0, 6);
    this.prevPosts.map((el) => {
      let html = ` 
        <div class="popular-post__posts">
        <figure>
          <img src="${el[1]["URL"]}" alt="img" />
          <p>${el[1]["title"]}</p>
        </figure>
      </div>`;

      this.container.insertAdjacentHTML("beforeend", html);
      console.log(el);
    });
  }
}

export default PopularPostView;
