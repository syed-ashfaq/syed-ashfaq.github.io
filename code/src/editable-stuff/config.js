// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Syed",
  middleName: "",
  lastName: "Ashfaq",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/syedashfaq",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/syedashfaq/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/syeddashfaq/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/syedashfaq.png"),
  imageSize: 375,
  message:
    "My name is Syed Ashfaq. I’m a graduate of 2006 from Jawaharlal Nehru Technological University Hyderabad at Hyderabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
  resume: "http://cv.syedashfaq.com/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "syedashfaq", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/syedashfaq.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/syedashfaq.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java Core", value: 90 },
    { name: "Java 8 and Above", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Spring/Spring Boot+", value: 75 },
    { name: "Hibernate/JPA", value: 70 },
    { name: "Microservices", value: 65 },
    { name: "Azure", value: 60 },
    { name: "Java Script", value: 70 },
    { name: "HTML/CSS", value: 65 },
    { name: "CI/CD", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "me@syedashfaq.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };