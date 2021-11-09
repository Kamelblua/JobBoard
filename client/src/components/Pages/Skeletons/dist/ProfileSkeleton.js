"use strict";
exports.__esModule = true;
exports.ProfileSkeleton = void 0;
// Components
var material_1 = require("@mui/material");
// Hooks
var ProfileSkeleton_styles_1 = require("./styles/ProfileSkeleton.styles");
var ProfileSkeleton = function () {
    var styles = ProfileSkeleton_styles_1.useStyles();
    return (React.createElement(material_1.Box, { className: styles.container },
        React.createElement(material_1.Skeleton, { className: styles.skeletonItem + " " + styles.full, animation: 'wave' }),
        React.createElement(material_1.Skeleton, { className: styles.skeletonItem + " " + styles.half, animation: 'wave' }),
        React.createElement(material_1.Skeleton, { className: styles.skeletonItem + " " + styles.half, animation: 'wave' })));
};
exports.ProfileSkeleton = ProfileSkeleton;
