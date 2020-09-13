import React from "react";
import { makeStyles } from "@material-ui/core";
import Appbar from "./Appbar";
import Footer from "./Footer";
import ContentContainer from "./ContentContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    "& > header": {
      flexShrink: 0,
    },
    "& > footer": {
      flexShrink: 0,
    },
  },
}));

export interface INavLayout {
  disableContentContainer?: boolean;
  children?: any;
}

export const NavLayout: React.FC<INavLayout> = ({
  children,
  disableContentContainer,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      {disableContentContainer ? (
        children
      ) : (
        <ContentContainer>{children}</ContentContainer>
      )}

      <Footer />
    </div>
  );
};

export default NavLayout;
