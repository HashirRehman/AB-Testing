import {fetchArticles} from '../src/api/backend'

export async function getRandomArticle(){
    let data = await fetchArticles()
    return data[Math.floor(Math.random() * data.length)];
}
