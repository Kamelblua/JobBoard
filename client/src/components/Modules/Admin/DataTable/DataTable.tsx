import { cloneElement, FC } from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useStyles } from "./styles/DataTable.styles";
import { Action } from "api/types/shared";
import { get } from "lodash";

interface DataTableProps {
	headers: any[];
	items: any[];
	itemProperties: any[];
	actions?: Action[];
}

const DataTable: FC<DataTableProps> = ({ headers, items, itemProperties, actions }) => {
	const styles = useStyles();

	return (
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead className={styles.bgHeader}>
						<TableRow>
							{headers.map((h, k) => (
								<TableCell key={k} align='center'>
									{h}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((i, k) => (
							<TableRow key={k}>
								{itemProperties.map((p, k) => (
									<TableCell key={k} align='center'>
										{typeof p === "object" && typeof get(i, p.propertyName) === "object"
											? get(i, p.propertyName).map((i: any, k: any) => p.render(i))
											: typeof p === "object"
											? p.render(i)
											: get(i, p)}
									</TableCell>
								))}
								<TableCell className={styles.actionCell} align='center'>
									{actions &&
										actions.map((a: any, k) =>
											cloneElement(a.icon, {
												color: a.color,
												className: styles.action,
												onClick: () => {
													a.action(i);
												},
											})
										)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export { DataTable };
