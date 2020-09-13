import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem, Icon, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  languageSwitch: {
    "& .MuiSelect-select": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingRight: 0,
      "& .MuiIcon-root": {
        textAlign: "left",
        "& > img": {
          verticalAlign: "middle",
        },
      },
    },
  },
  languageSwitchMenu: {
    "& .MuiMenu-paper": {
      borderRadius: theme.spacing(1),
    },
  },
  languageSwitchMenuOption: {
    "& img": {
      verticalAlign: "middle",
    },
  },
}));

const languageOptions = [
  {
    iconSrc: process.env.PUBLIC_URL + "/images/language-icons/english.svg",
    label: "English",
    value: "en",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/images/language-icons/french.svg",
    label: "Français",
    value: "fr",
  },
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  let initialValue: string = "en";
  for (const { value } of languageOptions) {
    if (value === JSON.parse(JSON.stringify(i18n.language))) {
      initialValue = value;
      break;
    }
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const classes = useStyles();
  return (
    <Select
      disableUnderline
      className={classes.languageSwitch}
      IconComponent={() => null}
      onChange={(_event, child: any) => {
        if (child) {
          const language = child.props.value;
          changeLanguage(language);
        }
      }}
      value={initialValue}
      MenuProps={{
        disableScrollLock: true,
        className: classes.languageSwitchMenu,
      }}
    >
      {languageOptions.map(({ iconSrc, label, value }, key) => (
        <MenuItem
          value={value}
          selected={true}
          className={classes.languageSwitchMenuOption}
          key={key}
        >
          <Icon>
            <img src={iconSrc} alt={label} />
          </Icon>
          <Typography variant="body2">{label}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
