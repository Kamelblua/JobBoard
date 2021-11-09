"use strict";
exports.__esModule = true;
exports.Routes = void 0;
// React
var react_1 = require("react");
// Hooks
var react_router_dom_1 = require("react-router-dom");
// Templates
var RenderPage_1 = require("components/Modules/RenderPage");
var RenderPageAdmin_1 = require("components/Modules/Admin/RenderPageAdmin");
// Public
var Home_1 = require("components/Pages/Home");
var Jobs_1 = require("components/Pages/Jobs");
var NotFound_1 = require("components/Pages/NotFound");
// Candidate
var Login_1 = require("components/Pages/Candidate/Login");
var Register_1 = require("components/Pages/Candidate/Register");
var Profile_1 = require("components/Pages/Candidate/Profile");
var Applications_1 = require("components/Pages/Candidate/Applications");
// Company
var Login_2 = require("components/Pages/Company/Login");
var Register_2 = require("components/Pages/Company/Register");
var Profile_2 = require("components/Pages/Company/Profile");
var Index_1 = require("components/Pages/Company/Index");
var Applications_2 = require("components/Pages/Company/Applications");
var Edit_1 = require("components/Pages/Company/Edit");
var AdvertisementForm_1 = require("components/Pages/Company/AdvertisementForm");
// Admin
var Login_3 = require("components/Pages/Admin/Login");
var Dashboard_1 = require("./components/Pages/Admin/Dashboard");
var Advertisements_1 = require("./components/Pages/Admin/Advertisements");
var Candidates_1 = require("./components/Pages/Admin/Candidates");
var Candidate_1 = require("components/Pages/Admin/Edit/Candidate");
// Protected routes
var UnauthenticatedRoute_1 = require("components/Routes/UnauthenticatedRoute");
var CandidateRoute_1 = require("components/Routes/CandidateRoute");
var CompanyRoute_1 = require("components/Routes/CompanyRoute");
var AdminRoute_1 = require("components/Routes/AdminRoute");
var Companies_1 = require("components/Pages/Admin/Companies");
var Admins_1 = require("components/Pages/Admin/Admins");
var auth_1 = require("api/auth");
var api_1 = require("api/api");
// import {AdvertisementForm } from "components/Pages/Company/AdvertisementForm";
// import {Applications as CompanyApplications } from "components/Pages/Company/Applications";
// import { Users as AdminUsers } from "components/Pages/Admin/Users";
var Routes = function () {
    var logout = function () {
        api_1.api.candidate.logout()["finally"](function () {
            setTimeout(function () {
                document.location.href = "/";
            }, 750);
        });
    };
    react_1.useEffect(function () {
        !auth_1.auth.isTokenValid() && logout();
    }, []);
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(CompanyRoute_1.CompanyRoute, { exact: true, path: '/my/company' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Profile_2.Profile, null) })),
            React.createElement(CompanyRoute_1.CompanyRoute, { exact: true, path: '/my/company/edit' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Edit_1.Edit, null) })),
            React.createElement(CompanyRoute_1.CompanyRoute, { exact: true, path: '/company/post' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(AdvertisementForm_1.AdvertisementForm, null) })),
            React.createElement(CompanyRoute_1.CompanyRoute, { exact: true, path: '/company/offers' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Applications_2.Applications, null) })),
            React.createElement(react_router_dom_1.Route, { exact: true, path: '/' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Home_1.Home, null) })),
            React.createElement(react_router_dom_1.Route, { exact: true, path: '/jobs' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Jobs_1.Jobs, null) })),
            React.createElement(react_router_dom_1.Route, { exact: true, path: '/company/:id' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Index_1.Index, null) })),
            React.createElement(CandidateRoute_1.CandidateRoute, { exact: true, path: '/profile' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Profile_1.Profile, null) })),
            React.createElement(CandidateRoute_1.CandidateRoute, { exact: true, path: '/applications' },
                React.createElement(RenderPage_1.RenderPage, { page: React.createElement(Applications_1.Applications, null) })),
            React.createElement(AdminRoute_1.AdminRoute, { exact: true, path: '/admin/dashboard' },
                React.createElement(RenderPageAdmin_1.RenderPageAdmin, { page: React.createElement(Dashboard_1.Dashboard, null) })),
            React.createElement(AdminRoute_1.AdminRoute, { exact: true, path: "/admin/advertisements" },
                React.createElement(RenderPageAdmin_1.RenderPageAdmin, { page: React.createElement(Advertisements_1.Advertisements, null) })),
            React.createElement(AdminRoute_1.AdminRoute, { exact: true, path: '/admin/candidates' },
                React.createElement(RenderPageAdmin_1.RenderPageAdmin, { page: React.createElement(Candidates_1.Candidates, null) })),
            React.createElement(AdminRoute_1.AdminRoute, { exact: true, path: '/admin/companies' },
                React.createElement(RenderPageAdmin_1.RenderPageAdmin, { page: React.createElement(Companies_1.Companies, null) })),
            React.createElement(AdminRoute_1.AdminRoute, { exact: true, path: '/admin/admins' },
                React.createElement(RenderPageAdmin_1.RenderPageAdmin, { page: React.createElement(Admins_1.Admins, null) })),
            React.createElement(AdminRoute_1.AdminRoute, { exact: true, path: '/admin/candidate/:id/edit' },
                React.createElement(RenderPageAdmin_1.RenderPageAdmin, { page: React.createElement(Candidate_1.Candidate, null) })),
            React.createElement(UnauthenticatedRoute_1.UnauthenticatedRoute, { exact: true, path: '/login/admin' },
                React.createElement(RenderPage_1.RenderPage, { footer: false, navbar: false, page: React.createElement(Login_3.Login, null) })),
            React.createElement(UnauthenticatedRoute_1.UnauthenticatedRoute, { exact: true, path: '/login/company' },
                React.createElement(RenderPage_1.RenderPage, { footer: false, navbar: false, page: React.createElement(Login_2.Login, null) })),
            React.createElement(UnauthenticatedRoute_1.UnauthenticatedRoute, { exact: true, path: '/login/candidate' },
                React.createElement(RenderPage_1.RenderPage, { footer: false, navbar: false, page: React.createElement(Login_1.Login, null) })),
            React.createElement(UnauthenticatedRoute_1.UnauthenticatedRoute, { exact: true, path: '/register/candidate' },
                React.createElement(RenderPage_1.RenderPage, { footer: false, navbar: false, page: React.createElement(Register_1.Register, null) })),
            React.createElement(UnauthenticatedRoute_1.UnauthenticatedRoute, { exact: true, path: '/register/company' },
                React.createElement(RenderPage_1.RenderPage, { footer: false, navbar: false, page: React.createElement(Register_2.Register, null) })),
            React.createElement(react_router_dom_1.Route, { path: '*' },
                React.createElement(NotFound_1.NotFound, null)))));
};
exports.Routes = Routes;
