import axios from "../axios";
require("@babel/polyfill");

export default class PopularPost {
  newPost(PostTitle, url) {
    const postInfo = {
      title: PostTitle,
      URL: url,
    };

    if (postInfo.title !== "" && postInfo.URL !== "") {
      axios
        .post("/popularPost.json", postInfo)
        .then((response) => console.log("Saved"))
        .catch((err) => console.log(err));
    }
  }

  async getPost() {
    try {
      let a = await axios.get("/popularPost.json").then((res) => {});
    } catch (err) {
      console.log("Өгөгдөл татахад алдаа гарлаа");
    }

    // console.log("====> ", a.data);
  }
}

// export const getPopularPost = () => {
//   let tempData = [];
//   axios
//     .get("/popularPost.json")
//     .then((response) => {
//       tempData = Object.entries(response.data).reverse();
//       console.log("aaaaa", tempData);
//     })
//     .catch((err) => console.log(err));

//   setTimeout(() => {
//     popularPosts = tempData;
//     console.log("from get data", popularPosts);
//   }, 1000);
// };
