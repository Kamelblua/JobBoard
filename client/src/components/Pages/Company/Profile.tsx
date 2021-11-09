// React
import { FC, useState, useEffect, Fragment } from "react";

// Components
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { MdLocationOn } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { HiIdentification, HiOutlinePencilAlt, HiTag } from "react-icons/hi";
import { AdvertisementCard } from "components/Modules/AdvertisementCard";

// Hooks
import { useStyles } from "./styles/Profile.styles";
import { Link } from "react-router-dom";

// Other
import { api } from "api/api";
import { Company } from "types/company";
import { Helmet } from "react-helmet";

const Profile: FC<{}> = () => {
	const styles = useStyles();

	const [loading, setLoading] = useState(true);
	const [company, setCompany] = useState<Company | null>(null);

	const displayPhone = (phone: string) => {
		let phoneSplit = phone.match(/.{2}/g);

		return phoneSplit?.join(".");
	};

	const displayAddress = (company: Company) => {
		return `${company.address}, ${company.city}, ${company.country}`;
	};

	useEffect(() => {
		setLoading(true);

		api.company
			.profile()
			.then((res) => {
				console.log(res);
				setCompany(res.data);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Box component='main' className={styles.container}>
			<Helmet>
				<title>Job Board | My company</title>
			</Helmet>

			{company && !loading && (
				<Box className={styles.stack}>
					<Link className={styles.editLink} to='/my/company/edit'>
						<IconButton>
							<HiOutlinePencilAlt className={styles.editButton} />
						</IconButton>
					</Link>
					<Box component='section' className={styles.infos}>
						<img className={styles.logo} src={company?.logo?.location} alt={`${company?.name}'s logo`} />
						<Typography className={styles.name} variant='h3'>
							{company.name}
						</Typography>
						<Typography className={styles.contact}>
							{company.contact_email}
							<br />
							{displayPhone(company.contact_phone)}
						</Typography>
						<Box className={styles.links}>
							{company.website_link && (
								<a className={styles.link} target='_blank' rel='noreferrer' href={company.website_link}>
									<IconButton color='warning'>
										<VscGlobe />
									</IconButton>
								</a>
							)}
							{company.facebook_link && (
								<a className={styles.link} target='_blank' rel='noreferrer' href={company.facebook_link}>
									<IconButton className={styles.fbBtn}>
										<FaFacebookSquare />
									</IconButton>
								</a>
							)}
							{company.twitter_link && (
								<a className={styles.link} target='_blank' rel='noreferrer' href={company.twitter_link}>
									<IconButton className={styles.twBtn}>
										<FaTwitterSquare />
									</IconButton>
								</a>
							)}
							{company.instagram_link && (
								<a className={styles.link} target='_blank' rel='noreferrer' href={company.instagram_link}>
									<IconButton className={styles.itBtn}>
										<FaInstagramSquare />
									</IconButton>
								</a>
							)}
							{company.linkedin_link && (
								<a className={styles.link} target='_blank' rel='noreferrer' href={company.linkedin_link}>
									<IconButton className={styles.lkBtn}>
										<FaLinkedinIn />
									</IconButton>
								</a>
							)}
							{company.youtube_link && (
								<a className={styles.link} target='_blank' rel='noreferrer' href={company.youtube_link}>
									<IconButton className={styles.ytBtn}>
										<FaYoutubeSquare />
									</IconButton>
								</a>
							)}
						</Box>

						<Divider sx={{ margin: "15px 0px", width: "100%", backgroundColor: "var(--black-hover)" }} />

						<Typography variant='h5'>Additional informations</Typography>

						<Box className={styles.infoBox}>
							<HiIdentification className={styles.infoBoxIcon} />
							<Typography className={styles.infoBoxContent} variant='caption'>
								<strong>{company.type.name}</strong>
							</Typography>
						</Box>
						<Box className={styles.infoBox}>
							<HiTag className={styles.infoBoxIcon} />
							<Typography className={styles.infoBoxContent} variant='caption'>
								<strong>{company.industry.name}</strong>
							</Typography>
						</Box>
						<Box className={styles.infoBox}>
							<IoIosPeople className={styles.infoBoxIcon} />
							<Typography className={styles.infoBoxContent} variant='caption'>
								<strong>{company.employees_range}</strong>
							</Typography>
						</Box>
						<Box className={styles.infoBox}>
							<MdLocationOn className={styles.infoBoxIcon} />
							<Typography className={styles.infoBoxContent} variant='caption'>
								{displayAddress(company)}
							</Typography>
						</Box>

						<Divider sx={{ margin: "15px 0px", width: "100%", backgroundColor: "var(--black-hover)" }} />
					</Box>

					<Box
						component='section'
						className={`${styles.jobList} ${company.advertisements.length === 0 && styles.noOffers}`}
					>
						<Typography className={styles.offersTitle} variant='h3'>
							Job offers
						</Typography>
						{company.advertisements.length === 0 ? (
							<Typography className={styles.offersTitle} variant='h4'>
								No offers posted yet.
							</Typography>
						) : (
							<Fragment>
								{company.advertisements.map((a, k) => (
									<AdvertisementCard advertisement={a} key={k} />
								))}
							</Fragment>
						)}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export { Profile };
