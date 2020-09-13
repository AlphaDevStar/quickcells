import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1 0 auto",
    position: "relative",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

const ContentContainer: React.FC<React.ComponentProps<typeof Container>> = ({
  children,
  className,
  ...other
}) => {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      component="main"
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </Container>
  );
};

export { ContentContainer as default, ContentContainer };
