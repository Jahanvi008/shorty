//load all URL from redirect.yml

const yaml = require('yaml');
const fs = require('fs');
const path = require('path');
const { setDefaultHighWaterMark } = require('stream');

const redirectFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8');
const redirects = yaml.parse(redirectFile);
console.log(redirects);

//Generate an HTML page for each redirect url from template.html
const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');

//loop through all URL redirects, and generate HTML page

for (let [slug, url] of Object.entries(redirects)){
    console.log("Generating HTML page for ", slug);
}