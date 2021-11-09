import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		width: "100%",
		border: "solid 1px var(--black-hover)",
		borderRadius: "3px",
		padding: "15px",
		margin: "15px 0px",
	},
	skeletonItem: {
		margin: "10px 0px",
	},
});

export { useStyles };
