import { FC } from "react";

import {
	Box,
	Button,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Drawer as MUIDrawer,
} from "@mui/material";
import { useLocation } from "react-router";
import { HiOfficeBuilding, HiOutlineHome, HiShieldCheck, HiUserCircle } from "react-icons/hi";
import { RiAdvertisementFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useStyles } from "./styles/Drawer.styles";

interface DrawerProps {
	window?: () => Window;
	handleDrawerToggle: any;
	mobileOpen: boolean;
}

const drawerWidth = 240;

const Drawer: FC<DrawerProps> = ({ handleDrawerToggle, mobileOpen, window }) => {
	const styles = useStyles();

	const location = useLocation();

	const items = [
		{
			label: "Dashboard",
			link: "/admin/dashboard",
			icon: <HiOutlineHome className={styles.icon} />,
		},
		{
			label: "Candidates",
			link: "/admin/candidates",
			icon: <HiUserCircle className={styles.icon} />,
		},
		{
			label: "Companies",
			link: "/admin/companies",
			icon: <HiOfficeBuilding className={styles.icon} />,
		},
		{
			label: "Admins",
			link: "/admin/admins",
			icon: <HiShieldCheck className={styles.icon} />,
		},
		{
			label: "Advertisements",
			link: "/admin/advertisements",
			icon: <RiAdvertisementFill className={styles.icon} />,
		},
	];

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<div>
			<Toolbar className={styles.headerSidebar}>
				<Link to='/'>
					<img src='/assets/images/logo-backoffice.svg' alt='backoffice' className={styles.img} />
				</Link>
			</Toolbar>
			<Divider />
			<List>
				<Box>
					{items.map((i: any, k) => (
						<ListItem key={k} className={styles.listItem}>
							<ListItemText primaryTypographyProps={{ sx: { width: "100%" } }} className={styles.itemText}>
								<Link to={i.link} className={styles.itemLink}>
									<Button
										variant='text'
										className={`${styles.button} ${isActive(i.link) ? styles.activeButton : ""}`}
										fullWidth
									>
										<ListItemIcon className={styles.listItemIcon}>{i.icon}</ListItemIcon>
										<Box className={styles.text}>{i.label}</Box>
									</Button>
								</Link>
							</ListItemText>
						</ListItem>
					))}
				</Box>
			</List>
		</div>
	);

	return (
		<Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
			<MUIDrawer
				container={container}
				variant='temporary'
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
						backgroundColor: "var(--main-red)!important",
						borderRight: "3px solid var(--main-separator-gray)!important",
						border: "none!important",
					},
				}}
			>
				{drawer}
			</MUIDrawer>
			<MUIDrawer
				variant='permanent'
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
						backgroundColor: "var(--main-red)!important",
						borderRight: "10px solid var(--main-separator-gray)!important",
					},
				}}
				open
			>
				{drawer}
			</MUIDrawer>
		</Box>
	);
};

export { Drawer };
