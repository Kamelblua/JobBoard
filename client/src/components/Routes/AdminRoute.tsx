import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "api/auth";

interface AdminRouteProps {
	children: JSX.Element | JSX.Element[];
	[x: string]: any;
}

const AdminRoute: FC<AdminRouteProps> = ({ children, ...rest }) => {
	return (
		(auth.isAuthenticated() && auth.isLoggedInAs("admin") && <Route {...rest}>{children}</Route>) || (
			<Redirect to='/login/admin' />
		)
	);
};

export { AdminRoute };
