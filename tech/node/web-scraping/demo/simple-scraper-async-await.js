// import the library modules you installed from npm
const cheerio = require("cheerio");
const axios = require("axios");

// Define the scraping algorithm
async function runScraper(url) {
  try {
    const html = (await axios.get(url)).data;
    const $ = cheerio.load(html);

    $("a").each(function(i, e) {
      const url = $(e).attr("href");
      console.log(url);
    });
  } catch (error) {
    console.log("error: " + error);
  }
}

// Swap this for the url you want to scrape
const url =
  "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

// run the scraper by calling the function
runScraper(url);
