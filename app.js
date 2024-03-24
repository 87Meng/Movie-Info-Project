const express = require("express");
const app = express();
const port = 8800;
const mongoose = require("mongoose");

app.set("view engine", "ejs");

let myKey = "975a07d0fdf4f9abd01458d8f1f9f9c5";

let introUrl = `https://api.themoviedb.org/3/movie/157336?api_key=${myKey}&language=zh-TW`;
let videosUrl = `https://api.themoviedb.org/3/movie/157336/videos?api_key=${myKey}`;
let languageUrl = "https://api.themoviedb.org/3/tv/1399?language=zh-TW";

// 預告片API
async function videos() {
  try {
    let result = await fetch(videosUrl);
    let data = await result.json();
    // console.log(data);
  } catch (e) {
    console.log(e);
  }
}
videos();

// 電影簡介API ok
async function movieIntro() {
  try {
    let result = await fetch(introUrl);
    let data = await result.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("server is listening on port 8800");
});
