"use strict";
exports.__esModule = true;
exports.Application = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var hi_1 = require("react-icons/hi");
var moment_1 = require("moment");
var Application_styles_1 = require("./styles/Application.styles");
var Application = function (_a) {
    var application = _a.application;
    var styles = Application_styles_1.useStyles();
    var _b = react_1.useState(false), expanded = _b[0], setExpanded = _b[1];
    var handleChange = function (event) {
        setExpanded(!expanded);
    };
    return (React.createElement(material_1.Box, { className: styles.item },
        React.createElement(material_1.Typography, { variant: 'h5' },
            "Application submitted for",
            " ",
            React.createElement(react_router_dom_1.Link, { to: "/offer/" + application.advertisement.id }, application.advertisement.title)),
        React.createElement("a", { href: application.resume.location, className: styles.resumeLink, target: '_blank', rel: 'noreferrer' },
            React.createElement(material_1.Button, { startIcon: React.createElement(hi_1.HiExternalLink, null), variant: 'contained' }, "See forwarded resume")),
        React.createElement(material_1.Accordion, { className: styles.readMore, expanded: expanded, onChange: handleChange },
            React.createElement(material_1.AccordionSummary, { expandIcon: React.createElement(hi_1.HiChevronDown, null), "aria-controls": "readmore" + application.id + "-content", id: "readmore" + application.id + "-header" },
                React.createElement(material_1.Typography, { variant: 'h6' }, "Read more")),
            React.createElement(material_1.AccordionDetails, null,
                React.createElement(material_1.Typography, { variant: 'body1', className: styles.readMoreContent }, application.more))),
        React.createElement(material_1.Typography, { variant: 'caption' },
            "Submitted ",
            moment_1["default"](application.created_at).fromNow())));
};
exports.Application = Application;
