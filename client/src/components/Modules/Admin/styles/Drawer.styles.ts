import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	icon: {
		minWidth: "10px",
		fontSize: "20px",
		color: "var(--white)",
	},
	headerSidebar: {
		backgroundColor: "var(--white)",
		height: "80px",
		borderRight: "1px solid var(--main-gray)",
	},
	img: {
		width: "100%",
		height: "100%",
	},
	listItem: {
		padding: "0!important",
		margin: "0!important",
	},
	itemText: {
		display: "flex",
		justifyContent: "flex-start",
		width: "100%!important",
	},
	itemLink: {
		width: "100%!important",
	},
	activeButton: {
		borderLeft: "1px solid white!important",
		borderTop: "1px solid #C33131!important",
		borderBottom: "1px solid #C33131!important",
	},
	listItemIcon: {
		minWidth: "30px",
	},
	button: {
		borderRadius: "0!important",
		color: "var(--white)!important",
		justifyContent: "flex-start !important",
	},
	text: {
		color: "var(--white)",
	},
});

export { useStyles };
