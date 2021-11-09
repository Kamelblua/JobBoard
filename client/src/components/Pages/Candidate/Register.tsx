import { FC, useState } from "react";

import { Box } from "@mui/system";

import { Input } from "components/Elements/Input";
import { useStyles } from "./styles/Register.styles";
import { Button, IconButton, InputAdornment, Typography } from "@mui/material";
import { HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "api/api";
import { Helmet } from "react-helmet";

interface RegisterError {
	email?: string;
	password?: string;
	password_confirmation?: string;
	education_name?: string;
	graduation_year?: string;
}

const Register: FC<{}> = () => {
	const styles = useStyles();

	const { register, handleSubmit } = useForm();
	// States
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<RegisterError>({});
	const [loading, setLoading] = useState(false);
	// Custom methods
	const onSubmit = (data: any) => {
		setLoading(true);

		api.candidate
			.register(data)
			.then((res) => {
				if (res.status === 201) {
					document.location.href = "/login/candidate";
				}
				return false;
			})
			.catch((err) => {
				if (err.response?.data.errors) {
					setErrors(err.response?.data.errors);
				}
				return false;
			})
			.finally(() => {
				setLoading(false);
			});
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
				<title>Job Board | Register as candidate</title>
			</Helmet>

			<Link to='/'>
				<img className={styles.logo} src='/assets/images/candidate-logo.svg' alt='logo' />
			</Link>
			<Box className={styles.formContainer}>
				<Typography className={styles.title} variant='h4'>
					Register and start applying
				</Typography>
				<form className={styles.form} noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
					<Input
						error={typeof errors.email !== "undefined"}
						errors={errors}
						label='Email'
						register={register}
						identifier='email'
						className={styles.inputFull}
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
						className={styles.inputFull}
						endIcon={
							<InputAdornment position='end'>
								<PasswordIcon />
							</InputAdornment>
						}
					/>
					<Input
						error={typeof errors.password_confirmation !== "undefined"}
						errors={errors}
						label='Confirmation'
						type={showPassword ? "text" : "password"}
						register={register}
						identifier='password_confirmation'
						className={styles.inputFull}
					/>

					<Input
						error={typeof errors.education_name !== "undefined"}
						errors={errors}
						label='Education name'
						register={register}
						identifier='education_name'
						className={styles.inputHalf}
					/>
					<Input
						error={typeof errors.graduation_year !== "undefined"}
						errors={errors}
						label='Graduation year'
						register={register}
						identifier='graduation_year'
						className={styles.inputHalf}
					/>

					<Box className={styles.submitContainer}>
						<Link style={{ margin: "15px 0px" }} to='/login'>
							Already registered ?
						</Link>
						<Button type='submit' className={styles.submitButton} disabled={loading} variant='outlined'>
							Register
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export { Register };
