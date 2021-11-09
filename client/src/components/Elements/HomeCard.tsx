import { FC } from "react";

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useStyles } from "./styles/HomeCard.styles";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

interface HomeCardProps {
	title: string;
	content: string;
	color: string;
	hoverColor: string;
	image: string;
	link: {
		to: string;
		text: string;
	};
}

const HomeCard: FC<HomeCardProps> = ({ title, content, color, hoverColor, image, link }) => {
	const styles = useStyles({ color, hoverColor });

	return (
		<Box className={styles.container}>
			<img src={image} alt='home' className={styles.img} />
			<Box className={styles.infoContainer}>
				<Typography variant='h5' className={styles.title}>
					{title}
				</Typography>
				<Typography variant='subtitle1' className={styles.content}>
					{content}
				</Typography>
				<Link to={link.to} className={styles.linkButton}>
					<Button className={styles.button} variant='text' endIcon={<HiArrowRight />}>
						{link.text}
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export { HomeCard };
