"use strict";
exports.__esModule = true;
exports.Jobs = void 0;
var react_1 = require("react");
var system_1 = require("@mui/system");
var SearchBar_1 = require("components/Modules/SearchBar");
var Jobs_styles_1 = require("./styles/Jobs.styles");
var material_1 = require("@mui/material");
var Advertisement_1 = require("components/Modules/Advertisement");
var AdvertisementCard_1 = require("components/Modules/AdvertisementCard");
var api_1 = require("api/api");
var Paginate_1 = require("components/Elements/Paginate");
var react_helmet_1 = require("react-helmet");
var Jobs = function () {
    var styles = Jobs_styles_1.useStyles();
    var _a = react_1.useState([]), advertisements = _a[0], setAdvertisements = _a[1];
    var _b = react_1.useState({
        page: 1,
        limit: 25,
        search: "",
        language_ids: [],
        position_ids: [],
        industry_ids: []
    }), search = _b[0], setSearch = _b[1];
    var _c = react_1.useState(null), result = _c[0], setResult = _c[1];
    var _d = react_1.useState(true), displayGrid = _d[0], setDisplayGrid = _d[1];
    var _e = react_1.useState(true), loading = _e[0], setLoading = _e[1];
    var switchDisplay = function (displayType) {
        if (displayType === "grid") {
            setDisplayGrid(true);
            return;
        }
        setDisplayGrid(false);
    };
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.advertisement
            .search(search)
            .then(function (res) {
            setAdvertisements(res.data.items);
            setResult(res.data);
        })["catch"](function (err) {
            console.error(err);
        })["finally"](function () {
            setLoading(false);
        });
    }, [search]);
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Browse jobs")),
        React.createElement(SearchBar_1.SearchBar, { search: search, setSearch: setSearch }),
        result && (React.createElement(system_1.Box, null,
            React.createElement(system_1.Box, { className: styles.resultInfo },
                React.createElement(material_1.Typography, { variant: 'subtitle1', className: styles.resultCount },
                    React.createElement("span", { className: styles.resultCountNumber }, result === null || result === void 0 ? void 0 : result.total),
                    " job(s) found"),
                React.createElement(system_1.Box, null,
                    React.createElement("img", { src: '/assets/images/search_view_grid.svg', alt: 'grid_icon', onClick: function () {
                            switchDisplay("grid");
                        }, className: styles.displayButton + " " + (displayGrid ? styles.activeButton : "") }),
                    React.createElement("img", { src: '/assets/images/search_view_list.svg', alt: 'list_icon', onClick: function () {
                            switchDisplay("list");
                        }, className: styles.displayButton + " " + (!displayGrid ? styles.activeButton : "") }))))),
        result && React.createElement(Paginate_1.Paginate, { search: search, setSearch: setSearch, total: result.total }),
        React.createElement(system_1.Box, { className: styles.resultContainer },
            loading && (React.createElement(system_1.Box, { className: styles.loadingResultContainer },
                React.createElement(material_1.CircularProgress, { size: 50 }))),
            advertisements.map(function (a, k) {
                return displayGrid ? React.createElement(AdvertisementCard_1.AdvertisementCard, { key: k, advertisement: a }) : React.createElement(Advertisement_1.Advertisement, { key: k, advertisement: a });
            }))));
};
exports.Jobs = Jobs;
