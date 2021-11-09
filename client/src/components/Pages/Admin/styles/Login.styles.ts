import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		padding: "50px",
		height: "100vh",
	},
	logo: {
		marginBottom: "50px",
	},
	flexContainer: {
		marginTop: "50px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	formContainer: {
		width: "500px",
	},
	title: {
		fontFamily: "Roboto Light",
		marginBottom: "50px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	error: {
		color: "red",
	},
	submitContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	submitButton: {
		width: "100%",
		margin: "15px 0px",
		color: "var(--main-green)",
		borderColor: "var(--main-green)",

		"&:hover": {
			background: "var(--main-green-hover-opacity)",
			borderColor: "var(--main-green)",
		},
	},
	image: {
		width: "40%",
	},
});

export { useStyles };