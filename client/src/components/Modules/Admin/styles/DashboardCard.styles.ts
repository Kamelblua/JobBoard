import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	card: {
		position: "relative",
		width: "350px",
		padding: "15px",
		paddingBottom: "30px",
		borderRadius: "3px",
		boxShadow: "var(--small-box-shadow)",
		margin: "30px",
	},
	title: {},
	count: {
		textAlign: "right",
		fontWeight: "bold !important" as any,
		fontFamily: "Roboto !important",
		fontSize: "30px !important",
	},
	loading: {
		position: "absolute !important" as any,
		width: "100%",
		bottom: 0,
		left: 0,
	},
});

export { useStyles };
