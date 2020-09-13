import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Link,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.light,
  },
  footerListsContainer: {
    padding: theme.spacing(0, 0),
    margin: "auto",
    maxWidth: "50%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 1000,
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(4),
    },
  },
  footerList: {
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 3),
    },
  },
  footerListTitle: {
    fontWeight: "bold",
    fontSize: "21px",
  },
  footerBranding: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  footerBrandingLogo: {
    height: 20,
    display: "block",
    "& img": { height: "100%" },
    marginBottom: 10,
    [theme.breakpoints.up("sm")]: {
      height: 31,
    },
  },
  footerBrandingText: {
    color: "rgba(0, 0, 0, 0.5)",
  },
}));

export interface IFooter {
  privacyPolicy: string;
  DataProcessingAdendum: string;
  TermsOfService: string;
  supportEmail: string;
  instagram: string;
  linkedin: string;
}

interface IFooterListLink {
  url: string;
  newWindow?: boolean;
  label: string;
}

const FooterListLink: React.FC<IFooterListLink> = ({
  url,
  newWindow,
  label,
}) => {
  const MuiLink = (
    <Link
      {...(newWindow
        ? {
            href: url,
            target: "_blank",
            rel: "noreferrer",
          }
        : {
            component: RouterLink,
            to: url,
          })}
    >
      {label}
    </Link>
  );
  return <ListItem disableGutters>{MuiLink}</ListItem>;
};

interface IFooterList {
  title: string;
  links: IFooterListLink[];
}

const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const FooterList: React.FC<IFooterList> = ({ title, links }) => (
    <Grid item xs={12} sm={3} className={classes.footerList}>
      <Typography variant="h6" className={classes.footerListTitle}>
        {title}
      </Typography>
      <List>
        {links.map((link, key) => (
          <FooterListLink {...link} key={key} />
        ))}
      </List>
    </Grid>
  );

  const FooterBranding = (
    <div className={classes.footerBranding}>
      <RouterLink to="/" className={classes.footerBrandingLogo}>
        <img
          src={process.env.PUBLIC_URL + "/images/logo/logo-large.svg"}
          alt="QuickCells logo"
        />
      </RouterLink>

      <Typography variant="body2" className={classes.footerBrandingText}>
        Copyright Neoline Marketing / 2020
      </Typography>
    </div>
  );

  return (
    <footer className={classes.footerContainer}>
      <Grid container className={classes.footerListsContainer}>
        <FooterList
          title="Contact"
          links={[
            {
              label: "01, nom de la Rue, 00 000 Ville, Pays",
              url:
                "https://www.google.com/maps/search/" +
                encodeURIComponent("01, nom de la Rue, 00 000 Ville, Pays"),
              newWindow: true,
            },
            {
              label: "(+33) 00 00 00 00 00",
              url: "tel:(+33) 00 00 00 00 00",
              newWindow: true,
            },
            {
              label: "adresse@mail.com",
              url: "mailto:adresse@mail.com",
              newWindow: true,
            },
          ]}
        />
        <FooterList
          title="Companie"
          links={[
            {
              label: "Accueil",
              url: "/",
            },
            {
              label: "À propos",
              url: "/",
            },
            {
              label: "Tarifs",
              url: "/pricing",
            },
            {
              label: "Faq",
              url: "/",
            },
          ]}
        />
        <FooterList
          title="Légal"
          links={[
            {
              label: t("privacy-policy"),
              url: "/legal/privacy",
            },
            {
              label: t("terms-of-service"),
              url: "/legal/tos",
            },
            {
              label: t("data-processing-adendum"),
              url: "/legal/dpa",
            },
          ]}
        />
        <FooterList
          title="Nos Services"
          links={[
            {
              label: "QuickCells Graphs",
              url: "/",
            },
            {
              label: "QuickCells Solvers",
              url: "/",
            },
          ]}
        />
      </Grid>
      {/* Footer Branding */}
      {FooterBranding}
    </footer>
  );
};

export { Footer as default, Footer };
