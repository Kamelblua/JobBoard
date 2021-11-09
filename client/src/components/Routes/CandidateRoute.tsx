import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "api/auth";

interface CandidateRouteProps {
	children: JSX.Element | JSX.Element[];
	[x: string]: any;
}

const CandidateRoute: FC<CandidateRouteProps> = ({ children, ...rest }) => {
	return (
		(auth.isAuthenticated() && auth.isLoggedInAs("candidate") && <Route {...rest}>{children}</Route>) || (
			<Redirect to='/login/candidate' />
		)
	);
};

export { CandidateRoute };
