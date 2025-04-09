export interface Project {
  title: string;
  desc: string;
  github?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "OHS (Oil-Contaminated Soil Treatment)",
    desc: "Educational app with interactive simulations.",
    github: "https://github.com/seifmoustafa/OHS",
    link: "https://apps.apple.com/eg/app/...",
  },
  {
    title: "ReadIt - Book Library",
    desc: "Discover books via the Google Books API.",
    github: "https://github.com/seifmoustafa/read_it",
  },
  {
    title: "Galvanic Cell",
    desc: "Interactive tool to calculate galvanic cell experiments.",
    github: "https://github.com/seifmoustafa/galvanic-cell",
    link: "https://seifmoustafa.github.io/galvanic-cell/",
  },
  {
    title: "Attendance Dashboard",
    desc: "Responsive web app to manage and analyze attendance data.",
    github: "https://github.com/seifmoustafa/Attendance",
    link: "https://seifmoustafa.github.io/Attendance/",
  },
  {
    title: "Deals (Under Development)",
    desc: "E-commerce platform for coupons & cashbacks (like Waffarha).",
    github: "https://github.com/seifmoustafa/Deals",
  },
];
