import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	form: {
		display: "flex",
		alignItems: "flex-start",
		flexWrap: "wrap",
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
	submitContainer: {
		width: "100%",
	},
	submitButton: {
		margin: "15px 10px !important",
	},
});

export { useStyles };
