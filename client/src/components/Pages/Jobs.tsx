import { FC, useEffect, useState } from "react";

import { Box } from "@mui/system";
import { SearchBar } from "components/Modules/SearchBar";

import { useStyles } from "./styles/Jobs.styles";
import { Advertisement as AdvertisementType, AdvertisementSearch } from "types/advertisement.d";
import { CircularProgress, Typography } from "@mui/material";
import { Advertisement } from "components/Modules/Advertisement";
import { AdvertisementCard } from "components/Modules/AdvertisementCard";
import { api } from "api/api";
import { Paginate } from "components/Elements/Paginate";
import { Helmet } from "react-helmet";

interface Result {
	total: number;
	count: number;
	items: AdvertisementType[];
}

const Jobs: FC<{}> = () => {
	const styles = useStyles();

	const [advertisements, setAdvertisements] = useState<AdvertisementType[]>([]);

	const [search, setSearch] = useState<AdvertisementSearch>({
		page: 1,
		limit: 25,
		search: "",
		language_ids: [],
		position_ids: [],
		industry_ids: [],
	});
	const [result, setResult] = useState<Result | null>(null);
	const [displayGrid, setDisplayGrid] = useState(true);
	const [loading, setLoading] = useState(true);

	const switchDisplay = (displayType: string) => {
		if (displayType === "grid") {
			setDisplayGrid(true);
			return;
		}
		setDisplayGrid(false);
	};

	useEffect(() => {
		setLoading(true);

		api.advertisement
			.search(search)
			.then((res) => {
				setAdvertisements(res.data.items);
				setResult(res.data);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [search]);

	return (
		<Box className={styles.container}>
			<Helmet>
				<title>Job Board | Browse jobs</title>
			</Helmet>

			<SearchBar search={search} setSearch={setSearch} />
			{result && (
				<Box>
					<Box className={styles.resultInfo}>
						<Typography variant='subtitle1' className={styles.resultCount}>
							<span className={styles.resultCountNumber}>{result?.total}</span> job(s) found
						</Typography>
						<Box>
							<img
								src='/assets/images/search_view_grid.svg'
								alt='grid_icon'
								onClick={() => {
									switchDisplay("grid");
								}}
								className={`${styles.displayButton} ${displayGrid ? styles.activeButton : ""}`}
							/>
							<img
								src='/assets/images/search_view_list.svg'
								alt='list_icon'
								onClick={() => {
									switchDisplay("list");
								}}
								className={`${styles.displayButton} ${!displayGrid ? styles.activeButton : ""}`}
							/>
						</Box>
					</Box>
				</Box>
			)}
			{result && <Paginate search={search} setSearch={setSearch} total={result.total} />}
			<Box className={styles.resultContainer}>
				{loading && (
					<Box className={styles.loadingResultContainer}>
						<CircularProgress size={50} />
					</Box>
				)}
				{advertisements.map((a, k) =>
					displayGrid ? <AdvertisementCard key={k} advertisement={a} /> : <Advertisement key={k} advertisement={a} />
				)}
			</Box>
		</Box>
	);
};

export { Jobs };
