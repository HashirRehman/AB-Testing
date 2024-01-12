const {getArticles, winnerArticle} = require('./articles');

function winnerVariation(){
  let article = getArticles()
  localStorage.setItem("winnerVariation", JSON.stringify(winnerArticle(article)))
}

module.exports = {winnerVariation}
