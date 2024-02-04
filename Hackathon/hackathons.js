// line 3 - 897 contains data for the page
// @DOM_Manipulation and @functionality code starts at @line_901

// structure of the @Object in Array:
// {
//     id: (an number in increasing order, follow the sequence),
//     title: (title of the event / program / competitions same as in the github's README.md file),
//     about: (about  the event),
//     siteUrl: ( official or any other link of the event),
//     Youtube: (link to video of the event on youtube)
// }

// NOTE: All the keys and properties of the @Object are important. @Youtube key is optional, in case if you don't have this.

const data = [
  {
    title: "HackerCup by Facebook",
    about: `Hacker Cup is Facebook's annual open programming competition. Open to participants around the world, participants are invited to apply problem-solving and algorithmic coding skills to advance through each year’s online rounds, win prizes, and have a chance to make it to the global finals and win the grand prize.`,
    siteUrl: "https://www.facebook.com/codingcompetitions/hacker-cup",
    YouTube: "https://www.youtube.com/watch?v=SA91yNdx_e0",
  },
  {
    title: "HackCbs 5.0 by Hack2Skill",
    about: `hackCBS 5.0, a legacy being carried forward by like-minded individuals aims to collaborate the intellects of programmers, designers, application developers, tech-geeks, and newbies in the world of programming for the intensive development of a hack.
At hackCBS, we help you turn your ideas into reality by providing a comforting and welcoming environment. You’ll have all the freedom to create a product, learn new things, and have hilariously funny moments with your friends. Moreover, we’ll offer you a chance to network with working professionals and hacker community leaders. You will never learn faster than you will at a hackathon. `,
    siteUrl: "https://hack2skill.com/hack/hackcbs",
    YouTube: "https://www.youtube.com/watch?v=tDcEn5Mu6nE",
  },
  {
    title: " EY TECHNATHON",
    about: `Welcome to the 3rd edition of the EY Techathon, your opportunity to build a better world in the Metaverse.
Use technology and your imagination to solve any one of the three real-world challenges: Engineering,Entertainment,Health

Participants will get a chance to use cutting-edge technology and interact with EY leadership and industry veterans.

Winners will get a chance to win exciting cash prizes and internship opportunities at EY.
College students from every discipline, across the country can participate in this technology challenge.`,
    siteUrl: "https://www.ey.com/en_in/techathon-3",
  },
  
  {
    title: "Smart India Hackathon",
    about: `Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. The first four editions SIH2017, SIH2018, SIH2019 and SIH2020 proved to be extremely successful in promoting innovation out-of-the-box thinking in young minds, especially engineering students from across India.`,
    siteUrl: "https://sih.gov.in//",
  },

  {
    title: "Cricket Code Champions Hack",
    about: `Cricket Code Champions Hack is a hackathon that merges the thrills of the ICC Cricket World Cup with cutting-edge technology and creative innovation.
    This hackathon invites tech enthusiasts, developers, and cricket aficionados to collaborate on groundbreaking solutions inspired by the world of cricket.`,
    siteUrl: "https://www.hackerearth.com/challenges/hackathon/cricket-code-champions-hack/",
  }
];

// --------------------------------------------------------------------------------------------------------------------

const Accordion_wrapper = document.querySelector(".accordion_wrapper");

const accordion = (title, about, siteUrl, YouTube) => {
  return `<div class="accordion_container">
                      <div class="accordion_title">
                          <i class="fa-solid fa-caret-right arrow_icon"></i>
                          <h5>${title}</h5>
    
                          </div>
                      <div class="accordion_content">
                          <h5>About</h5>
                          <section>${about}</section>
  
                          <h5>Official Website</h5>
                          <a href=${siteUrl}>${siteUrl}</a>
  
                          <h5>Explanation on Youtube</h5>
                          <a href=${YouTube}>${YouTube}</a>
                      </div>
                  </div>`;
};

const insert_accordion_classes = () => {
  const accordion_content = () =>
    document.getElementsByClassName("accordion_content");
  const accordion_title = () =>
    document.getElementsByClassName("accordion_title");
  const arrow_icon = () => document.getElementsByClassName("arrow_icon");

  for (let i = 0; i < accordion_content().length; i++) {
    accordion_title()[i].onclick = function () {
      accordion_content()[i].classList.toggle("active");
      arrow_icon()[i].classList.toggle("open");
    };
  }
};

Accordion_wrapper.innerHTML = data
  .map((item) => {
    return accordion(item.title, item.about, item.siteUrl, item.YouTube);
  })
  .join("");
insert_accordion_classes();

// Search Bar Functionality
const search_input = document.querySelector("#search-input");
const search_form = document.querySelector("#search-form");

search_form.addEventListener("submit", (e) => {
  let inputVal = search_input.value.toLowerCase();
  e.preventDefault();

  Accordion_wrapper.innerHTML = data
    .map((item) => {
      if (item.title.toLowerCase().includes(inputVal)) {
        return accordion(item.title, item.about, item.siteUrl, item.YouTube);
      }
    })
    .join("");

  insert_accordion_classes();
});

// Navbar Functionality

const nav_bar = document.querySelector(".nav-ul");
const href = window.location.href;

for (let i = 0; i < nav_bar.children.length; i++) {
  if (nav_bar.children[i].children[0].href === href) {
    nav_bar.children[i].children[0].classList.add("active");
  }
}
