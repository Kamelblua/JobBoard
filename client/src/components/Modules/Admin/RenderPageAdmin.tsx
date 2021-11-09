import { FC, useState } from "react";
import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles/RenderPageAdmin.styles";
import { Drawer } from "components/Modules/Admin/Drawer";
import { useLocation } from "react-router";
import { upperFirst } from "lodash";

interface RenderPageAdminProps {
	page: JSX.Element;
	window?: () => Window;
}

const drawerWidth = 240;

const RenderPageAdmin: FC<RenderPageAdminProps> = ({ page, window }) => {
	const styles = useStyles();

	const location = useLocation();

	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const displayHeader = (): string => {
		const splittedPathname = location.pathname.split("/");

		return upperFirst(splittedPathname[splittedPathname.length - 1]);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: {
						sm: `calc(100% - ${drawerWidth}px)`,
						boxShadow: "none!important",
						borderBottom: "1px solid var(--main-gray)",
					},
					ml: { sm: `${drawerWidth}px`, boxShadow: "none!important" },
				}}
			>
				<Toolbar className={styles.headerContent}>
					<IconButton
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{
							mr: 2,
							display: {
								sm: "none",
							},
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' sx={{ color: "red" }} noWrap component='div'>
						{displayHeader()}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar sx={{ height: "80px", boxShadow: "none!important" }} />
				{page}
			</Box>
		</Box>
	);
};

export { RenderPageAdmin };
