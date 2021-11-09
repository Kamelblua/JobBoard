import { FC } from "react";

import { Box, Skeleton } from "@mui/material";

import { useStyles } from "./styles/ApplicationSkeleton.styles";

const ApplicationSkeleton: FC<{}> = () => {
	const styles = useStyles();

	const titleWidths = ["150px", "250px", "350px", "450px"];
	const submissionDateWidths = ["50px", "75px", "100px"];

	return (
		<Box className={styles.container}>
			<Skeleton
				className={styles.skeletonItem}
				variant='rectangular'
				width={titleWidths[Math.floor(Math.random() * titleWidths.length)]}
			/>
			<Skeleton className={styles.skeletonItem} variant='rectangular' height='50px' width='225px' />
			<Skeleton className={styles.skeletonItem} variant='rectangular' height='35px' width='100%' />
			<Skeleton
				className={styles.skeletonItem}
				variant='rectangular'
				width={submissionDateWidths[Math.floor(Math.random() * submissionDateWidths.length)]}
			/>
		</Box>
	);
};

export { ApplicationSkeleton };
