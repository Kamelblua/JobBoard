import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "api/auth";

interface UnauthenticatedRouteProps {
	children: JSX.Element | JSX.Element[];
	[x: string]: any;
}

const UnauthenticatedRoute: FC<UnauthenticatedRouteProps> = ({ children, ...rest }) => {
	return (auth.isUnauthenticated() && <Route {...rest}>{children}</Route>) || <Redirect to='/' />;
};

export { UnauthenticatedRoute };
