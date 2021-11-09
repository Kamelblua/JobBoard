// React
import { FC, useEffect } from "react";

// Hooks
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Templates
import { RenderPage } from "components/Modules/RenderPage";
import { RenderPageAdmin } from "components/Modules/Admin/RenderPageAdmin";

// Public
import { Home } from "components/Pages/Home";
import { Jobs } from "components/Pages/Jobs";
import { NotFound } from "components/Pages/NotFound";

// Candidate
import { Login } from "components/Pages/Candidate/Login";
import { Register } from "components/Pages/Candidate/Register";
import { Profile } from "components/Pages/Candidate/Profile";
import { Applications } from "components/Pages/Candidate/Applications";

// Company
import { Login as CompanyLogin } from "components/Pages/Company/Login";
import { Register as CompanyRegister } from "components/Pages/Company/Register";
import { Profile as CompanyProfile } from "components/Pages/Company/Profile";
import { Index } from "components/Pages/Company/Index";
import { Applications as CompanyApplications } from "components/Pages/Company/Applications";
import { Edit as CompanyEdit } from "components/Pages/Company/Edit";
import { AdvertisementForm } from "components/Pages/Company/AdvertisementForm";

// Admin
import { Login as AdminLogin } from "components/Pages/Admin/Login";
import { Dashboard } from "./components/Pages/Admin/Dashboard";
import { Advertisements } from "./components/Pages/Admin/Advertisements";
import { Candidates } from "./components/Pages/Admin/Candidates";
import { Candidate as AdminCandidateEdit } from "components/Pages/Admin/Edit/Candidate";

// Protected routes
import { UnauthenticatedRoute } from "components/Routes/UnauthenticatedRoute";
import { CandidateRoute } from "components/Routes/CandidateRoute";
import { CompanyRoute } from "components/Routes/CompanyRoute";
import { AdminRoute } from "components/Routes/AdminRoute";
import { Companies } from "components/Pages/Admin/Companies";
import { Admins } from "components/Pages/Admin/Admins";
import { auth } from "api/auth";
import { api } from "api/api";

// import {AdvertisementForm } from "components/Pages/Company/AdvertisementForm";
// import {Applications as CompanyApplications } from "components/Pages/Company/Applications";
// import { Users as AdminUsers } from "components/Pages/Admin/Users";

const Routes: FC<{}> = () => {
	const logout = () => {
		api.candidate.logout().finally(() => {
			setTimeout(() => {
				document.location.href = "/";
			}, 750);
		});
	};

	useEffect(() => {
		!auth.isTokenValid() && logout();
	}, []);

	return (
		<Router>
			<Switch>
				<CompanyRoute exact path='/my/company'>
					<RenderPage page={<CompanyProfile />} />
				</CompanyRoute>
				<CompanyRoute exact path='/my/company/edit'>
					<RenderPage page={<CompanyEdit />} />
				</CompanyRoute>
				<CompanyRoute exact path='/company/post'>
					<RenderPage page={<AdvertisementForm />} />
				</CompanyRoute>
				<CompanyRoute exact path='/company/offers'>
					<RenderPage page={<CompanyApplications />} />
				</CompanyRoute>

				<Route exact path='/'>
					<RenderPage page={<Home />} />
				</Route>
				<Route exact path='/jobs'>
					<RenderPage page={<Jobs />} />
				</Route>
				<Route exact path='/company/:id'>
					<RenderPage page={<Index />} />
				</Route>

				<CandidateRoute exact path='/profile'>
					<RenderPage page={<Profile />} />
				</CandidateRoute>
				<CandidateRoute exact path='/applications'>
					<RenderPage page={<Applications />} />
				</CandidateRoute>

				<AdminRoute exact path='/admin/dashboard'>
					<RenderPageAdmin page={<Dashboard />} />
				</AdminRoute>
				<AdminRoute exact path={"/admin/advertisements"}>
					<RenderPageAdmin page={<Advertisements />} />
				</AdminRoute>
				<AdminRoute exact path='/admin/candidates'>
					<RenderPageAdmin page={<Candidates />} />
				</AdminRoute>
				<AdminRoute exact path='/admin/companies'>
					<RenderPageAdmin page={<Companies />} />
				</AdminRoute>
				<AdminRoute exact path='/admin/admins'>
					<RenderPageAdmin page={<Admins />} />
				</AdminRoute>
				<AdminRoute exact path='/admin/candidate/:id/edit'>
					<RenderPageAdmin page={<AdminCandidateEdit />} />
				</AdminRoute>

				<UnauthenticatedRoute exact path='/login/admin'>
					<RenderPage footer={false} navbar={false} page={<AdminLogin />} />
				</UnauthenticatedRoute>
				<UnauthenticatedRoute exact path='/login/company'>
					<RenderPage footer={false} navbar={false} page={<CompanyLogin />} />
				</UnauthenticatedRoute>
				<UnauthenticatedRoute exact path='/login/candidate'>
					<RenderPage footer={false} navbar={false} page={<Login />} />
				</UnauthenticatedRoute>
				<UnauthenticatedRoute exact path='/register/candidate'>
					<RenderPage footer={false} navbar={false} page={<Register />} />
				</UnauthenticatedRoute>
				<UnauthenticatedRoute exact path='/register/company'>
					<RenderPage footer={false} navbar={false} page={<CompanyRegister />} />
				</UnauthenticatedRoute>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export { Routes };
