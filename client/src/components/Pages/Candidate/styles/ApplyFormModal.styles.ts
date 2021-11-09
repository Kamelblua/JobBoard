import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	overlay: {
		position: "fixed",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100vh",
		overflow: "hidden",
		background: "rgba(0, 0, 0, 0.5)",
		zIndex: 999,
	},
	container: {
		position: "relative",
		padding: "30px",
		minWidth: "650px",
		maxWidth: "1100px",
		width: "75%",
		background: "var(--bg)",
		boxShadow: "var(--small-box-shadow)",
		zIndex: 9999,
		borderRadius: "3px",
		overflowY: "auto",
		maxHeight: "950px",
	},
	closed: {
		display: "none",
	},
	closeButton: {
		position: "absolute !important" as any,
		top: 5,
		right: 5,
		zIndex: 999999,
	},

	form: {
		paddingRight: "15px",
		paddingLeft: "0px",
		width: "100%",
	},
	error: {
		color: "red",
	},
	input: {
		margin: "15px 10px !important",
	},
	inputFull: {
		width: "calc(100% - 20px)",
	},
	inputHalf: {
		width: "calc(50% - 20px)",
	},
	filePreview: {
		width: "100%",
		height: "350px",
		padding: "15px",
	},
	uploadButton: {
		margin: "10px !important",
	},
	submitButton: {
		width: "100%",
	},
});

export { useStyles };
