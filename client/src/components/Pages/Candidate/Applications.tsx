// React
import { FC, useState, useEffect, Fragment } from "react";

// Components
import { Box, Typography } from "@mui/material";
import { Application } from "components/Modules/Application";
import { ApplicationSkeleton } from "components/Pages/Skeletons/ApplicationSkeleton";

// Hooks
import { useStyles } from "./styles/Applications.styles";

// Other
import { Application as ApplicationType } from "types/shared.d";
import { api } from "api/api";
import { Helmet } from "react-helmet";

const Applications: FC<{}> = () => {
	const styles = useStyles();

	const [loading, setLoading] = useState(true);
	const [applications, setApplications] = useState<ApplicationType[] | null>(null);

	useEffect(() => {
		setLoading(true);

		api.candidate
			.applications()
			.then((res) => {
				console.log(res);
				setApplications(res.data.items);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Box className={styles.container}>
			<Helmet>
				<title>Job Board | Your applications</title>
			</Helmet>

			<Typography variant='h3'>My applications</Typography>
			<Box className={styles.applicationContainer}>
				{loading || !applications ? (
					<Fragment>
						<ApplicationSkeleton />
						<ApplicationSkeleton />
						<ApplicationSkeleton />
					</Fragment>
				) : (
					applications.map((a, k) => <Application application={a} key={k} />)
				)}
			</Box>
		</Box>
	);
};

export { Applications };
