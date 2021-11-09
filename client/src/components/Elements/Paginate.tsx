import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, FC } from "react";
import { useStyles } from "./styles/Paginate.styles";

import { Search } from "types/api.d";

interface PaginateProps {
	search: Search;
	setSearch: Function;
	total: number;
}

const Paginate: FC<PaginateProps> = ({ search, setSearch, total }) => {
	const styles = useStyles();

	const handleChange = (event: ChangeEvent<unknown>, value: number) => {
		setSearch((prevState: any) => ({
			...prevState,
			page: value,
		}));
	};

	return (
		<Box className={styles.container}>
			<Pagination
				shape='rounded'
				page={search.page}
				showFirstButton={search.page > 10}
				showLastButton={search.page < Math.floor(total / search.limit) - 9}
				size='medium'
				className={styles.root}
				onChange={handleChange}
				count={Math.ceil(total / search.limit)}
			/>
		</Box>
	);
};

export { Paginate };
