import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "api/auth";

interface CompanyRouteProps {
	children: JSX.Element | JSX.Element[];
	[x: string]: any;
}

const CompanyRoute: FC<CompanyRouteProps> = ({ children, ...rest }) => {
	return (
		(auth.isAuthenticated() && auth.isLoggedInAs("company") && <Route {...rest}>{children}</Route>) || (
			<Redirect to='/login/company' />
		)
	);
};

export { CompanyRoute };
