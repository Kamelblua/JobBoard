"use strict";
exports.__esModule = true;
exports.Profile = void 0;
// React
var react_1 = require("react");
// Components
var material_1 = require("@mui/material");
var fa_1 = require("react-icons/fa");
var vsc_1 = require("react-icons/vsc");
var md_1 = require("react-icons/md");
var io_1 = require("react-icons/io");
var hi_1 = require("react-icons/hi");
var AdvertisementCard_1 = require("components/Modules/AdvertisementCard");
// Hooks
var Profile_styles_1 = require("./styles/Profile.styles");
var react_router_dom_1 = require("react-router-dom");
// Other
var api_1 = require("api/api");
var react_helmet_1 = require("react-helmet");
var Profile = function () {
    var _a;
    var styles = Profile_styles_1.useStyles();
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(null), company = _c[0], setCompany = _c[1];
    var displayPhone = function (phone) {
        var phoneSplit = phone.match(/.{2}/g);
        return phoneSplit === null || phoneSplit === void 0 ? void 0 : phoneSplit.join(".");
    };
    var displayAddress = function (company) {
        return company.address + ", " + company.city + ", " + company.country;
    };
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.company
            .profile()
            .then(function (res) {
            console.log(res);
            setCompany(res.data);
        })["catch"](function (err) {
            console.error(err);
        })["finally"](function () {
            setLoading(false);
        });
    }, []);
    return (React.createElement(material_1.Box, { component: 'main', className: styles.container },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | My company")),
        company && !loading && (React.createElement(material_1.Box, { className: styles.stack },
            React.createElement(react_router_dom_1.Link, { className: styles.editLink, to: '/my/company/edit' },
                React.createElement(material_1.IconButton, null,
                    React.createElement(hi_1.HiOutlinePencilAlt, { className: styles.editButton }))),
            React.createElement(material_1.Box, { component: 'section', className: styles.infos },
                React.createElement("img", { className: styles.logo, src: (_a = company === null || company === void 0 ? void 0 : company.logo) === null || _a === void 0 ? void 0 : _a.location, alt: (company === null || company === void 0 ? void 0 : company.name) + "'s logo" }),
                React.createElement(material_1.Typography, { className: styles.name, variant: 'h3' }, company.name),
                React.createElement(material_1.Typography, { className: styles.contact },
                    company.contact_email,
                    React.createElement("br", null),
                    displayPhone(company.contact_phone)),
                React.createElement(material_1.Box, { className: styles.links },
                    company.website_link && (React.createElement("a", { className: styles.link, target: '_blank', rel: 'noreferrer', href: company.website_link },
                        React.createElement(material_1.IconButton, { color: 'warning' },
                            React.createElement(vsc_1.VscGlobe, null)))),
                    company.facebook_link && (React.createElement("a", { className: styles.link, target: '_blank', rel: 'noreferrer', href: company.facebook_link },
                        React.createElement(material_1.IconButton, { className: styles.fbBtn },
                            React.createElement(fa_1.FaFacebookSquare, null)))),
                    company.twitter_link && (React.createElement("a", { className: styles.link, target: '_blank', rel: 'noreferrer', href: company.twitter_link },
                        React.createElement(material_1.IconButton, { className: styles.twBtn },
                            React.createElement(fa_1.FaTwitterSquare, null)))),
                    company.instagram_link && (React.createElement("a", { className: styles.link, target: '_blank', rel: 'noreferrer', href: company.instagram_link },
                        React.createElement(material_1.IconButton, { className: styles.itBtn },
                            React.createElement(fa_1.FaInstagramSquare, null)))),
                    company.linkedin_link && (React.createElement("a", { className: styles.link, target: '_blank', rel: 'noreferrer', href: company.linkedin_link },
                        React.createElement(material_1.IconButton, { className: styles.lkBtn },
                            React.createElement(fa_1.FaLinkedinIn, null)))),
                    company.youtube_link && (React.createElement("a", { className: styles.link, target: '_blank', rel: 'noreferrer', href: company.youtube_link },
                        React.createElement(material_1.IconButton, { className: styles.ytBtn },
                            React.createElement(fa_1.FaYoutubeSquare, null))))),
                React.createElement(material_1.Divider, { sx: { margin: "15px 0px", width: "100%", backgroundColor: "var(--black-hover)" } }),
                React.createElement(material_1.Typography, { variant: 'h5' }, "Additional informations"),
                React.createElement(material_1.Box, { className: styles.infoBox },
                    React.createElement(hi_1.HiIdentification, { className: styles.infoBoxIcon }),
                    React.createElement(material_1.Typography, { className: styles.infoBoxContent, variant: 'caption' },
                        React.createElement("strong", null, company.type.name))),
                React.createElement(material_1.Box, { className: styles.infoBox },
                    React.createElement(hi_1.HiTag, { className: styles.infoBoxIcon }),
                    React.createElement(material_1.Typography, { className: styles.infoBoxContent, variant: 'caption' },
                        React.createElement("strong", null, company.industry.name))),
                React.createElement(material_1.Box, { className: styles.infoBox },
                    React.createElement(io_1.IoIosPeople, { className: styles.infoBoxIcon }),
                    React.createElement(material_1.Typography, { className: styles.infoBoxContent, variant: 'caption' },
                        React.createElement("strong", null, company.employees_range))),
                React.createElement(material_1.Box, { className: styles.infoBox },
                    React.createElement(md_1.MdLocationOn, { className: styles.infoBoxIcon }),
                    React.createElement(material_1.Typography, { className: styles.infoBoxContent, variant: 'caption' }, displayAddress(company))),
                React.createElement(material_1.Divider, { sx: { margin: "15px 0px", width: "100%", backgroundColor: "var(--black-hover)" } })),
            React.createElement(material_1.Box, { component: 'section', className: styles.jobList + " " + (company.advertisements.length === 0 && styles.noOffers) },
                React.createElement(material_1.Typography, { className: styles.offersTitle, variant: 'h3' }, "Job offers"),
                company.advertisements.length === 0 ? (React.createElement(material_1.Typography, { className: styles.offersTitle, variant: 'h4' }, "No offers posted yet.")) : (React.createElement(react_1.Fragment, null, company.advertisements.map(function (a, k) { return (React.createElement(AdvertisementCard_1.AdvertisementCard, { advertisement: a, key: k })); }))))))));
};
exports.Profile = Profile;
