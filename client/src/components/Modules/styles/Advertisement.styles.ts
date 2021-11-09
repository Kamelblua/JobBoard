import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "15px 50px",
		height: "150px",
		boxShadow: "var(--small-box-shadow)",
		background: "var(--white)",
		borderRadius: "3px",
		flex: "1 1 100%",

		"&:hover": {
			cursor: "pointer",
		},
	},
	logoContainer: {
		minWidth: "250px",
		maxWidth: "400px",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: "50%",
		height: "50%",
		objectFit: "contain",
	},
	infoContainer: {
		flex: "1 1 auto",
		padding: "10px 25px",
	},
	companyName: {
		margin: "10px 0px",
		opacity: 0.6,
	},
});

export { useStyles };
