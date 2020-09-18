import React from "react";
import { Typography, makeStyles, Button, Container } from "@material-ui/core";
import { NavLayout, ContentContainer } from "../components";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    bkg: {
      backgroundImage: 'url(/images/cells/grey-white-background.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      margin: "60px 0",
      [theme.breakpoints.down(786)]: {
          margin: "20px 0"
      }
    },
    caption: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '35px',
        textAlign: 'center',
        [theme.breakpoints.down(786)]: {
            fontSize: '15px',
            lineHeight: '18px'
        }
    },
    greenLetter: {
        color: '#54C278'
    }, 
    leftAlign: {
        display: 'contents'
    }, 
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column',
        width: '50%',
        [theme.breakpoints.down(786)]: {
            width: '55%'
        }
    }, 
    buttonGroup: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        flexFlow: 'row', 
        padding: 0,
        [theme.breakpoints.down(786)]: {
            flexFlow: 'column'
        }
    }, 
    buttonStyle: {
        borderRadius: '58px', 
        backgroundColor: '#54C278',
        color: 'white', 
        boxShadow: '7px 7px 17px rgba(84, 194, 120, 0.34)', 
        padding: '16px 0',
        [theme.breakpoints.down(786)]: {
            padding: '8px 0',
            width: '155px !important',
        }, 
    }, 
    buttonTitleStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal', 
        fontWeight: 500,
        fontSize: '20px', 
        lineHeight: '23px',
        [theme.breakpoints.down(786)]: {
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '12px'
        }
    }, 
    smallButton: {
        width: '48%',
        [theme.breakpoints.down(786)]: {
            width: '100%'
        },
        [theme.breakpoints.between(786, 1024)]: {
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '18px'
        }
    },
    fullWidthButton: {
        width: '100%'
    }, 
    marginConst: {
        marginTop: '50px',
        [theme.breakpoints.down(786)]: {
            marginTop: '24px'
        }
    }
  }));

const EssayVersion: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <NavLayout disableContentContainer={true}>
            <ContentContainer style={{ maxWidth: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className={classes.bkg}>
                <Typography className={classes.caption}>
                    Essayez QuickCells 
                    <Typography className={clsx(classes.caption, classes.greenLetter, classes.leftAlign)}> Gratuitement.</Typography>
                </Typography>
                <Container className={clsx(classes.flexContainer)}>
                    <Container className={clsx(classes.buttonGroup)}>
                        <Button className={clsx(classes.buttonStyle, classes.smallButton, classes.buttonTitleStyle, classes.marginConst)} color="primary">QuickCells GRAPHS</Button>
                        <Button className={clsx(classes.buttonStyle, classes.smallButton, classes.buttonTitleStyle, classes.marginConst)}>QuickCells SOLVERS</Button>
                    </Container>
                    <Button className={clsx(classes.buttonStyle, classes.fullWidthButton, classes.marginConst, classes.buttonTitleStyle)}>QuickCells PREMIUM</Button>
                </Container>
            </ContentContainer>
        </NavLayout>
  );
};

export {
    EssayVersion as default,
    EssayVersion,
};
