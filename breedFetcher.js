const args = process.argv.slice(2);

const request = require('request');

let searchWord = args[0];
request(`https://api.thecatapi.com/v1/breeds/search?name=${searchWord}`, (error,response,body)=>{
  if (error) {
    console.log(error);
  }
  // console.log(response)
  console.log(body);
})