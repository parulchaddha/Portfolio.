/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Parul Chaddha",
  title: "Hi all, I'm Parul",
  subTitle: emoji(
    "A passionate and aspiring Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Flask / YOLO and some other cool libraries and frameworks."
  ),
  resumeLink:
  "https://drive.google.com/file/d/1EtFNat78XY_59xYQXM12oQkF1_g8B-TU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://www.github.com/parulchaddha",
  linkedin: "https://www.linkedin.com/in/parulchaddha0904/",
  gmail: "parul.chaddha94@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@parul947a",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / AZURE"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "C language",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "C++ language",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fa fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Banasthali Vidyapith",
      logo: require("./assets/images/bv.jfif"),
      subHeader: "Bachelor's of Technology in Information Technology",
      duration: "July 2021 - May 2025",
      desc: "Scored 9.81 cgpa till now",
      descBullets: [
        "Let a coding club and conducted many technical workshops.",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Divine Public School",
      logo: require("./assets/images/divine.jfif"),
      subHeader: "Senior Secondary School",
      duration: "April 2019 - May 2021",
      desc: "Ranked 2 in the board examination in the school with a 95%",
      descBullets: ["Served as the head girl for one year and managed several technical and cultural events"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Version Control",
      progressPercentage: "90%"
    },
    {
      Stack: "UI/UX Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DESIS Ascend Educare Scholar",
      company: "D.E. Shaw & Co.",
      companylogo: require("./assets/images/shaw.jfif"),
      date: "Oct 2022 - Mar 2023",
      desc: "",
      descBullets: [
        "Contributed to frontend development of PustakKosh project using ReactJS, designing workflow and architecture",
        "Gained proficiency in Linux and actively maintained GitHub repository using Git for version control",
        "Ensured proper functionality of all APIs through comprehensive testing, prioritizing design patterns in ReactJS"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL AND TEAM PROJECTS",
  projects: [
    {
      image: require("./assets/images/web1.png"),
      projectName: "PustakKosh",
      projectDesc: "A book exchange platform for seamless communication between book donors and needy ones",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/akipur/Pustak-Kosh"
        }
      ]
    },
    {
      image: require("./assets/images/web2.png"),
      projectName: "Ability Assist",
      projectDesc: "Aimed at enhancing specially-abled individual lives by providing assistance and solutions to their unique challenges",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/parulchaddha/Ability-Assist"
        }
      ]
    },
    {
      image: require("./assets/images/web3.png"),
      projectName: "Car Counter",
      projectDesc: " Utilizes the YOLO (You Only Look Once) object detection model to count the number of cars in a video stream",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/parulchaddha/Car_Counter"
        }
      ]
    },
    {
      image: require("./assets/images/web4.png"),
      projectName: "People Counter",
      projectDesc: " Utilizes the YOLO (You Only Look Once) object detection model to count the number of people moving in two directions in a video stream",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/parulchaddha/People-Counter"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MICROSOFT AZURE AI-900 CERTIFICATE",
      subtitle: "Completed Certification from Microsoft Learn Portal and learnt the basics of AI/ML",
      image: require("./assets/images/ms.jfif"),
      imageAlt: "MS Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://learn.microsoft.com/en-us/users/parulchaddha-3539/credentials/9a9707e4ed679086"
        },
      ]
    },
    {
      title: "Postman Student Expert certification",
      subtitle: "Completed Certification from Postman Academy and learnt the basics of API's",
      image: require("./assets/images/postman.jfif"),
      imageAlt: "Postman Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1jlbg0sAoMxux6_nv9lM5uPQ1PrF9lR55/view?usp=sharing"
        },
      ]
    },
    {
      title: "Code'N'Tech Coding competition",
      subtitle: "Secured 1st runner up position out of 1000+ participants",
      image: require("./assets/images/codentech.png"),
      imageAlt: "Code'N'tech Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1Po1jkqxPr4alKiVBoaOjvRHcSQM-rCP_/view?usp=share_link"
        },
      ]
    },
    {
      title: "TechNova'22 Hackathon",
      subtitle: "Contributed in a project named menses(about periods poverty) and Secured 1st runner up position",
      image: require("./assets/images/technova.png"),
      imageAlt: "TechNova Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/12sBSdkxwxmlTccsc2ALA9dGSrKCyZ502/view?usp=sharing"
        },
      ]
    },
    {
      title: "#include<her> 1.0 ideathon",
      subtitle: "Secured 2nd runner up position in the ideathon organised in collaboartion with Reskilll and Microsoft Azure",
      image: require("./assets/images/azure.jpg"),
      imageAlt: "#Include<her> Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1vPivLnAhtH94aqomVL-Clx5QFzhl82hp/view?usp=sharing"
        },
      ]
    },  
    {
      title: "Microsoft Learn Student Ambassador",
      subtitle: "Selected as MLSA in a global community of technology enthusiasts",
      image: require("./assets/images/mlsa.jpg"),
      imageAlt: "MLSA Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1SdVC5tZyugAXCh9jPFIMVa-2falFpb3Q/view?usp=sharing"
        },
      ]
    },
    {
      title: "GeeksforGeeks x BV Chapter Lead",
      subtitle: "Selected as the Chapter Lead of GeeksForGeeks student chapter of my college",
      image: require("./assets/images/gfglogo.jpg"),
      imageAlt: "#Include<her> Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://drive.google.com/file/d/1H25CzED_wDXntUNeMKWpSoXsaYAmbAmv/view?usp=sharing"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@parul947a/convolutional-neural-networks-cnns-8577ced86332",
      title: "Convolutional Neural Networks (CNNs)",
      description:
        "Neural networks are modeled after our brains. There are individual nodes that form the layers in the network, just like the neurons in our brains connect different areas."
    },
    {
      url: "https://medium.com/@parul947a/american-express-on-campus-interview-experience-technology-intern-39938ad78b82",
      title: "American Express Interview Experience",
      description:
        "The selection process consisted of an Online Assessment followed by two rounds of interviews."
    },
    {
      url: "https://medium.com/@parul947a/react-hooks-29f0595c34e7",
      title: "React Hooks",
      description:
        "Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed."
    },
    {
      url: "https://dev.to/parulchaddha/introduction-to-docker-13f9",
      title: "Introduction to Docker",
      description:
        "Docker is a set of platforms as a service (PaaS) products that use the Operating system level virtualization to deliver software in packages called containers."
    },
    {
      url: "https://medium.com/@parul947a/json-introduction-639816a05b01",
      title: "JSON — Introduction",
      description:
        "JSON stands for JavaScript Object Notation.JSON is a text format for storing and transporting data.JSON is “self-describing” and easy to understand."
    },
    {
      url: "https://medium.com/@parul947a/python-mysql-7f32bd74a9d7",
      title: "Python MySQL",
      description:
        "Python can be used in database applications.Python needs a MySQL driver to access the MySQL database.I will use the driver “MySQL Connector” and recommend that you use PIP to install “MySQL Connector”."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Git and GitHub Workshop",
      subtitle: "Speaker of Hands-on workshop which has more than 250+ attendees",
      slides_url: "https://docs.google.com/presentation/d/1MY7mB09xhiyA5q05_mifLkIxTBnBBbaq88nrWqcq3FA/edit?usp=sharing",
      event_url: "https://www.linkedin.com/feed/update/urn:li:activity:7114902429254455296/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91 ",
     email_address: "parul.chaddha94@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "parul947a", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
