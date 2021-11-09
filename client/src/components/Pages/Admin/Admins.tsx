// React
import { FC, useEffect, useState } from "react";

// Components
import { Box } from "@mui/system";
import { Button, CircularProgress, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";
import { DataTable } from "components/Modules/Admin/DataTable/DataTable";
import { HeaderTable } from "components/Modules/Admin/DataTable/HeaderTable";
import { Paginate } from "components/Elements/Paginate";

// Hooks
import { useStyles } from "./styles/Advertisements.styles";

// Other
import { Search } from "types/api.d";
import { api } from "api/api";
import { Admin } from "types/admin";
import moment from "moment";
import { Helmet } from "react-helmet";

interface Result {
	total: number;
	count: number;
	items: Admin[];
}

const itemProperties = [
	"id",
	"email",
	{
		propertyName: "created_at",
		render: function (item: string) {
			return moment(item).format("DD-MM-YYYY");
		},
	},
];

const Admins: FC<{}> = () => {
	const styles = useStyles();

	const [admins, setAdmins] = useState<Admin[]>([]);

	const [search, setSearch] = useState<Search>({
		page: 1,
		limit: 10,
		search: "",
	});

	const headers = ["#", "Email", "Creation date"];

	const [result, setResult] = useState<Result | null>(null);
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		setLoading(true);
		api.admin
			.getAllAdmins(search)
			.then((res) => {
				console.log(res.data);
				setAdmins(res.data.items);
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
				<title>Job Board | Admin Dashboard | Admins</title>
			</Helmet>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Delete this advertisement ?</DialogTitle>
				<DialogActions>
					<Button color='error' variant='outlined' onClick={handleClose}>
						Close
					</Button>
					<Button color='success' variant='outlined' onClick={handleClose} autoFocus>
						Agree
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
			<DataTable headers={headers} items={admins} itemProperties={itemProperties} />
			{result && <Paginate search={search} setSearch={setSearch} total={result.total} />}
		</Box>
	);
};

export { Admins };
