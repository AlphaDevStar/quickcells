import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Grid,
  makeStyles,
  IconButton,
  Button,
  Link,
} from "@material-ui/core";
import { LanguageSwitcher } from "../../common/LanguageSwitcher";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { PrepareLogin, AfterLogin } from "../../../views";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "sticky",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1, 3),
    textAlign: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.09)",
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(10) - 1,
      padding: theme.spacing(1, 3),
      flexDirection: "row",
      alignItems: "center",
    },
  },
  appbarNoBoxShadow: {
    boxShadow: "none",
  },
  heightViewport: { height: "100vh" },
  appbarCommand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flex: 0.5,
      textAlign: "left",
    },
  },
  appbarLogo: {
    "& > img": {
      height: 31,
    },
    position: "relative",
    marginLeft: 0,
    [theme.breakpoints.up("md")]: {
      flex: "0.9",
    },
  },
  appbarDrawer: { display: "contents", flexDirection: "inherit" },
  hide: {
    display: "none",
  },
  appbarLinks: {
    justifyContent: "space-evenly",
    flexDirection: "inherit",
    flex: "1",
  },
  appBarLink: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  appbarButtonsContainer: {
    justifyContent: "space-between",
    flexDirection: "inherit",
    flex: "0.5",
    placeContent: "center",
    flexWrap: "nowrap",
  },
  appBarTrialButton: {
    order: 0,
    height: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    "&:hover": { backgroundColor: theme.palette.primary.dark },
    width: `calc(100% + ${theme.spacing(6)}px)`,
    marginLeft: -theme.spacing(3),
    textAlign: "center",
    verticalAlign: "middle",
    display: "flex",
    boxShadow: "5px -2px 30px rgba(84, 194, 120, 0.57)",
    borderRadius: 0,
    color: "white",
    textTransform: "capitalize",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 15,
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(10),
      textAlign: "center",
      verticalAlign: "middle",
      // display: "flex",
      boxShadow: "5px -2px 30px rgba(84, 194, 120, 0.57)",
      borderRadius: 0,
      width: 133,
      color: "white",
      textTransform: "capitalize",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: 15,
    },
  },
  appbarAccountButton: {
    order: 1,
    [theme.breakpoints.up("md")]: { order: 2 },
  },
  appbarLanguageButton: {
    marginLeft: "auto",
    marginRight: "auto",
    order: 2,
    display: "inherit",
    [theme.breakpoints.up("md")]: { order: 1 },
  },

  // Logo
}));

export interface IAppbar {
  showFreeTrialButton: boolean;
}

export const Appbar: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(window.scrollY === 0);

  const classes = useStyles();
  const theme = useTheme();
  const breakpointUpMd = useMediaQuery(theme.breakpoints.up("md"));

  // No box shadow on top of the page
  useEffect(() => {
    const handleScroll = () => setIsScrollTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrollTop]);

  // Disable scroll on body when the appbar is open in mobile
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // props
  const pageLinks = [
    {
      label: "Accueil",
      link: "/",
    },
    {
      label: "Graphs",
      link: "/product/quickcells-graphs",
    },
    {
      label: "Solvers",
      link: "/product/quickcells-solvers",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  var isLoggedIn = 0;

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(1);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: number) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const handleClose1 = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar
        className={clsx(
          classes.appbar,
          isScrollTop && classes.appbarNoBoxShadow,
          isOpen && !breakpointUpMd && classes.heightViewport
        )}
      >
        <div className={classes.appbarCommand}>
          <Link to="/" className={classes.appbarLogo} component={RouterLink}>
            <img
              src={process.env.PUBLIC_URL + "/images/logo/logo-large.svg"}
              alt="QuickCells logo"
            />
          </Link>
          <Grid item className={clsx(breakpointUpMd && classes.hide)}>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/naviguation-icons/menu.svg"
                }
                alt="Menu Icon"
              />
            </IconButton>
          </Grid>
        </div>

        <div
          className={clsx(
            classes.appbarDrawer,
            !isOpen && !breakpointUpMd && classes.hide
          )}
        >
          <Grid container className={classes.appbarLinks}>
            {pageLinks.map(({ label, link }, i) => (
              <Grid item key={i}>
                <Link
                  to={link}
                  component={RouterLink}
                  className={classes.appBarLink}
                >
                  {label}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid container className={classes.appbarButtonsContainer}>
            <Grid item component={Button} className={classes.appBarTrialButton}>
              essai gratuit
            </Grid>
            <Grid item className={classes.appbarLanguageButton}>
              <LanguageSwitcher />
            </Grid>
            <Grid
              item
              component={IconButton}
              className={classes.appbarAccountButton}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/naviguation-icons/account.svg"
                }
                alt="Account Icon"
                onClick={handleClickOpen}
              />
              {(isLoggedIn === 0) && (<PrepareLogin selectedValue={1} open={open} onClose={handleClose} />) }
              {(isLoggedIn === 1) && (<AfterLogin open={open} onClose={handleClose1} />)}
            </Grid>
          </Grid>
        </div>

        {/* Children */}
        {children}
      </AppBar>
    </React.Fragment>
  );
};

export default Appbar;
