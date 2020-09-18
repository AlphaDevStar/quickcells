import React from "react";
import { Typography, makeStyles, Button, Container, Input, FormControl } from "@material-ui/core";
import { NavLayout, ContentContainer } from "../components";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { FullscreenExit } from "@material-ui/icons";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    containerFirstPart: {
      position: 'relative'
    },
    bkg: {
      display: 'flex',
      width: '25%',
      margin: 'auto',
      padding: '40px 0 0 0',
      [theme.breakpoints.between(600, 786)]: {
          padding: "20px 0 10px 0",
      },
      [theme.breakpoints.down(600)]: {
        padding: "20px 0 10px 0",
        width: '50%'
    }
    }, 
    caption: {
        display: 'contents',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '35px',
        textAlign: 'center',
        [theme.breakpoints.down(786)]: {
            fontSize: '20px',
            lineHeight: '23px'
        }
    },
    greenLetter: {
        color: '#54C278'
    },
    centerCaption: {
        left: '50%',
        top: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)'
    }, 
    formBox: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'column',
        alignItems: 'center'
    },
    commonStyleInForm: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '23px',
        background: '#F8F8F8',
        borderRadius: '12px',
        [theme.breakpoints.down(786)]: {
            fontSize: '10px',
            lineHeight: '12px'
        }
    }, 
    formInputMargin: {
        marginTop: '24px'
    },
    formInputTag: {
        paddingLeft: '30px',
        paddingTop: '15px',
        paddingBottom: '15px',
        width: '36%',
        [theme.breakpoints.down(786)]: {
            paddingLeft: '18px',
            paddingTop: '13px',
            paddingBottom: '13px',
        },
        [theme.breakpoints.down(600)]: {
            paddingLeft: '18px',
            paddingTop: '13px',
            paddingBottom: '13px',
            width: '60%'
        }
    },
    formInputTagEx: {
        paddingLeft: '30px',
        paddingTop: '15px',
        paddingBottom: '15px',
        [theme.breakpoints.down(786)]: {
            paddingLeft: '18px',
            paddingTop: '13px',
            paddingBottom: '13px',
        }
    }, 
    formSelectTag: {
        paddingLeft: '30px',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingRight: '20px',
        [theme.breakpoints.down(786)]: {
            paddingLeft: '18px',
            paddingTop: '13px',
            paddingBottom: '13px',
            paddingRight: '13px',
        }
    },
    formSelectBox: {
        marginTop: '40px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-start',
        width: '36%',
        [theme.breakpoints.down(600)]: {
            width: '60%'
        }
    }, 
    formSelectCap: {
        color: '#C5C5C5',
        marginBottom: '20px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '23px',
        borderRadius: '12px',
        [theme.breakpoints.down(786)]: {
            fontSize: '10px',
            lineHeight: '12px',
            marginBottom: '10px'
        }
    },
    formSelect: {
        width: '50%',
        background: '#F8F8F8',
        borderRadius: '12px'
    },
    marginSubmitButton: {
        marginTop: '60px',
        marginBottom: '90px'
    },
    buttonStyle: {
        borderRadius: '58px', 
        backgroundColor: '#54C278',
        color: 'white', 
        boxShadow: '7px 7px 17px rgba(84, 194, 120, 0.34)', 
        padding: '10px 0',
        [theme.breakpoints.down(786)]: {
            padding: '8px 0'
        }
    }, 
    buttonTitleStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal', 
        fontWeight: 500,
        fontSize: '20px', 
        lineHeight: '23px',
        [theme.breakpoints.down(1024)]: {
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '20px'
        },
        [theme.breakpoints.down(786)]: {
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '12px'
        }
    }, 
    submitButtonSize: {
        width: '20%'
    }, 
    menuStyle:{
      border: "1px solid black",
      borderRadius: "5%",
      backgroundColor: 'blue',
    },
    selectOptionText: {
        color: '#c5c5c5'
    }, 
    '@global': {
        '#filled-age-native-simple': {
            color: '#909090'
        }
    }, 
    dropdownStyle: {
      borderRadius: '5px',
      backgroundColor: '#F8F8F8', 
      transform: 'matrix(1, 0, 0, -1, 0, 0)'
    }
  }));

const PersonalQuote: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <NavLayout disableContentContainer={true}>
            <div className={classes.containerFirstPart}>
                <img src={process.env.PUBLIC_URL + "/images/cells/grey-white-background.jpg"} className={classes.bkg} alt="QuickCells logo" />
                <div className={classes.centerCaption}>
                    <span className={classes.caption}>Devis</span>
                    <span className={clsx(classes.caption, classes.greenLetter)}> Personnalisé</span>
                </div>
            </div>
            <FormControl className={clsx(classes.formBox)}>
                <Input disableUnderline={true} placeholder="Nom de la societé" className={clsx(classes.formInputTag, classes.formInputMargin, classes.commonStyleInForm)}></Input>
                <Input disableUnderline={true} placeholder="Adresse mail" className={clsx(classes.formInputTag, classes.formInputMargin, classes.commonStyleInForm)}></Input>
                <Input disableUnderline={true} placeholder="Numero de téléphone" className={clsx(classes.formInputTag, classes.formInputMargin, classes.commonStyleInForm)}></Input>

                <div className={clsx(classes.formSelectBox)}>
                    <Typography className={clsx(classes.formSelectCap)}>Package :</Typography>
                    <Select
                        defaultValue={1}
                        MenuProps={{classes: {
                            paper: classes.dropdownStyle
                        }}} 
                        IconComponent={()=>(<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5703 16.2712L17.9884 8.85314C18.3848 8.45668 19.0276 8.45669 19.4241 8.85314C19.8205 9.2496 19.8205 9.89238 19.4241 10.2888L11.2885 18.4244C11.2873 18.4256 11.2861 18.4268 11.2849 18.428C10.8882 18.8212 10.2478 18.8201 9.85246 18.4247L1.71687 10.2891C1.32041 9.89268 1.32041 9.2499 1.71687 8.85344C2.11332 8.45699 2.75611 8.45699 3.15256 8.85344L10.5703 16.2712Z" fill="#54C278"/>
                        </svg>
                        )}
                        className={clsx(classes.formSelect, classes.commonStyleInForm, classes.formSelectTag)} 
                        disableUnderline={true} 
                        >
                            <MenuItem value={1} className={clsx(classes.selectOptionText)}>Premium</MenuItem>
                            <MenuItem value={2} className={clsx(classes.selectOptionText)}>Graphs</MenuItem>
                            <MenuItem value={3} className={clsx(classes.selectOptionText)}>Solvers</MenuItem>
                    </Select>
                </div>

                <div className={clsx(classes.formSelectBox)}>
                    <Typography className={clsx(classes.formSelectCap)}>Nombre de licenses :</Typography>
                    <Input disableUnderline={true} placeholder="10" className={clsx(classes.formInputTagEx, classes.commonStyleInForm)}></Input>
                </div>
                
                <Button className={clsx(classes.marginSubmitButton, classes.buttonStyle, classes.buttonTitleStyle, classes.submitButtonSize)} >Envoyer ma demande</Button>
            </FormControl>
        </NavLayout>
  );
};

export {
    PersonalQuote as default,
    PersonalQuote,
};
