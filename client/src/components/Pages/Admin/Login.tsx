import { FC, useState } from "react";

import { Box } from "@mui/system";

import { Input } from "components/Elements/Input";
import { useStyles } from "./styles/Login.styles";
import { Button, IconButton, InputAdornment, Typography } from "@mui/material";
import { HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "api/api";
import { LoginData } from "types/auth.d";
import { Helmet } from "react-helmet";

interface LoginError {
	email?: string;
	password?: string;
}

const Login: FC<{}> = () => {
	const styles = useStyles();

	const { register, handleSubmit } = useForm();
	// States
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<LoginError>({});
	const [loading, setLoading] = useState(false);
	// Custom methods
	const onSubmit = (data: LoginData) => {
		setLoading(true);

		api.admin
			.login(data)
			.then((res) => {
				if (res.status === 201) {
					document.location.href = "/admin/dashboard";
				}
			})
			.catch((err) => {
				console.error(err);
				if (err.response?.data.errors) {
					setErrors(err.response?.data.errors);
				}
			})
			.finally(() => setLoading(false));
	};
	const changePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const PasswordIcon: FC<{}> = () => {
		return <IconButton onClick={changePasswordVisibility}>{showPassword ? <HiEyeOff /> : <HiEye />}</IconButton>;
	};

	return (
		<Box className={styles.container}>
			<Helmet>
				<title>Job Board | Login as administrator</title>
			</Helmet>

			<Link to='/'>
				<img className={styles.logo} src='/assets/images/admin-logo.svg' alt='logo' />
			</Link>
			<Box className={styles.flexContainer}>
				<Box className={styles.formContainer}>
					<Typography className={styles.title} variant='h4'>
						Login to your account
					</Typography>
					<form className={styles.form} noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
						<Input
							error={typeof errors.email !== "undefined"}
							errors={errors}
							label='Email'
							register={register}
							identifier='email'
							startIcon={
								<InputAdornment position='start'>
									<HiAtSymbol />
								</InputAdornment>
							}
						/>
						<Input
							error={typeof errors.password !== "undefined"}
							errors={errors}
							label='Password'
							type={showPassword ? "text" : "password"}
							register={register}
							identifier='password'
							endIcon={
								<InputAdornment position='end'>
									<PasswordIcon />
								</InputAdornment>
							}
						/>
						<Box className={styles.submitContainer}>
							<Button type='submit' className={styles.submitButton} disabled={loading} variant='outlined'>
								Login
							</Button>
						</Box>
					</form>
				</Box>
				<img className={styles.image} src='/assets/images/login-admin.svg' alt='logo' />
			</Box>
		</Box>
	);
};

export { Login };
