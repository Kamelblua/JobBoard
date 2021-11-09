import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
	},
	skeletonItem: {
		height: "100px !important",
		margin: "10px",
	},
	half: {
		width: "calc(50% - 20px)",
	},
	full: {
		width: "calc(100% - 20px)",
	},
});

export { useStyles };
