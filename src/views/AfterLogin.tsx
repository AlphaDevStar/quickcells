import React from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import clsx from "clsx";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    dialogBox: {
        background: 'white',
        borderRadius: '29px',
        overflow: 'hidden',
        width: '350px'
    },
    specButtonFont: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '15px',
        padding: 0,
        margin: 0
    },
    generalButtonStyle2: {
        background: 'white',
        border: '2px solid #E5E5E5',
        boxSizing: 'border-box',
        borderRadius: '36px',
        marginBottom: '20px',
    },
    specButtonWidth: {
        width: '243px',
        padding: '12px 0',
        marginBottom: '29px',
    },
    paddingContainer: {
        marginLeft: '53px'
    },
    individual: {
        paddingLeft: '4px',
        display: 'flex',
        marginBottom: '36px',
    },
    individual1: {
        paddingLeft: '7px',
        display: 'flex',
        marginBottom: '40px',
    },
    betMargin: {
        marginLeft: '24px'
    },
    betMargin1: {
        marginLeft: '26px',
        marginTop: '7px',
    },
    greenLetter: {
        color: 'rgb(84, 194, 120)',
    }
}));
export interface DialogProps1 {
    open: boolean;
    onClose: () => void;
}
const AfterLogin: React.FC<DialogProps1> = (props:DialogProps1) => {
    const classes = useStyles();
    const theme = useTheme();
    const { open, onClose} = props;
    const handleClose = () => {
        onClose();
    };
    const buttonsTitle = ['Se connecter avec Google', 'Se connecter avec Microsoft'];
    const buttonsImage = ['/images/dashboard/google.svg', '/images/dashboard/microsoft.svg'];
    return (
        <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open} 
        PaperProps={{classes: {root: classes.dialogBox}}}>
            <DialogTitle id="dialog-title">Compete</DialogTitle>
            {/* <div className={clsx(classes.flexContainer)}>
                {
                buttonsTitle.map((title, index) => (
                    <Button className={clsx(classes.specButtonFont, classes.generalButtonStyle2, classes.specButtonWidth)}>
                        <img src={process.env.PUBLIC_URL + buttonsImage[index]} className={clsx(classes.iconButton)}/>
                        {title}
                    </Button>
                ))
                }
            </div> */}
            <div className={clsx(classes.paddingContainer)}>
                <div className={clsx(classes.individual)}>
                    <img src={process.env.PUBLIC_URL + "/images/login/user.svg"}/>
                    <div className={clsx(classes.betMargin)}>
                        <Typography className={classes.specButtonFont}>John Stone</Typography>
                        <Typography className={classes.specButtonFont}>example@gmail.com</Typography>
                    </div>
                </div>
                <div className={clsx(classes.individual1)}>
                    <img src={process.env.PUBLIC_URL + "/images/login/tele.svg"}/>
                    <div className={clsx(classes.betMargin1)}>
                        <Typography className={clsx(classes.specButtonFont, classes.greenLetter)}>Tableau de bord</Typography>
                    </div>
                </div>
                <Button className={clsx(classes.specButtonFont, classes.generalButtonStyle2, classes.specButtonWidth)}>
                    SE DÉCONNECTER
                </Button>
            </div>
        </Dialog>
      );
};

export {
    AfterLogin as default,
    AfterLogin,
};
