import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		width: "350px",
		background: "var(--white)",
		margin: "15px",
		padding: "10px",
		height: "max-content",
	},
	header: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	logo: {
		width: 50,
		height: 50,
	},
	title: {
		flex: "1 1 auto",
		textAlign: "center",
	},
	actions: {
		margin: "30px 0px",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	applyButton: {
		color: "var(--light)",
		background: "var(--main-green) !important",

		"&:hover": {
			background: "var(--main-green-hover)",
		},
	},
	companyButton: {},
	infos: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	chip: {
		margin: "5px",
		width: "max-content",
	},
	readMore: {
		boxShadow: "none !important",
		marginTop: "30px",

		"&::before": {
			display: "none",
		},
	},
});

export { useStyles };
