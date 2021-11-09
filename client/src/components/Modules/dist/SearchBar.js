"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SearchBar = void 0;
var react_1 = require("react");
var system_1 = require("@mui/system");
var material_1 = require("@mui/material");
var SearchBar_styles_1 = require("./styles/SearchBar.styles");
var hi_1 = require("react-icons/hi");
var CustomSelect_1 = require("components/Elements/CustomSelect");
var api_1 = require("api/api");
var SearchBar = function (_a) {
    var search = _a.search, setSearch = _a.setSearch;
    var styles = SearchBar_styles_1.useStyles();
    var _b = react_1.useState(""), searchTerm = _b[0], setSearchTerm = _b[1];
    var _c = react_1.useState([]), selectedPositionIds = _c[0], setSelectedPositionIds = _c[1];
    var _d = react_1.useState([]), selectedIndustryIds = _d[0], setSelectedIndustryIds = _d[1];
    var _e = react_1.useState([]), selectedLanguageIds = _e[0], setSelectedLanguageIds = _e[1];
    var _f = react_1.useState([]), positions = _f[0], setPositions = _f[1];
    var _g = react_1.useState([]), categories = _g[0], setCategories = _g[1];
    var _h = react_1.useState([]), languages = _h[0], setLanguages = _h[1];
    react_1.useEffect(function () {
        api_1.api.shared.positions().then(function (res) {
            setPositions(res.data.items);
        });
        api_1.api.shared.industries().then(function (res) {
            setCategories(res.data.items);
        });
        api_1.api.shared.languages().then(function (res) {
            setLanguages(res.data.items);
        });
    }, []);
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(system_1.Box, { className: styles.searchBarOptions },
            React.createElement(material_1.FormControl, { className: styles.search },
                React.createElement(material_1.InputLabel, { htmlFor: 'standard-adornment-password' }, "Search"),
                React.createElement(material_1.Input, { id: 'standard-adornment-password', type: 'text', value: searchTerm, onChange: function (e) {
                        setSearchTerm(e.target.value);
                    }, startAdornment: React.createElement(material_1.InputAdornment, { position: 'start' },
                        React.createElement(hi_1.HiSearch, null)) })),
            React.createElement(CustomSelect_1.CustomSelect, { label: 'Position', id: 'position', items: positions, callback: setSelectedPositionIds }),
            React.createElement(CustomSelect_1.CustomSelect, { label: 'Category', id: 'category', items: categories, callback: setSelectedIndustryIds }),
            React.createElement(CustomSelect_1.CustomSelect, { label: 'Language', id: 'language', items: languages, callback: setSelectedLanguageIds }),
            React.createElement(material_1.FormControl, null,
                React.createElement(material_1.InputLabel, { id: 'demo-simple-select-helper-label' }, "Limit"),
                React.createElement(material_1.Select, { labelId: 'demo-simple-select-helper-label', id: 'demo-simple-select-helper', value: search.limit, label: 'Limit', onChange: function (e) {
                        setSearch(function (prevState) { return (__assign(__assign({}, prevState), { limit: e.target.value })); });
                    } },
                    React.createElement(material_1.MenuItem, { value: 10 }, "10"),
                    React.createElement(material_1.MenuItem, { value: 25 }, "25"),
                    React.createElement(material_1.MenuItem, { value: 50 }, "50"),
                    React.createElement(material_1.MenuItem, { value: 100 }, "100")))),
        React.createElement(material_1.Button, { onClick: function () {
                setSearch(function (prevState) { return (__assign(__assign({}, prevState), { search: searchTerm, position_ids: selectedPositionIds, industry_ids: selectedIndustryIds, language_ids: selectedLanguageIds })); });
            }, variant: 'text', className: styles.searchButton }, "Search")));
};
exports.SearchBar = SearchBar;
