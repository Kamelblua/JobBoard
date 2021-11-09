import { FC } from "react";

import { Box } from "@mui/system";

import { HomeCard } from "components/Elements/HomeCard";

import { useStyles } from "./styles/Home.style";
import { Typography } from "@mui/material";
import { HiCursorClick, HiOutlineMap } from "react-icons/hi";
import { Helmet } from "react-helmet";

const Home: FC<{}> = () => {
	const styles = useStyles();

	return (
		<Box className={styles.container}>
			<Helmet>
				<title>Job Board | Welcome to Job Board</title>
			</Helmet>

			<Box className={styles.startContainer}>
				<Box className={styles.title}>
					Welcome to <br />
					Job<span className={styles.titleSpecial}>Board</span>.
				</Box>
			</Box>

			<Box className={styles.section1}>
				<Typography variant='h2' className={styles.section1Title}>
					You've got the <br /> <span className={styles.titleSpecial}>#talent</span>
				</Typography>
				<Typography variant='caption' className={styles.section1Text}>
					“Our mission is to help you unlock it. <br />
					How? By giving you all the keys you need to find your way in the <br />
					world and thrive when you get there.”
				</Typography>
			</Box>

			<Box className={styles.middleSection}>
				<img src='/assets/images/home-candidate-1.jpg' alt='candidate 1' className={styles.img} />
				<Box className={styles.middleSectionHalf}>
					<HiOutlineMap fontSize={50} color='var(--main-green)' />
					<Typography variant='h3' className={styles.middleSectionTitle}>
						Find your path
					</Typography>
					<Typography variant='subtitle1' className={styles.middleSectionText}>
						The careers and companies we end up in are all down to the choices we make. Pathways, opportunities, values
						and future goals... nothing can be left to chance. <br />
						<br />
						We'll tell you everything you need to know so you can thrive in your chosen career path.
					</Typography>
				</Box>
			</Box>

			<Box className={styles.middleSection}>
				<Box className={styles.middleSectionHalf}>
					<HiCursorClick fontSize={50} color='var(--main-green)' />
					<Typography variant='h3' className={styles.middleSectionTitle}>
						Jump in
					</Typography>
					<Typography variant='subtitle1' className={styles.middleSectionText}>
						Finding the right opportunities can be difficult. With us, all our internships and job ads are adapted to
						students and recent graduates..
					</Typography>
				</Box>
				<img src='/assets/images/home-candidate-2.jpg' alt='candidate 2' className={styles.img} />
			</Box>

			<Box className={styles.lastSection}>
				<HomeCard
					title='Candidate ?'
					content='Find your perfect job now.'
					link={{ to: "/jobs", text: "Find a job" }}
					color='var(--main-green)'
					hoverColor='var(--main-green-hover-opacity)'
					image='/assets/images/home-card-1.jpg'
				/>
				<HomeCard
					title='Recruiter ?'
					content='Post your job offers here.'
					link={{ to: "/company/post", text: "Post an offer" }}
					color='var(--main-purple)'
					hoverColor='var(--main-purple-hover-opacity)'
					image='/assets/images/home-card-2.jpg'
				/>
			</Box>
		</Box>
	);
};

export { Home };
