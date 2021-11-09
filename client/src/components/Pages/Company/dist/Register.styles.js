"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@mui/styles");
var useStyles = styles_1.makeStyles({
    container: {
        padding: "50px",
        height: "100vh"
    },
    logo: {
        marginBottom: "50px"
    },
    formContainer: {
        minWidth: "500px",
        maxWidth: "950px"
    },
    title: {
        fontFamily: "Roboto Light",
        marginBottom: "50px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    error: {
        color: "red"
    },
    inputFull: {
        width: "calc(100% - 20px)"
    },
    inputHalf: {
        width: "calc(50% - 20px)"
    },
    inputThird: {
        width: "calc(33.333333333% - 20px)"
    },
    submitContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    submitButton: {
        width: "100%",
        margin: "15px 0px",
        color: "var(--main-green)",
        borderColor: "var(--main-green)",
        "&:hover": {
            background: "var(--main-green-hover-opacity)",
            borderColor: "var(--main-green)"
        }
    },
    image: {
        width: "40%"
    }
});
exports.useStyles = useStyles;
