"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@mui/styles");
var useStyles = styles_1.makeStyles({
    card: {
        position: "relative",
        width: "350px",
        padding: "15px",
        paddingBottom: "30px",
        borderRadius: "3px",
        boxShadow: "var(--small-box-shadow)",
        margin: "30px"
    },
    title: {},
    count: {
        textAlign: "right",
        fontWeight: "bold !important",
        fontFamily: "Roboto !important",
        fontSize: "30px !important"
    },
    loading: {
        position: "absolute !important",
        width: "100%",
        bottom: 0,
        left: 0
    }
});
exports.useStyles = useStyles;
