"use strict";
exports.__esModule = true;
exports.NotFound = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var NotFound_styles_1 = require("./styles/NotFound.styles");
var hi_1 = require("react-icons/hi");
var react_router_1 = require("react-router");
var react_helmet_1 = require("react-helmet");
var NotFound = function () {
    var styles = NotFound_styles_1.useStyles();
    var history = react_router_1.useHistory();
    var goBack = function () {
        history.goBack();
    };
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Not found")),
        React.createElement(system_1.Box, { className: styles.info },
            React.createElement(material_1.Button, { onClick: goBack, className: styles.backButton, variant: 'outlined', startIcon: React.createElement(hi_1.HiArrowLeft, null) }, "Go back"))));
};
exports.NotFound = NotFound;
