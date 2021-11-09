"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@mui/styles");
var useStyles = styles_1.makeStyles({
    chip: {
        margin: "2px!important"
    },
    bgHeader: {
        backgroundColor: "var(--main-gray-header-table)",
        boxShadow: "inset 0px 0px 5px rgba(0, 0, 0, 0.25)"
    },
    icon: {
        fontSize: "35px",
        margin: "0px 10px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    actionCell: {
        minWidth: "150px !important",
        width: "max-content !important"
    },
    action: {
        margin: "0px 5px",
        fontSize: "20px",
        "&:hover": {
            cursor: "pointer"
        }
    }
});
exports.useStyles = useStyles;
