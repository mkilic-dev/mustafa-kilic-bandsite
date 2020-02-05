// dont really need this anymore since implemented in comment.js directly
axios.get('https://project-1-api.herokuapp.com/showdates?api_key=62f16841-4998-460e-839d-cfdb42c3bc7f')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 