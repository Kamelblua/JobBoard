import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { api } from "./api";

class Auth {
	base_url: string = process.env.REACT_APP_SERVER_URL + "/api";
	token: string | undefined = Cookies.get("token");

	isTokenValid(): boolean {
		if (this.isUnauthenticated()) {
			return true;
		}

		const token = this.decodedToken();
		const nowInMilliseconds = Date.now();

		if (nowInMilliseconds > token.exp * 1000) {
			return false;
		}

		return true;
	}

	isAuthenticated(): boolean {
		return typeof this.token !== "undefined";
	}

	isUnauthenticated(): boolean {
		return typeof this.token === "undefined";
	}

	decodedToken(): any {
		if (typeof this.token === "undefined") {
			Cookies.remove("token");
			return false;
		}

		const decoded = jwt_decode(this.token);

		return decoded;
	}

	getAuthenticatedId(): number {
		return this.decodedToken()["uid"];
	}

	getEmail(): string {
		return this.decodedToken()["email"];
	}

	isLoggedInAs(logged_as?: string) {
		if (!logged_as) {
			return this.decodedToken().logged_in_as;
		}
		if (this.isUnauthenticated()) {
			return false;
		}

		if (this.decodedToken().logged_in_as !== logged_as) return false;
		return true;
	}
}

const auth = new Auth();

export { auth };
