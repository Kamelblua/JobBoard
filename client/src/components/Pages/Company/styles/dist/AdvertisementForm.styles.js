"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@mui/styles");
var useStyles = styles_1.makeStyles({
    form: {
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap"
    },
    error: {
        color: "red"
    },
    input: {
        margin: "15px 10px !important"
    },
    inputFull: {
        width: "calc(100% - 20px)"
    },
    inputHalf: {
        width: "calc(50% - 20px)"
    },
    submitContainer: {
        width: "100%"
    },
    submitButton: {
        margin: "15px 10px !important"
    }
});
exports.useStyles = useStyles;
