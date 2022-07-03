//intitiazing variables
const genralBtn = document.getElementById("genral");
const businessBtn = document.getElementById("bussiness");
const sportBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

// initializing array

let newsArray = [];

// adding api keys
const API_KEY = "fd21aebef5674289b7b0f779c319ab0a";
const headlines_news =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=fd21aebef5674289b7b0f779c319ab0a";
const general_news =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=fd21aebef5674289b7b0f779c319ab0a";
const bussiness_news =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fd21aebef5674289b7b0f779c319ab0a";
const sports_news =
  "https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=fd21aebef5674289b7b0f779c319ab0a";
const technology_news =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fd21aebef5674289b7b0f779c319ab0a";
const entertainment_news =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=fd21aebef5674289b7b0f779c319ab0a";
const search_news =
  "https://newsapi.org/v2/everything?q=" +
  { newsQuery }.value +
  "&apiKey=fd21aebef5674289b7b0f779c319ab0a";

// adding addEventListener
// fetching top headline
window.onload = async function () {
  // console.log("window loaded "+ loadcount);
  const response = await fetch(headlines_news);
  if (response.status >= 200 && response.status < 300) {
    const newsData = await response.json();
    newsArray = newsData.articles;

    console.log(newsData);
  }
  newsType.innerHTML = `<h4>Headlines</h4>`;
  displyNews();
};

// fetching general news
genralBtn.addEventListener("click", async function () {
  const response = await fetch(general_news);
  if (response.status >= 200 && response.status < 300) {
    const newsData = await response.json();
    newsArray = newsData.articles;
  } else {
    //error handing
    console.log("error occur");
  }
  newsType.innerHTML = `<h4>General News</h4>`;
  displyNews();
});

//fetching buiness news
businessBtn.addEventListener("click", async function () {
  console.log("business activity");
  const response = await fetch(bussiness_news);
  if (response.status >= 200 && response.status < 300) {
    const newsData = await response.json();
    newsArray = newsData.articles;
    console.log(newsData);
  } else {
    //error handling
  }
  newsType.innerHTML = `<h4>Business News</h4>`;
  displyNews();
});

//fetching sports news
sportBtn.addEventListener("click", async function () {
  console.log("sport activity");
  const response = await fetch(sports_news);
  if (response.status >= 200 && response.status < 300) {
    const newsData = await response.json();
    newsArray = newsData.articles;
    console.log(newsData);
  }
  newsType.innerHTML = `<h4>Sport News</h4>`;
  displyNews();
});

// fething technology news
technologyBtn.addEventListener("click", async function () {
  console.log("technology activity");
  const response = await fetch(technology_news);
  if (response.status >= 200 && response.status < 300) {
    const newsData = await response.json();
    newsArray = newsData.articles;
    console.log(newsData);
  }
  newsType.innerHTML = `<h4>Technology News</h4>`;
  displyNews();
});

// fetching entertainment news
entertainmentBtn.addEventListener("click", async function () {
  console.log("entertainment activity");
  const response = await fetch(entertainment_news);
  if ((response.status >= 200 && response.status, 300)) {
    const newsData = await response.json();
    newsArray = newsData.articles;
    console.log(newsData);
  }
  newsType.innerHTML = `<h4>Entertainment News</h4>`;
  displyNews();
});

// fetching serch news
searchBtn.addEventListener("click", async function () {
  console.log("search activity");
  const response = await fetch(search_news);
  if (response.status >= 200 && response.status < 300) {
    const newsData = await response.json();
    newsArray = newsData.articles;
    console.log(newsData);
  } else {
    console.log(response.status, response.status);
  }
  newsType.innerHTML = `<h4>Related to search : ${newsQuery.value}</h4>`;
  displyNews();
});

// displaying news data

function displyNews() {
  let component= "";

  if (newsArray.length == 0) {
    newsDetails.innerHTML = "<h5> no record found";
    return;
  }
  newsArray.forEach((news) => {
   let descript= news.description;
   let desc=descript.slice(0,100)
  console.log(desc);
    component += `<div class="card mx-auto my-2 ms-lg-auto " style="width: 18rem;">
   <img src= "${news.urlToImage}" class="card-img-top" alt="...">
   <div class="card-body">
    <h5 class="card-title">${news.title}...</h5>
    <p class="card-text">${desc}....<span><a href="${news.url}">Read more</a> </span>
    </p>
    <a href="${news.url}" target="_blank" class="btn btn-primary">Read News</a>
   </div>
  </div>
`;
  });
  newsDetails.innerHTML=component;
}
