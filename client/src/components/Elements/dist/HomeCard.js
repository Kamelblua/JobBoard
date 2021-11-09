"use strict";
exports.__esModule = true;
exports.HomeCard = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var HomeCard_styles_1 = require("./styles/HomeCard.styles");
var hi_1 = require("react-icons/hi");
var react_router_dom_1 = require("react-router-dom");
var HomeCard = function (_a) {
    var title = _a.title, content = _a.content, color = _a.color, hoverColor = _a.hoverColor, image = _a.image, link = _a.link;
    var styles = HomeCard_styles_1.useStyles({ color: color, hoverColor: hoverColor });
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement("img", { src: image, alt: 'home', className: styles.img }),
        React.createElement(system_1.Box, { className: styles.infoContainer },
            React.createElement(material_1.Typography, { variant: 'h5', className: styles.title }, title),
            React.createElement(material_1.Typography, { variant: 'subtitle1', className: styles.content }, content),
            React.createElement(react_router_dom_1.Link, { to: link.to, className: styles.linkButton },
                React.createElement(material_1.Button, { className: styles.button, variant: 'text', endIcon: React.createElement(hi_1.HiArrowRight, null) }, link.text)))));
};
exports.HomeCard = HomeCard;
