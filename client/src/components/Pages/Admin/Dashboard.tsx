// React
import { FC, useState, useEffect } from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { auth } from "api/auth";
import { Link } from "react-router-dom";
import { api } from "api/api";
import { DashboardCard } from "components/Modules/Admin/DashboardCard";
import { useStyles } from "./styles/Dashboard.styles";
import { Helmet } from "react-helmet";

const Dashboard: FC<{}> = () => {
	const styles = useStyles();

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<{
		candidate_count: number;
		company_count: number;
		advertisement_count: number;
		application_count: number;
	} | null>(null);

	const logout = () => {
		api.candidate.logout().finally(() => {
			setTimeout(() => {
				document.location.href = "/";
			}, 750);
		});
	};

	useEffect(() => {
		setLoading(true);

		api.admin
			.dashboard()
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Box>
			<Helmet>
				<title>Job Board | Admin Dashboard</title>
			</Helmet>

			<Typography variant='h4'>Dashboard</Typography>
			<Typography variant='subtitle1'>
				Welcome. You're logged in as {auth.getEmail()}. Click{" "}
				<Link to='#' onClick={logout}>
					here
				</Link>{" "}
				to log out.
			</Typography>
			<Box className={styles.container}>
				<DashboardCard loading={loading} count={data!?.candidate_count} title='Registered candidates'></DashboardCard>
				<DashboardCard loading={loading} count={data!?.company_count} title='Registered companies'></DashboardCard>
				<DashboardCard
					loading={loading}
					count={data!?.application_count}
					title='Submitted applications to advertisements'
				></DashboardCard>
				<DashboardCard
					loading={loading}
					count={data!?.advertisement_count}
					title='Advertisements created'
				></DashboardCard>
			</Box>
		</Box>
	);
};

export { Dashboard };
