"use strict";
exports.__esModule = true;
exports.api = void 0;
var axios_1 = require("axios");
var auth_1 = require("api/auth");
var advertisements_requests_1 = require("api/modules/advertisements.requests");
var shared_requests_1 = require("api/modules/shared.requests");
var candidate_requests_1 = require("api/modules/candidate.requests");
var admin_requests_1 = require("api/modules/admin.requests");
var company_requests_1 = require("api/modules/company.requests");
var Api = /** @class */ (function () {
    function Api() {
        this.url = auth_1.auth.base_url;
        this.instance = axios_1["default"].create({
            baseURL: this.url,
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        });
        this.advertisement = new advertisements_requests_1.AdvertisementRequest(this.instance);
        this.shared = new shared_requests_1.SharedRequest(this.instance);
        this.candidate = new candidate_requests_1.CandidateRequest(this.instance);
        this.company = new company_requests_1.CompanyRequest(this.instance);
        this.admin = new admin_requests_1.AdminRequest(this.instance);
    }
    return Api;
}());
var api = new Api();
exports.api = api;
