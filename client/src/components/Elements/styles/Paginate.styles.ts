import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	root: {
		margin: "15px 0px",

		"& .Mui-selected": {
			background: "var(--main-green) !important",
			color: "var(--light) !important",
		},
	},
});

export { useStyles };
