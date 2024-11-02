export const Resume: React.FC = () => (
  <>
    <div className="mi-skills-area mi-section mi-padding-top">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>My Skills</h2>
          <span>My Skills</span>
        </div>
        <div className="mi-skills">
          <div className="row mt-30-reverse">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="col-lg-6 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">{skill.name}</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">
                      {skill.strength}
                    </div>
                    <div className="mi-progress-container">
                      <span
                        className="mi-progress-active"
                        style={{ width: skill.strength }}></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>Resume</h2>
          <span>Resume</span>
        </div>
        <div className="mi-smalltitle">
          <span className="mi-smalltitle-icon">
            <i className="lni lni-briefcase size-md "></i>
          </span>
          <h4>Working Experience</h4>
        </div>
        <div className="mi-resume-wrapper">
          {EXPERIENCES.map((experience) => (
            <div key={experience.period} className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">{experience.period}</h6>
              </div>
              <div className="mi-resume-details">
                <h5>{experience.designation}</h5>
                <a href={experience.link} target="_blank">
                  <h6 className="mi-resume-company">{experience.company}</h6>
                </a>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-30"></div>
        <div className="mi-smalltitle">
          <span className="mi-smalltitle-icon">
            <i className="lni lni-book size-md "></i>
          </span>
          <h4>Educational Qualifications</h4>
        </div>
        <div className="mi-resume-wrapper">
          {EDUCATION.map((school) => (
            <div key={school.degree} className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">{school.period}</h6>
              </div>
              <div className="mi-resume-details">
                <h5>{school.degree}</h5>
                <a href={school.link} target="_blank">
                  <h6 className="mi-resume-company">{school.institution}</h6>
                </a>
                <p>{school.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const SKILLS = [
  {
    name: "React (Context API, Reducers & Redux)",
    strength: "95%",
  },
  {
    name: "JavaScript/ TypeScript (ES6+)",
    strength: "95%",
  },
  {
    name: "Next.js (App Router & Pages Router)",
    strength: "95%",
  },
  {
    name: "Remix",
    strength: "90%",
  },
  {
    name: "Semantic HTML & CSS3",
    strength: "95%",
  },
  {
    name: "Node.js (Express & Nest.js)",
    strength: "95%",
  },
  {
    name: "GraphQL & REST APIs",
    strength: "95%",
  },
  {
    name: "AWS (Lambda, API Gateway, S3, IAM, RDS & CloudWatch)",
    strength: "95%",
  },
  {
    name: "AWS (ECS/ EKS, SNS & SQS)",
    strength: "90%",
  },
];

const EXPERIENCES = [
  {
    company: "Trafilea Inc.",
    link: "https://www.trafilea.com/",
    designation: "Sr. Full Stack Engineer",
    period: "2022 - Present",
    description:
      "Led a team of four developers to build a new frontend using Next.js 14 (App Router), and a robust backend with Nest.js. Integrated GraphQL and RESTful APIs to improve data flow and user experience. Deployed the platform on AWS EC2, utilizing Docker, AWS Lambda, and S3 for improved scalability, reliability, and performance, achieving a 25% boost in UI responsiveness and faster server-side processing.",
  },
  {
    company: "Planto Ltd.",
    link: "https://www.planto.hk/en/",
    designation: "Full Stack Developer",
    period: "2022",
    description:
      "Revamped a financial management app built with React and React Native, leveraging Context API and TypeScript for efficient state management. Migrated class components to functional ones, improving performance by 20%, and implemented a thorough testing strategy, ensuring reliable API integration (both GraphQL & REST APIs).",
  },
  {
    company: "Netsol Technologies",
    link: "https://netsoltech.com/",
    designation: "Software Engineer",
    period: "2021 - 2022",
    description:
      "Led development of web solutions using React (Reducers, Context API), TypeScript, and Next.js, achieving a 30% performance improvement. Collaborated with clients to deliver solutions powered by Node.js (Express), integrating RESTful APIs and ensuring robust backend services.",
  },
  {
    company: "PITC - Power Information Technology Company",
    link: "https://www.pitc.com.pk/",
    designation: "Associate Software Engineer",
    period: "2019 - 2020",
    description:
      "I contributed to developing B2B applications using React and JavaScript (ES6+), focusing on crafting clean, semantic HTML and CSS3 interfaces. I collaborated on backend integrations with RESTful APIs, gaining foundational experience in full-stack development.",
  },
];

const EDUCATION = [
  {
    institution: "LUMS - Lahore University of Management Sciences",
    link: "https://lums.edu.pk/",
    degree: "Master of Science in Computer Science",
    period: "2020 - 2022",
    description:
      "Researched core computer science principles and gained advanced knowledge in algorithms, system architecture, and modern technologies, applying these concepts to real-world software development and problem-solving.",
  },
  {
    institution: "National University of Computer & Emerging Sciences",
    link: "https://www.nu.edu.pk/",
    degree: "Bachelor of Science in Computer Engineering",
    period: "2016 - 2020",
    description:
      "Graduated Cum-Laude as the Bronze Medalist, with a strong foundation in software integration, computer architecture, and engineering, honing analytical and technical skills through hands-on projects and academic excellence.",
  },
  {
    institution: "Lahore Grammer School",
    link: "https://lgsjt.edu.pk/",
    degree: "Secondary School Graduation (A-Level)",
    period: "2014 - 2016",
    description:
      "Specialized in mathematics, physics, and computer science, developing a deep understanding of logical problem-solving, algorithmic thinking, and foundational programming concepts.",
  },
];
