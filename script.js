const myPomise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      firstName: "Sadam",
      secondName: "Arbaa",
    });
  }, 1000);
  // reject("some then went Wrong");
});

myPomise
  .then((respone) => {
    console.log(`Here is the respone after one second respone`);
    console.log(respone);
  })
  .catch((error) => console.log(error));
console.log("this run now");
