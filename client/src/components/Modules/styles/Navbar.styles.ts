import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "5px 35px",
		boxShadow: "var(--small-box-shadow)",
	},
	menu: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	menuDropDown: {
		display: "flex",
		flexDirection: "column",
		width: "100% !important",
		paddingBottom: "0px !important",
	},
	dropDownLink: {
		width: "100% !important",
	},
	logoutLink: {
		background: "#f44336",
		color: "var(--light) !important",
	},
	menuItemLink: {
		paddingRight: "15px",
	},
	menuItem: {
		color: "var(--text) !important",
		transition: "all .2s ease-in",

		"&:hover": {
			color: "var(--light) !important",
			background: "var(--main-green) !important",
		},
	},
	activeMenuItem: {
		color: "var(--light) !important",
		background: "var(--main-green) !important",
	},
	dropdown: {
		color: "green",
	},

	candidateChip: {
		marginRight: "15px !important",
		color: "var(--main-green) !important",
		borderColor: "var(--main-green) !important",
	},
	companyChip: {
		marginRight: "15px !important",
		color: "var(--main-purple) !important",
		borderColor: "var(--main-purple) !important",
	},
	adminChip: {
		marginRight: "15px !important",
		color: "var(--main-red) !important",
		borderColor: "var(--main-red) !important",
	},
});

export { useStyles };
