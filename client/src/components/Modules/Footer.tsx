import { FC } from "react";

import { Box } from "@mui/system";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

import { useStyles } from "./styles/Footer.styles";
import { Link } from "react-router-dom";
import { Divider, Stack, Typography } from "@mui/material";

const Footer: FC<{}> = () => {
	const styles = useStyles();

	return (
		<Box component='footer' className={styles.container}>
			<Box className={styles.header}>
				<Link to='/'>
					<img src='/assets/images/logo-light.svg' alt='logo' />
				</Link>
				<Box>
					<a href='https://www.facebook.com' rel='noreferrer noopener' target='_blank'>
						<FaFacebook className={styles.social} />
					</a>
					<a href='https://www.twitter.com' rel='noreferrer noopener' target='_blank'>
						<AiOutlineTwitter className={styles.social} />
					</a>
					<a href='https://www.instagram.com' rel='noreferrer noopener' target='_blank'>
						<FaInstagram className={styles.social} />
					</a>
					<a href='https://www.linkedin.com' rel='noreferrer noopener' target='_blank'>
						<AiFillLinkedin className={styles.social} />
					</a>
				</Box>
			</Box>

			<Divider className={styles.divider} />

			<Stack className={styles.stack} direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={2}>
				<Box className={styles.stackSection}>
					<Typography variant='subtitle1'>Candidates</Typography>
					<Divider className={styles.stackDivider} />
					<Link to='/register' style={{ color: "var(--light)" }}>
						<Typography variant='subtitle2'>Sign up</Typography>
					</Link>
					<Link to='/jobs' style={{ color: "var(--light)" }}>
						<Typography variant='subtitle2'>Search jobs</Typography>
					</Link>
					<Link to='/companies' style={{ color: "var(--light)" }}>
						<Typography variant='subtitle2'>Discover companies</Typography>
					</Link>
				</Box>

				<Box className={styles.stackSection}>
					<Typography variant='subtitle1'>Companies</Typography>
					<Divider className={styles.stackDivider} />
					<Link to='/company/post' style={{ color: "var(--light)" }}>
						<Typography variant='subtitle2'>Start hiring</Typography>
					</Link>
				</Box>
				<Box className={styles.stackSection}>
					<Typography variant='subtitle1'>Job Board</Typography>
					<Divider className={styles.stackDivider} />
					<Link to='/about' style={{ color: "var(--light)" }}>
						<Typography variant='subtitle2'>About</Typography>
					</Link>
					<Link to='/contact' style={{ color: "var(--light)" }}>
						<Typography variant='subtitle2'>Contact us</Typography>
					</Link>
				</Box>
			</Stack>

			<Box className={styles.footer}>
				<Box className={styles.footerAbout}>
					<Link to='#' className={styles.footerLink}>
						<Typography variant='h6'>Legal</Typography>
					</Link>
					<Link to='#' className={styles.footerLink}>
						<Typography variant='h6'>Cookies</Typography>
					</Link>
					<Link to='#' className={styles.footerLink}>
						<Typography variant='h6'>Privacy Policy</Typography>
					</Link>
					<Link to='#' className={styles.footerLink}>
						<Typography variant='h6'>Security</Typography>
					</Link>
				</Box>
				<Typography variant='caption'>Copyright © JobBoard 2008-2021 - Vocational guidance website</Typography>
			</Box>
		</Box>
	);
};

export { Footer };
