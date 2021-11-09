import { FC, Fragment, MouseEvent, useState } from "react";

import { Button, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";

import { HiOutlineUserCircle } from "react-icons/hi";

import { useStyles } from "./styles/Navbar.styles";
import { Link, useLocation } from "react-router-dom";
import { auth } from "api/auth";
import { api } from "api/api";
import { upperFirst } from "lodash";

const Navbar: FC<{}> = () => {
	const styles = useStyles();
	const location = useLocation();

	const [loading, setLoading] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const logout = () => {
		setLoading(true);

		api.candidate.logout().finally(() => {
			setTimeout(() => {
				document.location.href = "/login/candidate";
				setLoading(false);
			}, 750);
		});
	};

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	return (
		<Box component='header' className={styles.container}>
			<Link to='/'>
				<img src='/assets/images/logo.svg' alt='logo' />
			</Link>
			<Box component='nav' className={styles.menu}>
				<Link to='/' className={styles.menuItemLink}>
					<Button variant='text' className={`${styles.menuItem} ${isActive("/") ? styles.activeMenuItem : ""}`}>
						Home
					</Button>
				</Link>
				<Link to='/jobs' className={styles.menuItemLink}>
					<Button variant='text' className={`${styles.menuItem} ${isActive("/jobs") ? styles.activeMenuItem : ""}`}>
						Jobs
					</Button>
				</Link>
				{auth.isAuthenticated() && (
					<Button
						variant='outlined'
						disabled
						className={`${styles.menuItem} ${(styles as any)[auth.isLoggedInAs() + "Chip"]}`}
					>
						{upperFirst(auth.isLoggedInAs())}
					</Button>
				)}
				<Button
					aria-controls='basic-menu'
					aria-haspopup='true'
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
					startIcon={<HiOutlineUserCircle />}
					className={`${styles.menuItem} ${styles.dropdown}`}
				>
					{auth.isAuthenticated() ? auth.getEmail() : "Account"}
				</Button>
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "basic-button",
						className: styles.menuDropDown,
					}}
					PaperProps={{
						style: {
							minWidth: "150px",
						},
					}}
				>
					{auth.isAuthenticated() ? (
						<Fragment>
							{auth.isLoggedInAs("candidate") && (
								<Fragment>
									<Link className={styles.dropDownLink} to='/profile'>
										<MenuItem onClick={handleClose}>Profile</MenuItem>
									</Link>
									<Link className={styles.dropDownLink} to='/applications'>
										<MenuItem onClick={handleClose}>My applications</MenuItem>
									</Link>
								</Fragment>
							)}
							{auth.isLoggedInAs("company") && (
								<Fragment>
									<Link className={styles.dropDownLink} to='/my/company'>
										<MenuItem onClick={handleClose}>My company</MenuItem>
									</Link>
									<Link className={styles.dropDownLink} to='/company/offers'>
										<MenuItem onClick={handleClose}>My applications</MenuItem>
									</Link>
								</Fragment>
							)}
							{auth.isLoggedInAs("admin") && (
								<Link className={styles.dropDownLink} to='/admin/dashboard'>
									<MenuItem onClick={handleClose}>Dashboard</MenuItem>
								</Link>
							)}
							<Link className={`${styles.dropDownLink} ${styles.logoutLink}`} to='#'>
								<MenuItem disabled={loading} onClick={logout}>
									{loading ? "Logging out..." : "Log out"}
								</MenuItem>
							</Link>
						</Fragment>
					) : (
						<Fragment>
							<Link className={styles.dropDownLink} to='/login/candidate'>
								<MenuItem onClick={handleClose}>Log in</MenuItem>
							</Link>
							<Link className={styles.dropDownLink} to='/register/candidate'>
								<MenuItem onClick={handleClose}>Register</MenuItem>
							</Link>
							<Link className={styles.dropDownLink} to='/login/company'>
								<MenuItem onClick={handleClose}>I have a company</MenuItem>
							</Link>
						</Fragment>
					)}
				</Menu>
			</Box>
		</Box>
	);
};

export { Navbar };
