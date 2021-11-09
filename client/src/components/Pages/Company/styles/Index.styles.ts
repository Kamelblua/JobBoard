import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		display: "flex",
		alignItems: "flex-start",
	},
	stack: {
		width: "100%",
		display: "flex",

		"@media (max-width:600px)": { flexDirection: "column" },
	},
	infos: {
		textAlign: "center",
		padding: "15px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		minWidth: "350px",

		"@media (max-width:600px)": { width: "100%" },
	},
	name: {
		fontSize: "35px",
	},
	logo: {
		width: "125px",
		height: "125px",
	},
	contact: {
		opacity: 0.6,
		color: "var(--text)",
	},
	links: {
		marginTop: "15px",
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	link: {
		textAlign: "center",
		flex: "0 1 33%",
	},
	fbBtn: {
		color: "#1877f2 !important",

		"&:hover": {
			background: "rgba(24, 119, 242, .05) !important",
		},
	},
	twBtn: {
		color: "#1da1f2 !important",

		"&:hover": {
			background: "rgba(29, 161, 242, 0.05) !important",
		},
	},
	itBtn: {
		color: "#c13584 !important",

		"&:hover": {
			background: "rgba(193, 53, 132, 0.05) !important",
		},
	},
	lkBtn: {
		color: "#0077b5 !important",

		"&:hover": {
			background: "rgba(0, 119, 181, 0.05) !important",
		},
	},
	ytBtn: {
		color: "#ff0000 !important",

		"&:hover": {
			background: "rgba(255, 0, 0, 0.05) !important",
		},
	},

	jobList: {
		padding: "15px",
		flex: "1 1 auto",
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	offersTitle: {
		width: "100%",
		textAlign: "center",
	},
	noOffers: {
		height: "100%",
		fontStyle: "italic",
	},

	infoBox: {
		width: "100%",
		marginTop: "30px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	infoBoxIcon: {
		fontSize: "30px",
		color: "var(--main-purple)",
	},
	infoBoxContent: {
		width: "85%",
		paddingLeft: "15px",
		display: "inline-block",
	},
});

export { useStyles };
