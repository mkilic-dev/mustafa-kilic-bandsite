const commentForm = document.querySelector(".commentForm");
const comments = [
  {
    author: "Micheal Lyons",
    comment: "They BLEW the ROOF off their last, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have ever witnessed. ",
    date: "2018/12/18"
  },
  {
    author: "Gary Wong",
    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    date: "2018/12/12"
  },
  {
    author: "Theodore Duncan",
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    date: "2018/11/15"
  },
];

// adding axios under the array

axios.get('https://project-1-api.herokuapp.com/comments?api_key=62f16841-4998-460e-839d-cfdb42c3bc7f')
  .then(function (response) {
    // handle success
    console.log(response.data);
    renderComments(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 

commentForm.addEventListener("submit", event => {
  event.preventDefault();
  const comment = {};
  comment.author = event.target.author.value;
  comment.comment = event.target.comment.value;
  let dt = new Date();
  comment.date = dt.getFullYear() + '/' + dt.getMonth() + "/" + dt.getDay();
  comments.push(comment);

  renderComments(comments);
});

const renderComments = (comments) => {
  console.log(comments);
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
      '   <span class="comment-author">' + comment.author + '</span>' +
      '   <span class="comment-date">' + comment.timestamp + '</span>' +
      ' </div>' +
      ' <div class="comment-body">' +
      comment.comment +
      ' </div>' +
      '</div>' +
      '</div>';
    commentList.appendChild(newComment);
  }
}



console.log(comments);


// renderComments(comments);