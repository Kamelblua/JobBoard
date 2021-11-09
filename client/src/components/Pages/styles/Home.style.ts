import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	container: {},
	startContainer: {
		height: "450px",
		background: "url('/assets/images/home.png')",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",

		paddingTop: "150px",
		paddingLeft: "150px",
	},
	title: {
		width: "max-content",
		padding: "15px",
		fontSize: "50px",
		textAlign: "center",
		color: "var(--light)",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontFamily: "Roboto Bold",
		background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.49761911600577735) 100%)",
	},
	titleSpecial: {
		color: "var(--main-green)",
	},

	section1: {
		padding: "50px 100px",
		textAlign: "center",
		background: "#F1F1F1",
	},
	section1Title: {
		textAlign: "left",
		fontSize: "35px !important",
		fontFamily: "Roboto Bold !important",
	},
	section1Text: {
		fontSize: "25px !important",
		fontFamily: "Roboto Light !important",
		lineHeight: "1.25 !important",
		fontStyle: "italic",
	},

	img: {
		width: "50%",
		objectFit: "cover",
		height: "100%",
	},

	middleSection: {
		height: "600px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		textAlign: "center",
	},
	middleSectionTitle: {
		marginBottom: "50px !important",
		fontSize: "35px !important",
		fontFamily: "Roboto Bold !important",
	},
	middleSectionText: {
		textAlign: "left",
		fontSize: "20px !important",
		fontFamily: "Roboto Light !important",
		lineHeight: "1.25 !important",
		fontStyle: "italic",
	},

	middleSectionHalf: {
		width: "50%",
		padding: "15px 50px",
	},

	lastSection: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		padding: "100px 50px",
		background: "#F1F1F1",
	},
});

export { useStyles };
