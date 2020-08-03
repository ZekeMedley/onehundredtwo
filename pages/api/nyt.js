const apiKey = process.env.NYT_API_KEY;
const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=102&api-key=${apiKey}`;

export default async (req, res) => {
    let url = queryUrl + `&page=${Math.floor(Math.random()*10)}`;
    await fetch(url).then(resp => resp.json()).then(data => res.json(data));
}
