

let articles = [
  {
    id: 1,
    content: "Discover the app embraced by 18 million users.",
    pageViewCount: 0,
    signUpCount: 0,
    clickCount: 0
  },
  {
    id: 2,
    content: "Unleash the power of the app with 18 million users.",
    pageViewCount: 0,
    signUpCount: 0,
    clickCount: 0
  },
  {
    id: 3,
    content: "Join the community of 18 million users with this app.",
    pageViewCount: 0,
    signUpCount: 0,
    clickCount: 0
  },
  {
    id: 4,
    content: "Embark on a journey with the app loved by 18 million users.",
    pageViewCount: 0,
    signUpCount: 0,
    clickCount: 0
  }
]

const setArticle = (signUpCount, clickCount, pageViewCount, testVariation)=>{
  articles.forEach((x)=>{
    if (x.content == testVariation)
    {
      x.signUpCount = signUpCount
      x.clickCount = clickCount
      x.pageViewCount = pageViewCount
    }
  })
}

const winnerArticle = (Articles) =>{
  let max = Articles[0]
  Articles.forEach((object)=>{
    let maxCTR = Math.ceil(max.clickCount/max.pageViewCount)
    let objectCTR = Math.ceil(object.clickCount/object.pageViewCount)
    if (maxCTR!=NaN && objectCTR!=NaN)
    {
      if (maxCTR < objectCTR)
      {
        max = object
      }
    }
  })
  return max
}

const getArticles = ()=>{
  return articles
}

function getRandom (array) {
  return array[Math.floor((Math.random()*array.length))];
}

module.exports = {winnerArticle, setArticle, getArticles, getRandom}
