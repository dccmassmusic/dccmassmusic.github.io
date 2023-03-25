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
    "11/27/2022": ["First Sunday of Advent, Year A", "ADVENT1A"],
    "12/4/2022": ["Second Sunday of Advent, Year A", "ADVENT2A"],
    "12/11/2022": ["Third Sunday of Advent, Year A", "ADVENT3A"],
    "12/18/2022": ["Fourth Sunday of Advent, Year A", "ADVENT4A"],
    "3/26/2023": ["Fifth Sunday of Lent, Year A", "LENT5A"],
    "4/2/2023": ["Palm Sunday, Year A", "PALMA"],
    "4/9/2023": ["Easter Sunday, Year A", "FEAST_EASTERSUNDAY_A"],
    "4/16/2023": ["Second Sunday of Easter, Year A", "EASTER2A"],
    "4/16/2023": ["Third Sunday of Easter, Year A", "EASTER3A"],
};

var linkDictionary = {
    "ORD2A": "https://drive.google.com/drive/folders/1Vdc5YgA5T9Ha8azOiRoq0S6qcJvmYSxV?usp=share_link",
    "ORD3A": "https://drive.google.com/drive/folders/1aNGt03pqkqh5Y6U-OEXMwhfyKsOS-bb1?usp=share_link",
    "ORD4A": "https://drive.google.com/drive/folders/1JgJXxZAtNzSdiIjUnW3hXCfVCD4S9Q27?usp=share_link",
    "ORD5A": "https://drive.google.com/drive/folders/1UFZNI8Yv-nTGl3xTPp-ymneRtB30b9IC?usp=share_link",
    "ORD6A": "https://drive.google.com/drive/folders/1TqVEqspBjHxp27B8FR_194Qj-VR_w2he?usp=share_link",
    "ORD7A": "https://drive.google.com/drive/folders/1br-spIB_wkMVsEQrk5PuNqTzRcXKzFoK?usp=share_link",
    "ORD11A": "https://drive.google.com/drive/folders/19EYB9rAEkX7R5tRm35uqHWYbjYpYvwqO?usp=share_link",
    "ORD12A": "https://drive.google.com/drive/folders/1reEE9yzAz_SynYNzZRKp0NmhxnsdsKCN?usp=share_link",
    "ORD13A": "https://drive.google.com/drive/folders/1vVfn0t_5J_nQceghhwuwom1ZLJI6QY_y?usp=share_link",
    "ORD14A": "https://drive.google.com/drive/folders/1TciM1GDWKbgExAMzGPFCMcCL8W-I_K0r?usp=share_link",
    "ORD15A": "https://drive.google.com/drive/folders/1LCHKaXI6CRUKNQZFOJK_RCHr5zyOVUL0?usp=share_link",
    "ORD16A": "https://drive.google.com/drive/folders/1fTUROQeMTRBQaa_5cV2uyminVMysTRqo?usp=share_link",
    "ORD33C": "https://drive.google.com/drive/folders/1rurRO9L8PtVj5YqD1fYr5f46lv2hqSu8?usp=sharing",
    "ADVENT1A": "https://drive.google.com/drive/folders/1m_eIBSDKrsgHeoAdaejfuK_E8j7avojQ?usp=sharing",
    "ADVENT2A": "https://drive.google.com/drive/folders/1GN9aIAg-gv30ZQ3foW3PMjxXcs7qFk4a?usp=sharing",
    "ADVENT3A": "https://drive.google.com/drive/folders/1Q2EAnBng32qhnnxrysd1zUXRZlLy_pre?usp=sharing",
    "ADVENT4A": "https://drive.google.com/drive/folders/1-nhPYMXknT8m0idayxEJfdTjZfW6I1A4?usp=sharing",
    "LENT1A": "https://drive.google.com/drive/folders/1imeabCKTpV8xW5tYSdGQzK7d1MZ3J6DV?usp=share_link",
    "LENT2A": "https://drive.google.com/drive/folders/1k0EKvmfuaCvJ3G9rHKEGLgXOWTYtcspN?usp=share_link",
    "LENT3A": "https://drive.google.com/drive/folders/1VFcHwpS9l24PwRNHTSHOLiGTGtviWG3K?usp=share_link",
    "LENT4A": "https://drive.google.com/drive/folders/1VRW0lIvVhsNw1-W85ClOKyTPCwKGI046?usp=share_link",
    "LENT5A": "https://drive.google.com/drive/folders/1PuN_T1JR_2zE6B2LGK15pr-vbzuHnCIB?usp=share_link",
    "PALMA": "https://drive.google.com/drive/folders/1-wL25-HLw4waYqk7oIfz-xEF_mz0zkb0?usp=share_link",
    "PENTECOSTA": "https://drive.google.com/drive/folders/1TDLCldWpAFLt2qeOuR6Dqg1_NbyIJ6Fx?usp=share_link",
    "EASTER2A": "https://drive.google.com/drive/folders/1v9BTch_qf8I522IfdNT8JHRpg-RWh0wS?usp=share_link",
    "EASTER3A": "https://drive.google.com/drive/folders/1AIA39tn_cR5dHL_sMbXazd9y08WstOZL?usp=share_link",
    "EASTER4A": "https://drive.google.com/drive/folders/1MkCuIj5AiL6IGKnFAYr18jOEbIHDaFVk?usp=share_link",
    "EASTER5A": "https://drive.google.com/drive/folders/1UvpcjuNwk_zaDY61NvCJY1KAZg0v_mA9?usp=share_link",
    "EASTER6A": "https://drive.google.com/drive/folders/1xkHYzqMaZ9NF2XnbYhbz1vcGKr_kP4sw?usp=share_link",
    "FEAST_ASCENSION_A": "https://drive.google.com/drive/folders/1zslvmOIfxkiI87UluX9JZ9gJN-SuBRDb?usp=share_link",
    "FEAST_CORPUSCHRISTI_A": "https://drive.google.com/drive/folders/1fU7y61o111A--N-IS2QobQB9J8AYDNA2?usp=share_link",
    "FEAST_CHRISTTHEKING_C": "https://drive.google.com/drive/folders/1x3a6ML0alte3EGP2EMRH4dalEmU9WA3W?usp=sharing",
    "FEAST_EASTERVIGIL_A": "https://drive.google.com/drive/folders/1vjt5ewUBQNl9CEnpExnDl2vl686uiI4m?usp=share_link",
    "FEAST_EASTERSUNDAY_A": "https://drive.google.com/drive/folders/1hVk733VhVuF6PK0JnXDkOBCHf_rba2-F?usp=share_link",
    "FEAST_EPIPHANY_A": "https://drive.google.com/drive/folders/1co6JZebNFyqAtt736wDhnCRsBS2raIwD?usp=share_link",
    "FEAST_HOLYTRINITY_A": "https://drive.google.com/drive/folders/1JMHfpdWoV5x48OwfZlDLQpMYsXvChRUN?usp=share_link",
    "FEAST_MOTHEROFGOD_A": "https://drive.google.com/drive/folders/1RD_G0DmRGELrqQTKhLu6VDTwBaZHQKef?usp=share_link",
    "FEAST_NATIVITY_A": "https://drive.google.com/drive/folders/18horBQnDpAT5jThntCxGx5EOwD2v5xHT?usp=share_link",
};

//Populate table
for (var prop in linkDictionary) {
    if(Object.prototype.hasOwnProperty.call(linkDictionary, prop)){
        let spanName = "#" + prop + "_Link";
        let tableSpan = document.querySelector(spanName);
        if(tableSpan) {
            tableSpan.innerHTML = '<a href="' + linkDictionary[prop] + '">Files</a>';
        }
    }
}

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

//4th Upcoming Sunday: Find Date

const fourthDateSpan = document.querySelector('#fourthSundayDate');
let fourthSundayDate = getNthSunday(nextSundayDate, 4);
let fourthSundayDateString = (fourthSundayDate.getMonth() + 1).toString() + "/" + fourthSundayDate.getDate().toString() + "/" + fourthSundayDate.getFullYear().toString();
fourthDateSpan.textContent = fourthSundayDateString;

//4th Upcoming Sunday: Find Name

let fourthSundayNameString = nameDictionary[fourthSundayDateString][0];
const fourthNameSpan = document.querySelector('#fourthSundayName');
fourthNameSpan.textContent = fourthSundayNameString;

//4th Upcoming Sunday: Generate Link

let fourthSundayAbbrev = nameDictionary[fourthSundayDateString][1];
let fourthSundayLinkString = linkDictionary[fourthSundayAbbrev];
const fourthLinkSpan = document.querySelector('#fourthSundayLink');
fourthLinkSpan.innerHTML = '<a href="' + fourthSundayLinkString + '">Click here for files</a>';
