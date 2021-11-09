import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		margin: "0px 0",
		boxShadow: "var(--small-box-shadow)",
		background: "var(--white)",
	},
	search: {
		margin: "0px 30px !important",
		flex: "1 1 auto",
		maxWidth: "450px",
	},
	searchBarOptions: {
		padding: "15px",
		display: "flex",
		alignItems: "center",
		flexWrap: "wrap",
	},
	menu: {
		maxHeight: "300px",
		width: "250px",
	},
});

export { useStyles };

// "@media (max-width:900px)": { margin: "0px 50px" }
