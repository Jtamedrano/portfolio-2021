import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import Project from "./Project";
interface Props {}

const projectInfo = [
  {
    id: 1,
    name: "Symplee.app",
    link: "https://www.symplee.app",
    quickDescription:
      "A start up app, geared toword redesigning tools for conusmers and business",
    tech: [
      "React",
      "Redux",
      "Apollo Server/Client",
      "GraphQL",
      "PostgreSQL",
      "Material-UI",
    ],
    additionalComment:
      "Disclaimer: App is still in prototype phase and any code shown is property of symplee chat",
    images: ["symplee.png"],
  },
  {
    id: 2,
    name: "Amazon Clone",
    link: "http://clone-7b00a.web.app/",
    git: "https://github.com/Jtamedrano/amazon-clone",
    quickDescription:
      "A e-commerce site meant to look and feel like shopping from amazon.",
    tech: ["React", "Redux", "Google Firebase"],
    images: ["amazon-clone.png"],
  },
  {
    id: 3,
    name: "Basic Todo App",
    link: "https://react-todo-git-jesse-medrano-jtamedrano.vercel.app/",
    git: "https://github.com/Jtamedrano/React-Todo",
    quickDescription:
      "A not so basic todo app. All todos are stored in local storage so you can get back to remembering what you had to do when you get back.",
    images: ["todo-home.png"],
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  projects: {
    flexGrow: 1,
  },
  heading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

const Projects = (props: Props) => {
  const classes = useStyles();
  return (
    <section id="projects" className="projects">
      <Typography variant="h3" className={classes.heading}>
        Projects
      </Typography>
      {/* {!!projectsNames &&
        projectsNames.map((project, i) => <p key={`P-${i}`}>{project}</p>)} */}
      <Grid
        container
        className={classes.projects}
        justify="center"
        spacing={3}
        alignItems="stretch"
      >
        {!!projectInfo &&
          projectInfo.map((project) => (
            <Project key={`projectSummary${project.id}`} project={project} />
          ))}
      </Grid>
    </section>
  );
};

export default Projects;
