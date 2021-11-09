"use strict";
exports.__esModule = true;
exports.Home = void 0;
var system_1 = require("@mui/system");
var HomeCard_1 = require("components/Elements/HomeCard");
var Home_style_1 = require("./styles/Home.style");
var material_1 = require("@mui/material");
var hi_1 = require("react-icons/hi");
var react_helmet_1 = require("react-helmet");
var Home = function () {
    var styles = Home_style_1.useStyles();
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Welcome to Job Board")),
        React.createElement(system_1.Box, { className: styles.startContainer },
            React.createElement(system_1.Box, { className: styles.title },
                "Welcome to ",
                React.createElement("br", null),
                "Job",
                React.createElement("span", { className: styles.titleSpecial }, "Board"),
                ".")),
        React.createElement(system_1.Box, { className: styles.section1 },
            React.createElement(material_1.Typography, { variant: 'h2', className: styles.section1Title },
                "You've got the ",
                React.createElement("br", null),
                " ",
                React.createElement("span", { className: styles.titleSpecial }, "#talent")),
            React.createElement(material_1.Typography, { variant: 'caption', className: styles.section1Text },
                "\u201COur mission is to help you unlock it. ",
                React.createElement("br", null),
                "How? By giving you all the keys you need to find your way in the ",
                React.createElement("br", null),
                "world and thrive when you get there.\u201D")),
        React.createElement(system_1.Box, { className: styles.middleSection },
            React.createElement("img", { src: '/assets/images/home-candidate-1.jpg', alt: 'candidate 1', className: styles.img }),
            React.createElement(system_1.Box, { className: styles.middleSectionHalf },
                React.createElement(hi_1.HiOutlineMap, { fontSize: 50, color: 'var(--main-green)' }),
                React.createElement(material_1.Typography, { variant: 'h3', className: styles.middleSectionTitle }, "Find your path"),
                React.createElement(material_1.Typography, { variant: 'subtitle1', className: styles.middleSectionText },
                    "The careers and companies we end up in are all down to the choices we make. Pathways, opportunities, values and future goals... nothing can be left to chance. ",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "We'll tell you everything you need to know so you can thrive in your chosen career path."))),
        React.createElement(system_1.Box, { className: styles.middleSection },
            React.createElement(system_1.Box, { className: styles.middleSectionHalf },
                React.createElement(hi_1.HiCursorClick, { fontSize: 50, color: 'var(--main-green)' }),
                React.createElement(material_1.Typography, { variant: 'h3', className: styles.middleSectionTitle }, "Jump in"),
                React.createElement(material_1.Typography, { variant: 'subtitle1', className: styles.middleSectionText }, "Finding the right opportunities can be difficult. With us, all our internships and job ads are adapted to students and recent graduates..")),
            React.createElement("img", { src: '/assets/images/home-candidate-2.jpg', alt: 'candidate 2', className: styles.img })),
        React.createElement(system_1.Box, { className: styles.lastSection },
            React.createElement(HomeCard_1.HomeCard, { title: 'Candidate ?', content: 'Find your perfect job now.', link: { to: "/jobs", text: "Find a job" }, color: 'var(--main-green)', hoverColor: 'var(--main-green-hover-opacity)', image: '/assets/images/home-card-1.jpg' }),
            React.createElement(HomeCard_1.HomeCard, { title: 'Recruiter ?', content: 'Post your job offers here.', link: { to: "/company/post", text: "Post an offer" }, color: 'var(--main-purple)', hoverColor: 'var(--main-purple-hover-opacity)', image: '/assets/images/home-card-2.jpg' }))));
};
exports.Home = Home;
