import { FC, SyntheticEvent, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HiChevronDown, HiExternalLink } from "react-icons/hi";

import { Application as ApplicationType } from "types/shared.d";
import moment from "moment";

import { useStyles } from "./styles/Application.styles";

interface ApplicationProps {
	application: ApplicationType;
}

const Application: FC<ApplicationProps> = ({ application }) => {
	const styles = useStyles();

	const [expanded, setExpanded] = useState(false);

	const handleChange = (event: SyntheticEvent) => {
		setExpanded(!expanded);
	};

	return (
		<Box className={styles.item}>
			<Typography variant='h5'>
				Application submitted for{" "}
				<Link to={`/offer/${application.advertisement.id}`}>{application.advertisement.title}</Link>
			</Typography>
			<a href={application.resume.location} className={styles.resumeLink} target='_blank' rel='noreferrer'>
				<Button startIcon={<HiExternalLink />} variant='contained'>
					See forwarded resume
				</Button>
			</a>

			<Accordion className={styles.readMore} expanded={expanded} onChange={handleChange}>
				<AccordionSummary
					expandIcon={<HiChevronDown />}
					aria-controls={`readmore${application.id}-content`}
					id={`readmore${application.id}-header`}
				>
					<Typography variant='h6'>Read more</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='body1' className={styles.readMoreContent}>
						{application.more}
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Typography variant='caption'>Submitted {moment(application.created_at).fromNow()}</Typography>
		</Box>
	);
};

export { Application };
