import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		width: "100%",
		background: "url('/assets/images/not-found.svg')",
		backgroundPosition: "center center",
	},
	info: {
		padding: "15px",
		background: "var(--black-hover)",
		borderRadius: "5px",
		transform: "translate(350px, 50px)",
	},
	backButton: {
		fontSize: "25px !important",
	},
});

export { useStyles };
