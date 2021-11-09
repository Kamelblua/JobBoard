import { FC } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface DataTableProps {
	headers: any[];
	items: any[];
	itemProperties: any[];
}

const DataTable: FC<DataTableProps> = ({ headers, items, itemProperties }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						{headers.map((th, k) => (
							<TableCell key={k}>{th}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((i, k) => (
						<TableRow key={k} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							{itemProperties.map((ip, k) => (
								<TableCell key={k} component='th' scope='row'>
									{i[ip]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export { DataTable };
