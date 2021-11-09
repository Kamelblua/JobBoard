import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {
		display: "flex",
		alignItems: "center",
	},
	previewBoxSkeleton: {
		margin: "15px",
		borderRadius: "3px",
	},
	filePreviewContainer: {
		width: "550px",
		height: "750px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRadius: "3px",
	},
	filePreview: {
		width: "100%",
		height: "100%",
		padding: "15px",
	},
	uploadButton: {
		margin: "10px !important",
	},
	uploadBox: {
		position: "relative",
		padding: "0px 15px",
		width: "550px",
		height: "750px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		background: "var(--black-hover)",
		margin: "15px",
	},
	uploadText: {
		fontSize: "15px",
	},
	uploadOverlay: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		fontSize: "50px",
		background: "var(--main-green)",
		color: "var(--light)",
		opacity: 0,
		transition: "all .1s ease-in",

		"&:hover": {
			cursor: "pointer",
		},
	},
	active: {
		opacity: 1,
	},

	form: {
		paddingRight: "15px",
		paddingLeft: "0px",
		width: "50%",
	},
	input: {
		margin: "15px 10px !important",
	},
	inputFull: {
		width: "calc(100% - 20px)",
	},
	inputHalf: {
		width: "calc(50% - 20px)",
	},
	updateButton: {
		width: "100%",
		marginTop: "30px !important",
	},
});

export { useStyles };
