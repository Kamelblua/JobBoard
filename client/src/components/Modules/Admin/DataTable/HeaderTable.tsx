import { FC } from "react";

import { Box } from "@mui/system";
import { FormControl, Input, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";

import { useStyles } from "./styles/HeaderTable.styles";
import { HiSearch } from "react-icons/hi";

import { Search } from "types/api.d";

const HeaderTable: FC<{ search: Search; setSearch: Function }> = ({ search, setSearch }) => {
	const styles = useStyles();

	return (
		<Box className={styles.container}>
			<Box className={styles.searchBarOptions}>
				<FormControl className={styles.search}>
					<InputLabel htmlFor='standard-adornment-password'>Search</InputLabel>
					<Input
						id='standard-adornment-password'
						type='text'
						value={search.search}
						onChange={(e: any) => {
							setSearch((prevState: any) => ({
								...prevState,
								search: e.target.value,
							}));
						}}
						startAdornment={
							<InputAdornment position='start'>
								<HiSearch />
							</InputAdornment>
						}
					/>
				</FormControl>

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
		</Box>
	);
};

export { HeaderTable };
