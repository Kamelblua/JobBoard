"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@mui/styles");
var useStyles = styles_1.makeStyles({
    container: {
        display: "flex"
    },
    leftContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "30%"
    },
    rightContainer: {
        width: "70%"
    },
    logo: {
        width: "125px !important",
        height: "125px !important",
        fontSize: "35px !important",
        marginBottom: "15px"
    },
    form: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap"
    },
    selectContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "30px 0px"
    },
    select: {
        minWidth: "200px",
        margin: "15px"
    },
    input: {
        margin: "15px !important"
    },
    inputThird: {
        width: "calc(33% - 30px)"
    },
    inputHalf: {
        width: "calc(50% - 30px)"
    },
    inputFull: {
        width: "calc(100% - 30px)"
    },
    submitButton: {
        margin: "15px auto !important"
    }
});
exports.useStyles = useStyles;
