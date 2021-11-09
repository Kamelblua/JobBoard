// React
import { FC, useEffect, useState } from "react";

// Components
import { Box } from "@mui/system";
import { Button, CircularProgress, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";
import { DataTable } from "components/Modules/Admin/DataTable/DataTable";
import { HeaderTable } from "components/Modules/Admin/DataTable/HeaderTable";
import { Paginate } from "components/Elements/Paginate";
import { HiEye, HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

// Hooks
import { useStyles } from "./styles/Advertisements.styles";
import { Redirect, useHistory } from "react-router";

// Other
import { Search } from "types/api.d";
import { api } from "api/api";
import { Action } from "api/types/shared";
import { Company } from "types/company";
import moment from "moment";
import { Helmet } from "react-helmet";

interface Result {
	total: number;
	count: number;
	items: Company[];
}

const itemProperties = [
	"id",
	"name",
	"industry",
	"type",
	{
		propertyName: "created_at",
		render: function (item: string) {
			return moment(item).format("DD-MM-YYYY");
		},
	},
];

const Companies: FC<{}> = () => {
	const styles = useStyles();

	let history = useHistory();

	const [companies, setCompanies] = useState<Company[]>([]);

	const [search, setSearch] = useState<Search>({
		page: 1,
		limit: 10,
		search: "",
	});

	const headers = ["#", "Name", "Industry", "Type", "Creation date", "Actions"];

	const [result, setResult] = useState<Result | null>(null);
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false);
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

	const handleClose = () => {
		setOpen(false);
	};

	const deleteCompany = () => {
		if (selectedItemId) {
			setLoading(true);

			api.company
				.delete(selectedItemId)
				.then((res) => {
					console.log(res);
					setOpen(false);
					setSearch((prevState: any) => ({
						...prevState,
						page: 1,
					}));
				})
				.catch((err) => {
					console.error(err);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	const actions: Action[] = [
		{
			name: "View",
			label: "view",
			icon: <HiEye />,
			color: "var(--success)",
			action: function (item: any) {
				return <Redirect to={`/admin/company/${item.id}`} />;
			},
		},
		{
			name: "Edit",
			label: "edit",
			icon: <HiPencilAlt />,
			color: "var(--warning)",
			action: function (item: any) {
				return history.push(`/admin/company/${item.id}/edit`);
			},
		},
		{
			name: "Delete",
			label: "delete",
			icon: <HiOutlineTrash />,
			color: "var(--error)",
			action: function (item: any) {
				setSelectedItemId(item.id);
				setOpen(true);
			},
		},
	];

	useEffect(() => {
		setLoading(true);
		api.admin
			.getAllCompanies(search)
			.then((res) => {
				console.log(res.data);
				setCompanies(res.data.items);
				setResult(res.data);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => setLoading(false));
	}, [search]);

	return (
		<Box sx={{ width: "100%", overflow: "hidden" }}>
			<Helmet>
				<title>Job Board | Admin Dashboard | Companies</title>
			</Helmet>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Delete this company ?</DialogTitle>
				<DialogActions>
					<Button color='primary' variant='outlined' onClick={handleClose}>
						Close
					</Button>
					<Button disabled={loading} color='error' variant='outlined' onClick={deleteCompany} autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>

			<Typography className={styles.title} variant='h6'>
				Advertisement
			</Typography>
			{loading && (
				<Box className={styles.loadingResultContainer}>
					<CircularProgress size={50} />
				</Box>
			)}
			<HeaderTable search={search} setSearch={setSearch} />
			<DataTable headers={headers} items={companies} itemProperties={itemProperties} actions={actions} />
			{result && <Paginate search={search} setSearch={setSearch} total={result.total} />}
		</Box>
	);
};

export { Companies };
