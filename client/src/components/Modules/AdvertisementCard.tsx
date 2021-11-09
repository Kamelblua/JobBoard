// React
import { FC, useContext, useState } from "react";

// Components
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Chip, Typography } from "@mui/material";
import {} from "@mui/system";
import { HiChevronDown } from "react-icons/hi";

// Hooks
import { useParams } from "react-router";
import { useStyles } from "./styles/AdvertisementCard.styles";
import { GlobalContext } from "providers/GlobalContext";

// Other
import { Advertisement as AdvertisementType } from "types/advertisement.d";
import { Link } from "react-router-dom";
import { auth } from "api/auth";

type IndexParams = {
	id: string;
};

interface AdvertisementCardProps {
	advertisement: AdvertisementType;
}

const AdvertisementCard: FC<AdvertisementCardProps> = ({ advertisement }) => {
	const styles = useStyles();
	const { state, setState } = useContext(GlobalContext);
	let { id } = useParams<IndexParams>();

	const [expanded, setExpanded] = useState(false);

	const handleChange = (event: React.SyntheticEvent) => {
		setExpanded(!expanded);
	};

	const displayShortContent = (content: string) => {
		return content.substring(0, 150) + "...";
	};

	const apply = () => {
		if (setState) {
			setState({ ...state, openModal: true, selectedAdvertisement: advertisement });
		}
	};

	return (
		<Box className={styles.container}>
			<Box className={styles.header}>
				<Avatar className={styles.logo} alt={advertisement.company.name} src={advertisement.company.logo?.location} />
				<Typography variant='h6' className={styles.title}>
					{advertisement.title}
				</Typography>
			</Box>
			<Box className={styles.actions}>
				{!auth.isLoggedInAs("company") && (
					<Button onClick={apply} className={styles.applyButton} variant='contained'>
						Apply
					</Button>
				)}
				{!id && auth.getAuthenticatedId() !== advertisement.company.id && (
					<Link to={`/company/${advertisement.company.id}`}>
						<Button className={styles.companyButton} variant='contained'>
							See company
						</Button>
					</Link>
				)}
			</Box>
			<Box className={styles.infos}>
				{advertisement.positions.map((position, k) => (
					<Chip key={k} className={styles.chip} label={position.name} variant='outlined' color='primary' />
				))}
				{advertisement.languages.map((language, k) => (
					<Chip key={k} className={styles.chip} label={language.name} variant='outlined' color='success' />
				))}
			</Box>
			<Accordion className={styles.readMore} expanded={expanded} onChange={handleChange}>
				<AccordionSummary
					expandIcon={<HiChevronDown />}
					aria-controls={`readmore${advertisement.id}-content`}
					id={`readmore${advertisement.id}-header`}
				>
					<Typography>Read more</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{displayShortContent(advertisement.content)}</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export { AdvertisementCard };
