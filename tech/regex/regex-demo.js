const re = /\(?\d{3}[)-\.]\d{3}[\.-]\d{4}/g;

const txt = `Here is my number 123-456-7893.
Should you not be able to reach me there you can contact me at work (223)456-4305, or call my wife at 234.343.4521.`;

const phoneNumbers = txt.match(re);
console.log(phoneNumbers);
