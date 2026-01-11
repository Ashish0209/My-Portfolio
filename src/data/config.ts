const config = {
  title: "Ashish Mishra | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ashish, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ashish, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ashish",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ashish Mishra",
  email: "ashishmishra.pta@gmail.com",
  site: "https://ashishmishra.site",

  // for github stars button
  githubUsername: "Ashish0209",
  githubRepo: "My-Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/ashish-mishra-bb3b6b20a/",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Ashish0209",
  },
};
export { config };
