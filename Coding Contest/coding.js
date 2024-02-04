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
    title: "Cook-off by CodeChef ",
    about:
      "Cook-off is an amazing 2.5 hours long coding competition held by Codechef every month. This competition helps improve your analytical and problem solving skills. ",
    siteUrl: "https://www.codechef.com/COOK134",
    YouTube:
      "https://www.youtube.com/playlist?list=PLQXZIFwMtjoxrJvVaqoGlFYJRwUCHUq1t",
  },
  {
    title: "Code Jam to I/O for Women",
    about:
      "At Google, we’re committed to building for everyone, and we know that a diversity of voices leads to better outcomes. We’re committed to increasing representation and building community in the online coding contest space and at Google I/O, our largest developer conference. Code Jam to I/O for Women is one way we bring women (students and professionals) from around the globe together, working to solve tough algorithmic challenges in a 2.5 hour, single-round coding competition. The top 150 on the scoreboard will receive a ticket and a stipend to participate in virtual Google I/O. ",
    siteUrl: "https://codingcompetitions.withgoogle.com/codejamio",
    YouTube: "https://www.youtube.com/watch?v=Q_2TwBhqHPg",
  },
  
  {
    title: "Code Gladiators",
    about:
      "Code Gladiators is an annual coding competition by TechGig, that draws the best and the brightest coding talent from all parts of India. With multiple contests in emerging technologies and the coveted title of Code Gladiators up for grabs, the competition sees enthusiastic participation and has grown from strength to strength with each passing year.The last date to register in this contest is June 20,2022.",
    siteUrl: "https://www.techgig.com/codegladiators",
    YouTube: "https://youtu.be/fzymgR7EdUs",
  },
  
    {
    title: "FOSSASIA Codeheat",
    about:
      "Codeheat is a coding contest for FOSSASIA projects on GitHub. The contest is separated into two months period after which winners of each period are announced. The jury chooses the winners from the top 10 contributors according to code quality and relevance of commits for the project each period. The jury also takes other contributions like submitted scrum reports and technical blog posts into account, but of course awesome code is the most important item on the list. Other participants have the chance to win Tshirts and Swag and get certificates of participation.",
    siteUrl: "https://codeheat.org/",
    YouTube: "https://www.youtube.com/watch?v=7jD6Iy-1EOs",
  },
  
  
  {
    title: "Google Code Jam",
    about:
      "Google Code Jam is conducted by Google from 2003.The competition consists of a set of algorithmic problems which must be solved in a fixed amount of time.The winner is awarded $15000 and there are smaller prizes for the runner ups.",
    siteUrl: "https://codingcompetitions.withgoogle.com/codejam",
    YouTube: "https://www.youtube.com/watch?v=cpguolx2oms",
  },
  
   {
    title: "Google Kick Start",
    about:
      "Onine coding contest with international particpants. Solve quality algorithmic questions designed by engineers at Google.Rounds take place region-wise.Scoring is based n penalty time and total points earned.Point earned = Total score | Penalty time =  Time taken to pass maximum testcasesTop partcipants might even get interview opportunity at Google. Certificates are given to all participants who submit at least 1 question. Consecutive particpation after an year will also display rank on certificate.",
    siteUrl: "https://codingcompetitions.withgoogle.com/codejam",
    YouTube: "https://www.youtube.com/watch?v=cpguolx2oms",
  },
  
    {
    title: "Global Coding Challenge by Credit Suisse",
    about:
      "The Global Coding Challenge is an online coding competition between participants across the globe. Around 3 weeks, users will be able to attempt solutions to nine coding problems. Participants can improve their code as many times as they like during the competition. After the completion of the competition, the Leaderboards will lock and the Global Coding Champion will be announced shortly. The competition has been entirely designed, built and run by Credit Suisse TAs. Competition is split across 7 regions: UK, USA & Canada, Europe, India, Southeast Asia, Switzerland, and the rest of the world.9 original questions, ranging from easy to hard, to be answered using any of 6 popular programming languages.There are prizes for the best individual coder globally, the top 3 coders of all 7 regions. Don't miss the chance to grab exciting prizes including MacBook Pro, iPhone, iPad Pro and much more! In the past competitions, students who have participated and done well have also joined the Credit Suisse team on a Summer Internship or as Technical Analysts.",
    siteUrl: "https://www.credit-suisse.com/pwp/hr/en/codingchallenge/#/",
    YouTube: "https://youtu.be/9Q4RDyqgN2g",
  },
  
   {
    title: "Hackerrank Contests",
    about:
      "Hackerrank Conducts various coding contest which are based on the core knowledge of Data Structures and Algorithms and also for any specific language. They have wide range of exciting quality prizes like macbook too. ",
    siteUrl: "https://www.hackerrank.com/contests",
    YouTube: "https://youtu.be/2t7jYYBW4NI",
  },
  
  
  {
    title: "Leetcode Contests",
    about:
      "Leetcode hosts weekly and biweekly competitions mostly centred around data structures and algorithms. Each contest has a variety of prizes to be won.",
    siteUrl: "https://leetcode.com/contest/",
    YouTube: "https://youtu.be/elUB_Ga82tM",
  },
  
  {
    title: "Newton School Grand Coding Contest",
    about:
      "Newton School Grand Coding Contest is an annual coding competition by Newton School, it is one of India's Premier Coding Challenges with prizes upto 10Lac Rupees. Top coders of India and across the globe compete in the foremost competitive coding contest of the country. It also gives access to internships and job opportunities directly through Newton School, with their hiring partner network of 800+ companies.",
    siteUrl: "https://www.newtonschool.co/coding-contest",
    YouTube: "https://youtu.be/W8KXpxYK900",
  },
  
  
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
