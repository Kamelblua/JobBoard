// React
import { FC } from "react";

// Components
import { Box, Skeleton } from "@mui/material";

// Hooks
import { useStyles } from "./styles/ProfileSkeleton.styles";

const ProfileSkeleton: FC<{}> = () => {
	const styles = useStyles();

	return (
		<Box className={styles.container}>
			<Skeleton className={`${styles.skeletonItem} ${styles.full}`} animation='wave' />
			<Skeleton className={`${styles.skeletonItem} ${styles.half}`} animation='wave' />
			<Skeleton className={`${styles.skeletonItem} ${styles.half}`} animation='wave' />
		</Box>
	);
};

export { ProfileSkeleton };
