import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		background: "var(--black)",
		padding: "30px 150px",
		color: "var(--light) !important",
		width: "100%",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	social: {
		color: "var(--light)",
		fontSize: "30px",
		margin: "0px 10px",
	},
	divider: {
		background: "var(--main-green)",
		height: "2px",
	},

	stack: {
		margin: "50px 0px",
		color: "var(--light)",
	},
	stackSection: {
		display: "flex",
		flexDirection: "column",
		width: "33.333333333%",
	},
	stackDivider: {
		background: "var(--light)",
		margin: "15px 0px !important",
		width: "25px",
	},

	footer: {
		color: "var(--light)",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	footerAbout: {
		display: "flex",
		justifyContent: "space-evenly",
	},
	footerLink: {
		margin: "0px 15px",
		color: "var(--light) !important",

		"&:first-of-type": {
			marginLeft: "0px",
		},
		"&:last-of-type": {
			marginRight: "0px",
		},
	},
});

export { useStyles };
