const cheerio = require("cheerio");
const axios = require("axios");

// Swap this for the url you want to scrape
const url =
  "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

axios
  .get(url)
  .then(response => {
    let $ = cheerio.load(response.data);
    $("a").each(function(i, e) {
      let links = $(e).attr("href");
      console.log(links);
    });
  })
  .catch(function(e) {
    console.log(e);
  });
