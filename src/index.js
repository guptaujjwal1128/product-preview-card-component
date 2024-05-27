import { day1 } from "./part1";
import "./styles/main.scss";
import sample from "./assets/sample.jpg";

day1();
console.log("hello world!");

const userPic = document.getElementById("userPic");
userPic.src = sample;
