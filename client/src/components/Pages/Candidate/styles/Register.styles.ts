import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		padding: "50px",
		height: "100vh",
		background: "url('/assets/images/register-candidate.svg')",
		backgroundPosition: "center center",
	},
	logo: {
		marginBottom: "50px",
	},
	formContainer: {
		position: "relative",
		padding: "50px",
		minWidth: "750px",
		maxWidth: "1000px",
		margin: "0 auto",
		background: "hsla(0, 0%, 100%, .9)",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
		boxShadow: "var(--small-box-shadow)",
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	title: {
		fontFamily: "Roboto Light",
		marginBottom: "35px",
	},
	inputFull: {
		width: "100%",
	},
	inputHalf: {
		width: "calc(50% - 20px)",
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
		fontSize: "18px",

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
