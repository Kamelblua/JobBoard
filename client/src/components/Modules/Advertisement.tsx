import { FC } from "react";

import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Advertisement as AdvertisementType } from "types/advertisement.d";

import { useStyles } from "./styles/Advertisement.styles";
import { Position } from "types/jobs";

import moment from "moment";

interface AdvertisementProps {
	advertisement: AdvertisementType;
}

const Advertisement: FC<AdvertisementProps> = ({ advertisement }) => {
	const styles = useStyles();

	const displayPositions = (positions: Position[]) => {
		let output = "";

		positions.forEach((val: any) => {
			output += val.name + ", ";
		});

		return output.replace(/,\s$/, "");
	};

	return (
		<Box className={styles.container}>
			<Box className={styles.logoContainer}>
				<img
					className={styles.logo}
					src={advertisement.company.logo?.location}
					alt={`${advertisement.company.name}'s logo`}
				/>
			</Box>
			<Box className={styles.infoContainer}>
				<Typography variant='h5'>{advertisement.title}</Typography>
				<Typography variant='body1' className={styles.companyName}>
					{advertisement.company.name}
				</Typography>
				<Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={1}>
					<Typography variant='caption'>{displayPositions(advertisement.positions)}</Typography>
					<Typography variant='caption'>{advertisement.city}</Typography>
					<Typography variant='caption'>Published {moment(advertisement.created_at).fromNow()}</Typography>
				</Stack>
			</Box>
		</Box>
	);
};

export { Advertisement };
