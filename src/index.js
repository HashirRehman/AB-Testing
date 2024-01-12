import "./styles.css";
import { trackPageview, trackEvent } from "./analytics-api";
const {setArticle, getRandom, getArticles} = require('./articles');
const {winnerVariation} = require('./winnerVariation')

// Your code here
let articles = getArticles()
let testVariation = localStorage.getItem("testVariation")
let pageViewCount = JSON.parse(localStorage.getItem("pageViewCount"));
let signUpCount = JSON.parse(localStorage.getItem("signUpCount"));
let clickCount = JSON.parse(localStorage.getItem("clickCount"));
let signUp = document.getElementById("signup")
let variation = document.getElementById("test-variation")


signUp.addEventListener('click', ()=>{
  variation.innerHTML = testVariation
  localStorage.setItem("signUpCount", signUpCount = 1 )
  trackEvent("SignUp")
})

window.addEventListener('click', ()=>{
  variation.innerHTML = testVariation
  localStorage.setItem("clickCount", clickCount+=1)
  trackPageview("Click")
})

window.addEventListener('DOMContentLoaded', ()=>{
  variation.innerHTML = testVariation
  localStorage.setItem("pageViewCount", pageViewCount+=1)
  trackPageview('PageView')
})

if (window.localStorage.length == 0)
{
  testVariation = getRandom(articles).content
  variation.innerHTML = testVariation
  localStorage.setItem("testVariation", testVariation)
}

setArticle(signUpCount, clickCount, pageViewCount, testVariation )
winnerVariation()
