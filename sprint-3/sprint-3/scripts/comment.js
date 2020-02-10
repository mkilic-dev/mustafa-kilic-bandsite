const commentForm = document.querySelector(".commentForm");

let comments = [];


// 1. promise (X)
// 2. async await

// get
const url = "https://project-1-api.herokuapp.com/comments?api_key=62f16841-4998-460e-839d-cfdb42c3bc7f";
axios.get(url).then(response => {
  comments = response.data;
  renderComments(comments);
});

const likeHandler = (commentId) => {
  console.log(commentId);
  // axios.put('https://project-1-api.herokuapp.com/comments'
  //   + '/comments/' + commentId + '/likes' + '?api_key=62f16841-4998-460e-839d-cfdb42c3bc7f')
  //   .then(repsonse => {
  comments = comments.map(x => {
    if (x.id === commentId) {
      x.likes++;
      return x;
    } else {
      return x;
    }
  });
  renderComments(comments);
  //    });
}

commentForm.addEventListener("submit", event => {
  event.preventDefault();
  const comment = {};
  comment.name = event.target.author.value;
  comment.comment = event.target.comment.value;
  let dt = new Date();
  comment.date = dt.getFullYear() + '/' + dt.getMonth() + "/" + dt.getDay();
  axios.post(url,
    { name: event.target.author.value, comment: event.target.comment.value })
    .then(response => {
      comments.push(response.data);
      console.log(comments);
      renderComments(comments);
    });
});

const renderComments = (comments) => {
  const sortedComments = comments.sort((commentOne, commentTwo) => {
    return commentTwo.timestamp - commentOne.timestamp;
  });
  const commentList = document.querySelector(".comment-list");
  //clear comments
  commentList.innerHTML = "";
  // add comments
  for (let i = 0; i < sortedComments.length; i++) {
    const comment = sortedComments[i];
    const newComment = document.createElement("li");
    newComment.innerHTML =
      '<div class="comment">' +
      ' <div class="comment-avatar">' +
      '   <img src="./img/avatar.jpg" alt="avatar">' +
      ' </div>' +
      '<div class="comment-content">' +
      ' <div class="comment-head">' +
      '   <span class="comment-author">' + comment.name + '</span>' +
      '   <span class="comment-date">' + comment.timestamp + '</span>' +
      '   <span class="comment-likes"> Num Likes:' + comment.likes + '</span>' +
      '   <button onclick="likeHandler(\'' + comment.id + '\')">Like</button>' +
      ' </div>' +
      ' <div class="comment-body">' +
      comment.comment +
      ' </div>' +
      '</div>' +
      '</div>';
    commentList.appendChild(newComment);
  }
}
