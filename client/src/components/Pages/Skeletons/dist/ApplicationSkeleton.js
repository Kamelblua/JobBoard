"use strict";
exports.__esModule = true;
exports.ApplicationSkeleton = void 0;
var material_1 = require("@mui/material");
var ApplicationSkeleton_styles_1 = require("./styles/ApplicationSkeleton.styles");
var ApplicationSkeleton = function () {
    var styles = ApplicationSkeleton_styles_1.useStyles();
    var titleWidths = ["150px", "250px", "350px", "450px"];
    var submissionDateWidths = ["50px", "75px", "100px"];
    return (React.createElement(material_1.Box, { className: styles.container },
        React.createElement(material_1.Skeleton, { className: styles.skeletonItem, variant: 'rectangular', width: titleWidths[Math.floor(Math.random() * titleWidths.length)] }),
        React.createElement(material_1.Skeleton, { className: styles.skeletonItem, variant: 'rectangular', height: '50px', width: '225px' }),
        React.createElement(material_1.Skeleton, { className: styles.skeletonItem, variant: 'rectangular', height: '35px', width: '100%' }),
        React.createElement(material_1.Skeleton, { className: styles.skeletonItem, variant: 'rectangular', width: submissionDateWidths[Math.floor(Math.random() * submissionDateWidths.length)] })));
};
exports.ApplicationSkeleton = ApplicationSkeleton;
