import { FC } from "react";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import { useStyles } from "./styles/NotFound.styles";
import { HiArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";

const NotFound: FC<{}> = () => {
	const styles = useStyles();

	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<Box className={styles.container}>
			<Helmet>
				<title>Job Board | Not found</title>
			</Helmet>

			<Box className={styles.info}>
				<Button onClick={goBack} className={styles.backButton} variant='outlined' startIcon={<HiArrowLeft />}>
					Go back
				</Button>
			</Box>
		</Box>
	);
};
export { NotFound };
