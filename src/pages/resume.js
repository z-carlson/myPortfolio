import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import devIcon from "../images/svg/code.svg";
import designIcon from "../images/svg/pen.svg";
import writeIcon from "../images/svg/paper.svg";

const experience = [
  {
    employer: "Thermo Fisher Scientific",
    title: "User Content Designer",
    dates: "Jan. 2019 - Present",
  },
  {
    employer: "Sundial Software Corporation",
    title: "Technical Writer, Contracted to Thermo Fisher Scientific",
    dates: "Sept 2018 - Jan 2019",
  },
  {
    employer: "Google, Inc",
    title: "Technical Writer Intern",
    dates: "June 2017 - Aug. 2017",
  },
  {
    employer: "Wisconsin Academy of Sciences, Arts & Letters",
    title: "Digital Content Editor",
    dates: "May 2015 - June 2016",
  },
  {
    employer: "Wisconsin Academy of Sciences, Arts & Letters",
    title: "Digial Editor Intern",
    dates: "June 2015 - May 2015",
  },
];

const education = [
  {
    school: "Carnegie Mellon University",
    gradDate: "December 2017",
    degree: "Master of Arts in Professional Writing",
  },
  {
    school: "University of Wisconsin-Whitewater",
    gradDate: "December 2015",
    degree: "Bachelor of Arts in Professional Writing and Publishing",
  },
];

const continuedLearning = [
  {
    source: "Wes Bos",
    course: "Master Gatsby",
    url: "www.mastergatsby.com",
  },
  {
    source: "Interaction Design Foundation",
    course: "Web Design for Usability",
    url:
      "https://www.interaction-design.org/zachary-carlson/certificate/course/fltqnHSHvXsBrQpNxg?certificateType=course",
  },
  {
    source: "Interaction Design Foundation",
    course: "UI Design Patterns for Successful Software",
    url:
      "https://www.interaction-design.org/zachary-carlson/certificate/course/34f4e46c-aa91-4821-a5a7-5fe713f99946",
  },
  {
    source: "Interaction Design Foundation",
    course: "Information Visualization",
    url:
      "https://www.interaction-design.org/zachary-carlson/certificate/course/0cad84c9-69e6-425c-9aaa-204b2b57379d",
  },
  {
    source: "Interaction Design Foundation",
    course: "Human Computer Interaction - HCI",
    url:
      "https://www.interaction-design.org/zachary-carlson/certificate/course/fltqnHSHvVXVjMLB2l?certificateType=course",
  },
  {
    source: "Udemy",
    course: "The Complete Web Developer: Zero to Master",
    url:
      "https://www.udemy.com/certificate/UC-022bce85-7955-41c1-b440-8ffc1bdefd97",
  },
];

const ExperienceStyles = styled.div`
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--textColor);
  .dates {
    color: var(--softAccent);
    font-size: var(--smallText);
  }
  .title {
    font-weight: 300;
  }

  .place-date {
    display: flex;
    justify-content: space-between;
  }
`;

const EducationStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  color: var(--textColor);

  .school {
    font-size: var(--h4);
  }

  .grad-date {
    color: var(--softAccent);
  }

  .degree-program {
  }
`;

const ContinuedLearningStyles = styled.div`
  margin-bottom: 0.75rem;

  a {
    font-weight: 600;
  }
`;

const SkillZone = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  width: 150%;
  margin-left: -150px;
  color: var(--textColor);

  .desc-heading {
    display: block;
    font-size: var(--h4);
  }

  .skill-diagram {
    width: 396px;
    height: 374px;
    position: relative;
    color: var(--textColorLight);
  }

  .skill-diagram div {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    transition: all 0.2s ease;
    transition: z-index 0s;
    /* mix-blend-mode: multiply; */

    font-size: var(--h5);

    opacity: 0.6;
  }

  .skill-diagram div:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }

  #me-circle {
    position: absolute;
    left: 44.2%;
    right: 44.95%;
    top: 50.41%;
    bottom: 38.5%;

    z-index: 10;

    border: none;
    color: white;

    font-size: var(--h4);
    transition: all 0.1s ease;
    opacity: 1;
  }

  #me-circle:hover {
    text-shadow: 3px 3px var(--softAccent);
  }

  #dev-circle {
    position: absolute;
    left: 19.95%;
    right: 19.44%;
    top: 0%;
    bottom: 35.83%;

    /* misty-rose */
    background: #f1d9d7;
    z-index: 1;
    opacity: 0.8;
  }
  #design-circle {
    position: absolute;
    left: 0%;
    right: 39.39%;
    top: 35.83%;
    bottom: 0%;

    background: rgba(217, 162, 108);
    z-index: 2;
  }
  #writer-circle {
    position: absolute;
    left: 39.39%;
    right: 0%;
    top: 35.83%;
    bottom: 0%;

    background: rgba(197, 197, 185);
    z-index: 1;
    opacity: 0.8;
  }

  .highlight {
    opacity: 1;
    box-shadow: var(--level2);
    z-index: 3 !important;
    filter: brightness(1.05);
  }

  .faded {
    opacity: 0.6;
    filter: grayscale(0.5);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin-left: 0;
  }
`;

const ResumePage = () => {
  let [skill, setSkill] = useState("me");

  const handleSkillClick = (e) => {
    let cat = e.target.dataset.category;
    setSkill(cat);
    console.log(skill);
  };

  const getClasses = (cat) => {
    if (skill === "me") return;

    switch (skill) {
      case "me":
        return "";
      case cat:
        return "highlight";
      default:
        return "faded";
    }
  };

  return (
    <>
      <Layout>
        <main id="resume-page">
          <title>Resume</title>
          <h1>Resume</h1>
          <h2>Skills</h2>
          <SkillZone>
            <div className="skill-diagram">
              <div id="me-circle" data-category="me" onClick={handleSkillClick}>
                Me
              </div>
              <div
                id="dev-circle"
                data-category="dev"
                onClick={handleSkillClick}
                className={getClasses("dev")}
              >
                Developer
              </div>
              <div
                id="design-circle"
                data-category="designer"
                onClick={handleSkillClick}
                className={getClasses("designer")}
              >
                Designer
              </div>
              <div
                id="writer-circle"
                data-category="writer"
                onClick={handleSkillClick}
                className={getClasses("writer")}
              >
                Writer
              </div>
            </div>
            <div className="skill-description">
              {skill === "me" ? (
                <div id="me-desc" data-category="me">
                  <span className="desc-heading">Me</span>
                  <p>I'm a developer, designer, and technical writer. </p>
                  <p>
                    Click a skill to see what kinds of experience I have in that
                    area.
                  </p>
                </div>
              ) : (
                ""
              )}

              {skill === "dev" ? (
                <div id="dev-desc" data-category="dev">
                  <span className="desc-heading">Developer</span>
                  <p>I am a front-end JavaScript developer. </p>
                </div>
              ) : (
                ""
              )}

              {skill === "designer" ? (
                <div id="designer-desc" data-category="designer">
                  <span className="desc-heading">Designer</span>
                  <p>
                    I bring a human-centered design approach to all my work.
                    User experience design and research. I like to design user
                    interfaces and experiences.
                  </p>
                  <p>Some of the research methods I've used:</p>
                  <ul>
                    <li>Card sorting</li>
                    <li>Tree testing</li>
                    <li>Contextual interviewing</li>
                  </ul>
                  <p>
                    When designing prototypes and mock ups, I like to use ...
                  </p>
                  <ul>
                    <li>Figma</li>
                    <li>Adobe Illustrator and Photoshop</li>
                  </ul>
                </div>
              ) : (
                ""
              )}

              {skill === "writer" ? (
                <div id="writer-desc" data-category="writer">
                  <span className="desc-heading">Writer</span>
                  <p>I make words good </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </SkillZone>

          <h2>Experience</h2>
          {experience.map((job, id) => {
            return (
              <ExperienceStyles key={id}>
                <div className="place-date">
                  <span className="employer">{job.employer}</span>
                  <span className="dates"> {job.dates}</span>
                </div>

                <span className="title">{job.title}</span>
              </ExperienceStyles>
            );
          })}
          <h2>Education</h2>
          {education.map((school, id) => {
            return (
              <EducationStyles key={id}>
                <span className="school">{school.school}</span>
                <span className="grad-date">Graduated: {school.gradDate}</span>
                <span className="degree-program">{school.degree}</span>
              </EducationStyles>
            );
          })}
          <h2>Continued Learning</h2>
          <p>
            I love learning and am always looking for new topics to explore.
            Here are some of the recent online courses I've completed.
          </p>
          {continuedLearning.map((course, id) => {
            return (
              <ContinuedLearningStyles key={id}>
                <a href={course.url}>
                  <span>{course.course}</span> | <span>{course.source}</span>
                </a>
              </ContinuedLearningStyles>
            );
          })}
        </main>
      </Layout>
    </>
  );
};

export default ResumePage;
