import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		padding: "50px",
	},
	applicationContainer: {
		padding: "15px",
	},
	item: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		border: "solid 1px var(--black-hover)",
		borderRadius: "3px",
		padding: "15px",
		margin: "15px 0px",
	},
	resumeLink: {
		margin: "15px 0px",
	},
	readMore: {
		marginBottom: "15px !important",

		"&::before": {
			display: "none",
		},
	},
});

export { useStyles };
