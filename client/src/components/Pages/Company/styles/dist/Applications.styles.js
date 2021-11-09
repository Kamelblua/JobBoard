"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@mui/styles");
var useStyles = styles_1.makeStyles({
    container: {
        padding: "50px"
    },
    applicationContainer: {
        padding: "15px"
    },
    item: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        border: "solid 1px var(--black-hover)",
        borderRadius: "3px",
        padding: "15px",
        margin: "15px 0px"
    },
    resumeLink: {
        margin: "15px 0px"
    },
    readMore: {
        marginBottom: "15px !important",
        "&::before": {
            display: "none"
        }
    }
});
exports.useStyles = useStyles;
