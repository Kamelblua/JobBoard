"use strict";
exports.__esModule = true;
exports.Advertisement = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var Advertisement_styles_1 = require("./styles/Advertisement.styles");
var moment_1 = require("moment");
var Advertisement = function (_a) {
    var _b;
    var advertisement = _a.advertisement;
    var styles = Advertisement_styles_1.useStyles();
    var displayPositions = function (positions) {
        var output = "";
        positions.forEach(function (val) {
            output += val.name + ", ";
        });
        return output.replace(/,\s$/, "");
    };
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(system_1.Box, { className: styles.logoContainer },
            React.createElement("img", { className: styles.logo, src: (_b = advertisement.company.logo) === null || _b === void 0 ? void 0 : _b.location, alt: advertisement.company.name + "'s logo" })),
        React.createElement(system_1.Box, { className: styles.infoContainer },
            React.createElement(material_1.Typography, { variant: 'h5' }, advertisement.title),
            React.createElement(material_1.Typography, { variant: 'body1', className: styles.companyName }, advertisement.company.name),
            React.createElement(material_1.Stack, { direction: 'row', divider: React.createElement(material_1.Divider, { orientation: 'vertical', flexItem: true }), spacing: 1 },
                React.createElement(material_1.Typography, { variant: 'caption' }, displayPositions(advertisement.positions)),
                React.createElement(material_1.Typography, { variant: 'caption' }, advertisement.city),
                React.createElement(material_1.Typography, { variant: 'caption' },
                    "Published ",
                    moment_1["default"](advertisement.created_at).fromNow())))));
};
exports.Advertisement = Advertisement;
