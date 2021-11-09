import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		margin: "0px 50px",
		boxShadow: "var(--small-box-shadow)",
		background: "var(--white)",
		borderRadius: "3px",
	},
	search: {
		margin: "8px",
		flex: "1 1 auto",
		maxWidth: "450px",
	},
	searchBarOptions: {
		padding: "15px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
	},
	menu: {
		maxHeight: "300px",
		width: "250px",
	},
	searchButton: {
		margin: "15px",
		marginTop: "0px",
	},
});

export { useStyles };

// "@media (max-width:900px)": { margin: "0px 50px" }
