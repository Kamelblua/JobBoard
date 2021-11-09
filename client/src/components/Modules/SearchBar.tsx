import { FC, useEffect, useState } from "react";

import { Box } from "@mui/system";
import { Button, FormControl, Input, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";

import { useStyles } from "./styles/SearchBar.styles";
import { HiSearch } from "react-icons/hi";
import { CustomSelect } from "components/Elements/CustomSelect";

import { AdvertisementSearch } from "types/advertisement";
import { api } from "api/api";
import { Language, Position } from "types/jobs";

const SearchBar: FC<{ search: AdvertisementSearch; setSearch: Function }> = ({ search, setSearch }) => {
	const styles = useStyles();

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedPositionIds, setSelectedPositionIds] = useState([]);
	const [selectedIndustryIds, setSelectedIndustryIds] = useState([]);
	const [selectedLanguageIds, setSelectedLanguageIds] = useState([]);

	const [positions, setPositions] = useState<Position[]>([]);
	const [categories, setCategories] = useState<any>([]);
	const [languages, setLanguages] = useState<Language[]>([]);

	useEffect(() => {
		api.shared.positions().then((res) => {
			setPositions(res.data.items);
		});
		api.shared.industries().then((res) => {
			setCategories(res.data.items);
		});
		api.shared.languages().then((res) => {
			setLanguages(res.data.items);
		});
	}, []);

	return (
		<Box className={styles.container}>
			<Box className={styles.searchBarOptions}>
				<FormControl className={styles.search}>
					<InputLabel htmlFor='standard-adornment-password'>Search</InputLabel>
					<Input
						id='standard-adornment-password'
						type='text'
						value={searchTerm}
						onChange={(e: any) => {
							setSearchTerm(e.target.value);
						}}
						startAdornment={
							<InputAdornment position='start'>
								<HiSearch />
							</InputAdornment>
						}
					/>
				</FormControl>

				<CustomSelect label='Position' id='position' items={positions} callback={setSelectedPositionIds} />
				<CustomSelect label='Category' id='category' items={categories} callback={setSelectedIndustryIds} />
				<CustomSelect label='Language' id='language' items={languages} callback={setSelectedLanguageIds} />

				<FormControl>
					<InputLabel id='demo-simple-select-helper-label'>Limit</InputLabel>
					<Select
						labelId='demo-simple-select-helper-label'
						id='demo-simple-select-helper'
						value={search.limit}
						label='Limit'
						onChange={(e) => {
							setSearch((prevState: any) => ({
								...prevState,
								limit: e.target.value,
							}));
						}}
					>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={25}>25</MenuItem>
						<MenuItem value={50}>50</MenuItem>
						<MenuItem value={100}>100</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Button
				onClick={() => {
					setSearch((prevState: any) => ({
						...prevState,
						search: searchTerm,
						position_ids: selectedPositionIds,
						industry_ids: selectedIndustryIds,
						language_ids: selectedLanguageIds,
					}));
				}}
				variant='text'
				className={styles.searchButton}
			>
				Search
			</Button>
		</Box>
	);
};

export { SearchBar };
