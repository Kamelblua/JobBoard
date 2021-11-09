// React
import { FC, useState } from "react";

// Components
import { Box } from "@mui/system";
import { Input } from "components/Elements/Input";
import { Button, IconButton, InputAdornment, Typography } from "@mui/material";
import { HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";

// Hooks
import { useStyles } from "./styles/Login.styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// Others
import { api } from "api/api";
import { LoginData } from "types/auth.d";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

interface LoginError {
	email?: string;
	password?: string;
}

const Login: FC<{}> = () => {
	// Load styles
	const styles = useStyles();

	// 3rd librairies hooks
	const { register, handleSubmit } = useForm();

	// States
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<LoginError>({});
	const [loading, setLoading] = useState(false);

	// Custom methods
	const onSubmit = (data: LoginData) => {
		setLoading(true);

		toast
			.promise(api.company.login(data), {
				pending: "Logging in...",
				success: {
					render() {
						return "Logged in! Redirecting...";
					},
					theme: "colored",
				},
				error: {
					render() {
						return "Something happened... Please try again.";
					},
					theme: "colored",
				},
			})
			.then((res) => {
				if (res.status === 201) {
					document.location.href = "/";
				}
			})
			.catch((err) => {
				if (err.response?.data.errors) {
					console.log(err.response?.data.errors);
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
				<title>Job Board | Login as company</title>
			</Helmet>

			<Link to='/'>
				<img className={styles.logo} src='/assets/images/company-logo.svg' alt='logo' />
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
							<Link style={{ margin: "15px 0px" }} to='/register/company'>
								Not yet registered ?
							</Link>
							<Button type='submit' className={styles.submitButton} disabled={loading} variant='outlined'>
								Login
							</Button>
						</Box>
					</form>
				</Box>
				<img className={styles.image} src='/assets/images/login-company.svg' alt='logo' />
			</Box>
		</Box>
	);
};

export { Login };
