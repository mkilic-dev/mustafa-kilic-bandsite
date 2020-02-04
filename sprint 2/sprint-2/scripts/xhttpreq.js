let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users", true);


xhr.onload = function() {
  console.log(this);
  if (this.status === 200) {

    console.log(JSON.parse(this.responseText));
    setTimeout(() => {
      let output = "";
      JSON.parse(this.responseText).forEach((user, index) => {
        output += `<li>${index + 1} ${user.login}</li>`;
      });
      let ul = document.querySelector(".git-users");
      ul.innerHTML = output;
    }, 2000);
  }
};

xhr.send();