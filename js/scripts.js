function getNextSunday(date = new Date()){
    const dateCopy = new Date(date.getTime());
    const nextSunday = new Date(
        dateCopy.setDate(
            dateCopy.getDate() + ((7 - dateCopy.getDay() + 7) % 7 || 7)
        ),
    );
    return nextSunday;
}

function getNthSunday(date, n) {
    var result = new Date(date);
    result.setDate(result.getDate() + ((n-1)*7));
    return result;
}

//Set up dictionaries

var nameDictionary = {
    "11/13/2022": ["Thirty-third Sunday in Ordinary Time, Year C", "ORD33C"],
    "11/20/2022": ["Our Lord Jesus Christ, King of the Universe, Year C", "FEAST_CHRISTTHEKING_C"],
    "11/27/2022": ["First Sunday of Advent, Year C", "ADVENT1C"],
    "12/4/2022": ["Second Sunday of Advent, Year C", "ADVENT2C"],
    "12/11/2022": ["Third Sunday of Advent, Year C", "ADVENT3C"],
    "12/18/2022": ["Fourth Sunday of Advent, Year C", "ADVENT4C"],
};

var linkDictionary = {
    "ORD33C": "https://drive.google.com/drive/folders/1rurRO9L8PtVj5YqD1fYr5f46lv2hqSu8?usp=sharing",
    "FEAST_CHRISTTHEKING_C": "https://drive.google.com/drive/folders/1x3a6ML0alte3EGP2EMRH4dalEmU9WA3W?usp=sharing",
    "ADVENT1C": "https://drive.google.com/drive/folders/1m_eIBSDKrsgHeoAdaejfuK_E8j7avojQ?usp=sharing",
    "ADVENT2C": "https://drive.google.com/drive/folders/1GN9aIAg-gv30ZQ3foW3PMjxXcs7qFk4a?usp=sharing",
    "ADVENT3C": "https://drive.google.com/drive/folders/1Q2EAnBng32qhnnxrysd1zUXRZlLy_pre?usp=sharing",
    "ADVENT4C": "https://drive.google.com/drive/folders/1-nhPYMXknT8m0idayxEJfdTjZfW6I1A4?usp=sharing",
};

//1st Upcoming Sunday: Find Date

const nextDateSpan = document.querySelector('#nextSundayDate');
let nextSundayDate = getNextSunday(new Date());
let nextSundayDateString = (nextSundayDate.getMonth() + 1).toString() + "/" + nextSundayDate.getDate().toString() + "/" + nextSundayDate.getFullYear().toString();
nextDateSpan.textContent = nextSundayDateString;

//1st Upcoming Sunday: Find Name

let nextSundayNameString = nameDictionary[nextSundayDateString][0];
const nextNameSpan = document.querySelector('#nextSundayName');
nextNameSpan.textContent = nextSundayNameString;

//1st Upcoming Sunday: Generate Link

let nextSundayAbbrev = nameDictionary[nextSundayDateString][1];
let nextSundayLinkString = linkDictionary[nextSundayAbbrev];
const nextLinkSpan = document.querySelector('#nextSundayLink');
nextLinkSpan.innerHTML = '<a href="' + nextSundayLinkString + '">Click here for files</a>';

//2nd Upcoming Sunday: Find Date

const secondDateSpan = document.querySelector('#secondSundayDate');
let secondSundayDate = getNthSunday(nextSundayDate, 2);
let secondSundayDateString = (secondSundayDate.getMonth() + 1).toString() + "/" + secondSundayDate.getDate().toString() + "/" + secondSundayDate.getFullYear().toString();
secondDateSpan.textContent = secondSundayDateString;

//2nd Upcoming Sunday: Find Name

let secondSundayNameString = nameDictionary[secondSundayDateString][0];
const secondNameSpan = document.querySelector('#secondSundayName');
secondNameSpan.textContent = secondSundayNameString;

//2nd Upcoming Sunday: Generate Link

let secondSundayAbbrev = nameDictionary[secondSundayDateString][1];
let secondSundayLinkString = linkDictionary[secondSundayAbbrev];
const secondLinkSpan = document.querySelector('#secondSundayLink');
secondLinkSpan.innerHTML = '<a href="' + secondSundayLinkString + '">Click here for files</a>';

//3rd Upcoming Sunday: Find Date

const thirdDateSpan = document.querySelector('#thirdSundayDate');
let thirdSundayDate = getNthSunday(nextSundayDate, 3);
let thirdSundayDateString = (thirdSundayDate.getMonth() + 1).toString() + "/" + thirdSundayDate.getDate().toString() + "/" + thirdSundayDate.getFullYear().toString();
thirdDateSpan.textContent = thirdSundayDateString;

//3rd Upcoming Sunday: Find Name

let thirdSundayNameString = nameDictionary[thirdSundayDateString][0];
const thirdNameSpan = document.querySelector('#thirdSundayName');
thirdNameSpan.textContent = thirdSundayNameString;

//3rd Upcoming Sunday: Generate Link

let thirdSundayAbbrev = nameDictionary[thirdSundayDateString][1];
let thirdSundayLinkString = linkDictionary[thirdSundayAbbrev];
const thirdLinkSpan = document.querySelector('#thirdSundayLink');
thirdLinkSpan.innerHTML = '<a href="' + thirdSundayLinkString + '">Click here for files</a>';

//Populate table
//let tableSpan = document.querySelector('#ORD33_Link');
//tableSpan.innerHTML = '<a href="' + linkDictionary["ORD33C"] + '">Files</a>';

for (var prop in linkDictionary) {
    if(Object.prototype.hasOwnProperty.call(linkDictionary, prop)){
        let spanName = "#" + prop + "_Link";
        let tableSpan = document.querySelector(spanName);
        if(tableSpan) {
            tableSpan.innerHTML = '<a href="' + linkDictionary[prop] + '">Files</a>';
        }
    }
}
