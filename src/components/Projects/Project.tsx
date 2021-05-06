import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { MouseEvent, useContext } from "react";
import { IContext, PageContext } from "../../PageContextProvider";

interface ProjectView {
  project: {
    id: number;
    name: string;
    link: string;
    git?: string;
    quickDescription: string;
    tech?: string[];
    additionalComment?: string;
    images?: string[];
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 140,
  },
  cardBody: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  heading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonRack: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifySelf: "flex-end",
  },
  buttonLink: {
    textDecoration: "none",
  },
}));

const Project = ({ project }: ProjectView) => {
  const classes = useStyles();
  const context = useContext(PageContext) as IContext;

  const handleGallaryClick = (e: MouseEvent) => {
    e.preventDefault();
    if (
      !!context.setImageArray &&
      !!project.images &&
      project.images.length > 0
    ) {
      context.setImageArray(project.images);
    }
    if (!!context.setModalState) context.setModalState(true);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          {project.images && (
            <CardMedia
              className={classes.media}
              onClick={handleGallaryClick}
              image={"/project-images/" + project.images[0]}
            />
          )}
        </CardActionArea>
        <div className={classes.cardBody}>
          <Typography variant="h4" className={classes.heading}>
            {project.name}
          </Typography>
          <div>{project.quickDescription}</div>
          <div>
            {!!project.tech && (
              <p>
                Built with{" "}
                {project.tech.map((tech, i) => (
                  <span key={`tech-span-${project.name}-${i + 1}`}>
                    {tech}
                    {!!project.tech && i === project.tech.length - 1
                      ? "."
                      : ", "}
                  </span>
                ))}
              </p>
            )}
          </div>
          <p className="projectDisclaimer">
            {!!project.additionalComment && project.additionalComment}
          </p>
        </div>
        <Grid container spacing={1} className={classes.buttonRack}>
          <Grid item>
            <a
              href={project.link}
              className={classes.buttonLink}
              target="blank"
            >
              <Button color="primary" variant="outlined" size="small">
                Project
              </Button>
            </a>
          </Grid>
          <Grid item>
            {!!project.git ? (
              <a
                href={project.git}
                className={classes.buttonLink}
                target="blank"
              >
                <Button color="secondary" variant="contained" size="small">
                  Github
                </Button>
              </a>
            ) : (
              <span>
                <Button
                  color="secondary"
                  className={classes.buttonLink}
                  variant="contained"
                  size="small"
                >
                  Private GitHub Repo
                </Button>
              </span>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Project;
