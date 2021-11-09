import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		padding: "50px 0px",
		background: "#F1F1F1",
	},
	loadingResultContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 99,
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		background: "rgba(255, 255, 255, .5)",
	},
	resultInfo: {
		padding: "50px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	resultCount: {
		fontSize: "25px",
	},
	resultCountNumber: {
		color: "var(--main-green)",
		fontSize: "50px",
		fontFamily: "Roboto Bold",
		marginRight: "5px",
	},
	displayButton: {
		background: "white",
		boxShadow: "var(--small-box-shadow)",
		margin: "0px 5px",
		padding: "10px",
		width: "50px",
		height: "50px",
		borderColor: "transparent",

		"&:hover": {
			cursor: "pointer",
		},

		"&:active": {
			border: "solid 2px var(--main-green)",
		},
	},
	activeButton: {
		border: "solid 2px var(--main-green)",
	},
	resultContainer: {
		marginTop: "50px",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
	},
});

export { useStyles };
