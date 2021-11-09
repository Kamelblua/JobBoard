import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    title: {
        marginBottom: "20px!important"
    },
    resultCount: {
        fontSize: "25px",
    },
    resultCountNumber: {
        color: "var(--main-green)",
        fontSize: "50px",
        fontFamily: "Roboto Bold",
        marginRight: "5px",
    },
    loadingResultContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "rgba(255, 255, 255, .5)",
    }
});

export { useStyles };
