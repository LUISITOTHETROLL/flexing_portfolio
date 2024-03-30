import {
  ua,
  tt,
  unity2,
  code,
  horri,
  phone,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    hitler,
    threejs,
    flutter,
    unity,
    angular,
    jsts,
    fastapi,
    fr,
    ionic,
  } from "../assets";
  
  const technologies = [
    
    /**{
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },**/
    {
      name: "Fr",
      icon: ionic,
    },
    {
      name: "Fr",
      icon: fr,
    },
   /**  {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },**/
    {
      name: "JSTS",
      icon: jsts,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Unity",
      icon: unity,
    },
    
    {
      name: "fastapi",
      icon: fastapi,
    },
  ];

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Videogame Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  
  
  const experiences = [
    {
      title: "Computer Engineering Degree",
      company_name: "Universidad de Alicante",
      icon: ua,
      //starbucks,
      iconBg: "#383E56",
      
      date: "September 2017 - October 2022",
      points: [
        "During my education I got the opportunity to try a vast collection of technologies, from assembly language to high-level languages like Swift .",
        "Collaborating with fellow students in almost every module in order to provide a group project.",
        "Rust, MatLab, Spring Boot, parallel programming or 3D programming are just some of the many concepts I got to grasp during my university phase.",
        "First work involvement was tutoring other engineering students during this period of time",
        "Erasmus program in the University of Westminster in London",
      ],
    },
    {
      title: "Content Creation",
      company_name: "Tiktok",
      icon: tt,
      //tesla,
      
      iconBg: "#E6DEDD",
      date: "March 2021 - August 2021",
      points: [
        "Uploading creative videos with great impact on audience.",
        "Video and audio editing",
        "Collaborating with a team in order to get both quality recording and content",
        "Probably retaking activity soon",
      ],
    },
    {
      title: "Game Development",
      company_name: "Unity3D",
      icon: unity2,
      //shopify,
      iconBg: "#E6DEDD",
      date: "periodic hobby",
      points: [
        "Developing the logic and design of multiple simple but creative games.",
        "Testing its performance with real users and improving it after gathering enough feedback"
        
      ],
    },
    {
      title: "Side Projects",
      company_name: "Several Frameworks",
      icon: code,
      //meta,
      
      iconBg: "#383E56",
      date: "periodic hobby",
      points: [
        "Developing web applications using Angular, Flutter, mongoDB, FastApi and more.",
        "Collaborating with project colleagues.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Despite his little experience, Luis was able to provide me with a quality web application and more importantly he was able to guide me and educate me effectively on the NFT world inside the blockchain. His excentric approach towards the development of new skills made it a thrilling experience to work alongside him. You should be so lucky to see it in action.",
      name: "Tristan Bouillard",
      designation: "Model/Bachelor in Business based in Barcelona",
      company: "Barcelona",
      image: "https://media.licdn.com/dms/image/C4D03AQFVUey7erFVBQ/profile-displayphoto-shrink_800_800/0/1623059504303?e=1685577600&v=beta&t=fzryTKeDTyPjx5xPgumXiJ74ak0wBSsJ7JSYVBsJkPU",
      //"https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I thought my project was going to remain solely as an unfulfilled idea until I started to collaborate with Luis and started building something valuable.",
      name: "Javier Roca",
      designation: "Business Consultant based in Madrid",
      company: "Madrid",
      image: "https://media.licdn.com/dms/image/C5603AQGB9CsqKZNgyg/profile-displayphoto-shrink_800_800/0/1626726789272?e=1685577600&v=beta&t=ZhTo4MGOqL8CWRgbY5pA63IXZgdiHd-0NAmh7cFO6s8",
      //"https://randomuser.me/api/portraits/men/5.jpg",
    },
   /**  {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },**/
  ];
  
  const projects = [
    {
      name: "Unity3D",
      description:
        "2D and 3D simple games compatible with phone devices.",
      tags: [
        /**{
          name: "Unity3D",
          color: "blue-text-gradient",
        },**/
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Unity3D",
          color: "pink-text-gradient",
        },
      ],
      image: horri,//carrent,
      source_code_link: "hola.com",
    },
    {
      name: "Mobile App Development",
      description:
        "Prototypes for a car sharing app and night club events app",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "flutter",
          color: "pink-text-gradient",
        },
      ],
      image: phone,//jobit,
      source_code_link: "hola.com",
    },
    {
      name: "Basic Website Frontend",
      description:
        "Basic promotion website linked to a NFT shop",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        /**{
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },**/
      ],
      image: hitler,//tripguide,
      source_code_link: "https://glowing-beignet-7ec07c.netlify.app/mainmenu/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };