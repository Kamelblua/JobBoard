// React
import { FC } from "react";

// Components
import { Box, LinearProgress, Typography } from "@mui/material";

// Hooks
import { useStyles } from "./styles/DashboardCard.styles";

interface DashboardCardProps {
	count: number;
	title: string;
	loading: boolean;
}

const DashboardCard: FC<DashboardCardProps> = ({ count, title, loading }) => {
	const styles = useStyles();

	return (
		<Box className={styles.card}>
			<Typography className={styles.title}>{title}</Typography>
			{loading ? (
				<LinearProgress className={styles.loading} />
			) : (
				<Typography className={styles.count}>{count}</Typography>
			)}
		</Box>
	);
};

export { DashboardCard };
