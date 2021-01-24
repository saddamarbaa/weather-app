const userPromise = fetch("https://randomuser.me/api/");
// console.log(userPromise);
userPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // data.results.forEach((element) => {
    //   // console.log(element.name);
    // });
    // console.log(data.results[0].name.title);
    // console.log(data.results[0].login.md5);
  })
  .catch((eror) => {
    console.log("not ok");
  });
