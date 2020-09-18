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
    specButtonWidth: {
        width: '243px',
    },
    iconButton: {
        float: 'left',
        padding: '9px 0 9px 13px',
    },
    
    iconButton1: {
        float: 'left',
        padding: '6px 0 6px 9px',
    },
    generalButtonStyle2: {
        background: 'white',
        border: '2px solid #E5E5E5',
        boxSizing: 'border-box',
        borderRadius: '36px',
        marginBottom: '20px',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        width: '350px',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    buttonFont: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '15px',
        marginLeft: '58px',
        marginTop: '13px',
        textAlign: 'left'
    },
    containButton: {
        width: '100%'
    }
}));
export interface DialogProps {
    open: boolean;
    selectedValue: number;
    onClose: (value: number) => void;
}
const PrepareLogin: React.FC<DialogProps> = (props:DialogProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
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
            <List className={clsx(classes.flexContainer)}>
                {
                buttonsTitle.map((title, index) => (
                    <Button className={clsx(classes.specButtonFont, classes.generalButtonStyle2, classes.specButtonWidth)}>
                        <div className={clsx(classes.containButton)}>
                            <img src={process.env.PUBLIC_URL + buttonsImage[index]} className={index === 2? (clsx(classes.iconButton)) : (clsx(classes.iconButton1))}/>
                            <Typography className={clsx(classes.buttonFont)}>{title}</Typography>
                        </div>
                    </Button>
                ))
                }
            </List>
        </Dialog>
      );
};

export {
    PrepareLogin as default,
    PrepareLogin,
};
