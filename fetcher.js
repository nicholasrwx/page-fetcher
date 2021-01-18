//goal to print this out
//Downloaded and saved 1235 bytes to ./index.html

const request = require("request");
const fs = require("fs");
const readline = require("readline");
const search = process.argv[2];
const path = process.argv[3];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const results = request(`${search}`, (error, response, body) => {
  if (error) {
    return console.log("somethings not working"), null;
  }
  if (response) {
    return response;
  }

  if (body) {
    const data = JSON.parse(body);
    return data;
  }
});

rl.question(`Do you want to write this URL Data to ${path} `, (answer) => {
  rl.prompt();

  if (answer === "Y" || answer === "y") {
    fs.writeFile(`${path}`, `${results}`, (err) => {
      if (err) {
        console.log("err");
        rl.close();
      } else {
        console.log(`Downloaded and saved 1235 bytes to ${path}`);
        rl.close();
      }
    });
  } else if (answer === "N" || answer === "n") {
    console.log("No New File Was Created.");
    rl.close();
  } else {
    console.log("encountered error");
    rl.close();
  }
});
