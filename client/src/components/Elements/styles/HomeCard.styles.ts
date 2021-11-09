import { makeStyles } from "@mui/styles";

interface HomeCardStyleProps {
	color: string;
	hoverColor: string;
}

const useStyles = makeStyles({
	container: {
		height: "150px",
		borderRadius: "5px",
		width: "500px",
		overflow: "hidden",
		display: "flex",
		flexDirection: "row",
		background: "var(--bg)",
	},
	img: {
		width: "35%",
		height: "100%",
		objectFit: "cover",
		clipPath: "polygon(0 0, 30% 0, 100% 100%, 0% 100%)",
	},
	infoContainer: {
		width: "65%",
		paddingTop: "15px",
		display: "flex",
		flexDirection: "column",
		alignItems: "end",
	},
	title: {
		position: "relative",
		width: "100%",
		left: "-50px",
		marginLeft: "-50px !important",
		color: (props: HomeCardStyleProps) => (props.color ? props.color : "var(--main-green)"),
	},
	content: {
		width: "100%",
	},
	linkButton: {
		marginTop: "15px",
		marginRight: "25px",
	},
	button: {
		color: (props: HomeCardStyleProps) => (props.color ? props.color : "var(--main-green)") + "!important",

		"&:hover": {
			background: (props: HomeCardStyleProps) =>
				(props.hoverColor ? props.hoverColor : "var(--main-green-hover-opacity)") + "!important",
		},
	},
});

export { useStyles };
