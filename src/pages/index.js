import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import DocProjectImage from '../images/docs template.png';
import HangmanImage from '../images/hangman.png';
import MemoryImage from '../images/memory.png';
import ClaysSiteImage from '../images/clays-site-desktop.png';
import GatsbyLogo from '../images/svg/Gatsby_Monogram.png';
import ReactLogo from '../images/svg/React-icon.svg';
import GraphQLLogo from '../images/svg/graphql-icon.svg';
import HTMLLogo from '../images/svg/HTML5_Badge.svg';
import CSSLogo from '../images/svg/CSS3_logo_and_wordmark.svg';
import JSLogo from '../images/svg/JavaScript-logo.png';
import MDXLogo from '../images/svg/mdx.svg';
import DefaultLogo from '../images/svg/defaultLogo.svg';
import SEO from '../components/SEO';
import MyFace from '../images/web-profile-bw.png';
import SanityLogo from '../images/sanityLogo.png';

const projects = [
  {
    title: 'A Portfolio Website',
    description:
      "I built Dr. Clay Carlson's personal website using Gatsby and the headless CMS Sanity.io. This was a transition for Dr. Carlson away from a Weebly site. By using a CMS, Dr. Carlson can focus on updating content when he starts a new course or publishes a new paper without having to worry about the overall look of the site.",
    tech: [
      { tech: 'Gatsby', link: 'https://www.gatsbyjs.com/' },
      { tech: 'React', link: 'https://reactjs.org/' },
      { tech: 'GraphQL', link: 'https://graphql.org/' },
      { tech: 'Sanity', link: 'https://www.sanity.io/' },
    ],
    liveLink: 'https://clay-carlson.netlify.app/',
    img: ClaysSiteImage,
  },
  {
    title: 'Docs Site Template',
    description:
      'After bumping into some of the limitations of the software I was using (e.g., Flare and FrameMaker), I decided to see what it would take to build docs with tools I love, like Gatsby, React, and markdown. This example documentation site was meant to be an experiment and a starting point for a real docs project.',
    tech: [
      { tech: 'Gatsby', link: 'https://www.gatsbyjs.com/' },
      { tech: 'React', link: 'https://reactjs.org/' },
      { tech: 'GraphQL', link: 'https://graphql.org/' },
      { tech: 'MDX', link: 'https://mdxjs.com/' },
    ],
    img: DocProjectImage,
    codeLink: 'https://github.com/z-carlson/docs-site',
    liveLink: 'https://quirky-elion-a4b0b0.netlify.app/',
  },
  {
    title: 'Memory',
    description:
      'I built this simple web version of the game Memory as a way to learn about using LocalStorage and SessionStorage. This framework-free implementation of the game uses randomly selected images from Unsplash and is different every time you play.',
    tech: [
      {
        tech: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        tech: 'HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      { tech: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    ],
    img: MemoryImage,
    codeLink: 'https://github.com/z-carlson/memory',
    liveLink: 'https://z-carlson.github.io/memory/',
  },
  {
    title: 'Hangman',
    description:
      'This version of hangman was built as a personal project when I was first learning to use React. The words come from the Owlbot dictionary api.',
    tech: [{ tech: 'React', link: 'https://reactjs.org/' }],
    img: HangmanImage,
    codeLink: 'https://github.com/z-carlson/react-hangman',
    liveLink: 'https://z-carlson.github.io/react-hangman/',
  },
];

const ProjectCardStyle = styled.div`
  background-color: var(--cardColor);
  padding: 1rem 1rem;
  margin-bottom: 100px;
  border-radius: 5px;
  position: relative;
  min-height: 450px;

  h3,
  h5 {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  .tech-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
  }

  .tech {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 10px;
    background-color: var(--backgroundColor);
    box-shadow: var(--level1);
    height: 30px;
    align-items: center;
  }

  .tech:hover {
    box-shadow: var(--level2);
  }

  .tech-name {
    color: var(--textColor);
  }

  .tech-logo {
    display: block;
    object-position: center;
    object-fit: fill;
    margin-left: 5px;
    width: 25px;
    height: 25px;
    /* background-color: rgba(230, 230, 230, 0.9); */
  }

  .details {
    max-width: 60%;
  }

  .buttons a + a {
    margin-left: 50px;
  }

  .buttons {
    margin: 5rem 0 3rem 0;
  }

  .buttons a {
    padding: 1rem 2rem;
    text-decoration: none;
    box-shadow: var(--level2);
    transition: all 0.1s ease-out;
    background: var(--textColorLight);
    color: var(--cardButtonsColor);
  }

  .buttons a:hover {
    box-shadow: var(--level3);
  }

  .buttons .live-link {
    color: var(--textColorLight);
    background: var(--cardButtonsColor);
  }

  @media (max-width: 900px) {
    .details {
      max-width: 100%;
    }

    p {
      margin: 1rem auto;
    }
  }
  @media (max-width: 600px) {
    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const ProjectImageStyle = styled.div`
  background: var(--silver-light);
  box-shadow: var(--level1);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 43%;
  height: 500px;
  position: absolute;
  right: -40px;
  top: 20px;

  padding: 1rem;

  img {
    width: 95%;
    height: 95%;
    object-position: top;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    top: 0;
    right: 0;
    height: 300px;

    img {
      object-fit: cover;
      object-position: top;
    }
  }
`;

const IntroStyles = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;

  .my-face img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    .my-face {
      display: none;
    }
  }
`;

const IndexPage = () => {
  const getIcon = (tech) => {
    switch (tech) {
      case 'Gatsby':
        return GatsbyLogo;
      case 'React':
        return ReactLogo;
      case 'GraphQL':
        return GraphQLLogo;
      case 'MDX':
        return MDXLogo;
      case 'JavaScript':
        return JSLogo;
      case 'HTML':
        return HTMLLogo;
      case 'CSS':
        return CSSLogo;
      case 'Sanity':
        return SanityLogo;
      default:
        return DefaultLogo;
    }
  };

  return (
    <>
      <SEO title={'Home'} />

      <Layout>
        <main>
          <IntroStyles>
            <div className="intro-text">
              <h1>Hello.</h1>
              <p>
                I'm Zachary Carlson, and I am a front-end developer, UX/UI
                designer, and technical communicator. I bring a human-centered
                design approach to all my work by first learning about the user,
                iterating on possible solutions, and then evaluating my success.
              </p>
              {/* <p>
                I???m looking for a web development role where I can collaborate
                closely with a team and continue to learn every day.
              </p> */}
            </div>
            <div className="my-face">
              <img src={MyFace} alt="my headshot" />
            </div>
          </IntroStyles>
          <h2>Recent Projects</h2>
          {projects.map((project, index) => {
            return (
              <ProjectCardStyle key={index}>
                <article className="details">
                  <h3>{project.title}</h3>
                  <ProjectImageStyle>
                    <img src={project.img} alt="test" />
                  </ProjectImageStyle>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tech, index) => {
                      return (
                        <div key={index}>
                          <a className="tech" href={tech.link}>
                            <img
                              alt={tech.tech}
                              className="tech-logo"
                              src={getIcon(tech.tech)}
                            />
                            <span className="tech-name">{tech.tech}</span>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  <div className="buttons">
                    <a className="live-link" href={project.liveLink}>
                      Live Site
                    </a>
                    {project.codeLink && (
                      <a className="source-link" href={project.codeLink}>
                        View Source
                      </a>
                    )}
                  </div>
                </article>
              </ProjectCardStyle>
            );
          })}
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
