import React from 'react';
import './style.scss';

interface Props {}

interface TechInfoProps {
  name: string;
  imgUrl: string;
}

const languages: TechInfoProps[] = [
  {
    name: 'HTML',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    name: 'CSS',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  },
  {
    name: 'SCSS',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
  },
  {
    name: 'JS',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  },
  {
    name: 'TS',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
];
const technologies: TechInfoProps[] = [
  {
    name: 'Bootstrap',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
  },
  {
    name: 'TailwindCSS',
    imgUrl:
      'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },

  {
    name: 'React',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Redux',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/800px-Redux_Logo.png',
  },
  {
    name: 'Node.js',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'GraphQL',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
  },
  {
    name: 'Postgres',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  },
  {
    name: 'mySQL',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg',
  },
];

interface TechItemProps {
  key: string;
  tech: TechInfoProps;
}

const TechItem = ({ tech }: TechItemProps) => (
  <div
    className="techItem"
    style={{
      backgroundImage: `url('${tech.imgUrl}')`,
    }}
  >
    {!tech.imgUrl && tech.name}
  </div>
);

const AboutMeContainer = (props: Props) => {
  return (
    <section id="aboutMe" className="aboutMe">
      <h2 className="aboutMe__headerText">About Me</h2>
      <div className="aboutMe__headerSubText">
        <p>2 Years of Web Development</p>
        <p>Studied Full Stack Web Developer from Lambda School</p>
      </div>
      <div>
        <div className="languages">
          {!!languages &&
            languages.map((lang, i) => <TechItem key={`L-${i}`} tech={lang} />)}
        </div>
        <div className="technologies">
          {!!technologies &&
            technologies.map((tech, i) => (
              <TechItem key={`T-${i}`} tech={tech} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeContainer;
