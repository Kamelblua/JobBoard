// React
import { FC, useEffect, useState } from "react";

// Components
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";
// Hooks
import { useStyles } from "./styles/Register.styles";
import { useForm } from "react-hook-form";

// Others
import { api } from "api/api";
import { RegisterCompanyData } from "types/auth.d";
import { Link } from "react-router-dom";
import { EmployeesCountRange } from "types/company";
import { Input } from "components/Elements/Input";
import { Industry, Type } from "types/jobs";
import { Helmet } from "react-helmet";

export interface RegisterError {
	email?: string;
	password?: string;
	password_confirmation?: string;

	name?: string;
	city?: string;
	country?: string;
	address?: string;
	postal_code?: string;
	type_id?: number;
	industry_id?: number;
	employees_range?: EmployeesCountRange;
	contact_phone?: string;
	contact_email?: string;
}

const Register: FC<{}> = () => {
	// Load styles
	const styles = useStyles();

	// Hooks
	const { register, handleSubmit } = useForm();

	// States
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<RegisterError>({});
	const [selectedTypeId, setSelectedTypeId] = useState<number | null>(null);
	const [selectedIndustryId, setSelectedIndustryId] = useState<number | null>(null);
	const [employeeRange, setEmployeeRange] = useState<string>("1-10");

	const [industries, setIndustries] = useState<Industry[]>([]);
	const [types, setTypes] = useState<Type[]>([]);

	// Custom methods
	const onSubmit = (data: RegisterCompanyData) => {
		data.employees_range = employeeRange;
		if (selectedIndustryId && selectedTypeId) {
			data.industry = selectedIndustryId;
			data.type = selectedTypeId;
		}

		api.company
			.register(data)
			.then((res) => {
				if (res.status === 201) {
					document.location.href = "/login/company";
				}
				return false;
			})
			.catch((err) => {
				if (err.response?.data.errors) {
					setErrors(err.response?.data.errors);
				}
				return false;
			});
	};

	const changePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const PasswordIcon: FC<{}> = () => {
		return <IconButton onClick={changePasswordVisibility}>{showPassword ? <HiEyeOff /> : <HiEye />}</IconButton>;
	};

	useEffect(() => {
		api.shared.industries().then((res) => {
			setIndustries(res.data.items);
		});
		api.shared.types().then((res) => {
			setTypes(res.data.items);
		});
	}, []);

	return (
		<Box className={styles.container}>
			<Helmet>
				<title>Job Board | Register as company</title>
			</Helmet>

			<Link to='/'>
				<img className={styles.logo} src='/assets/images/company-logo.svg' alt='logo' />
			</Link>
			<Box className={styles.formContainer}>
				<form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
					<Typography variant='h4'>Create your credentials</Typography>
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
						className={styles.inputFull}
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
						className={styles.inputHalf}
					/>
					<Input
						error={typeof errors.password_confirmation !== "undefined"}
						errors={errors}
						label='Password confirmation'
						type={showPassword ? "text" : "password"}
						register={register}
						identifier='password_confirmation'
						className={styles.inputHalf}
					/>

					<Typography variant='h4'>Your company's details</Typography>
					<Input
						error={typeof errors.name !== "undefined"}
						errors={errors}
						label='Name'
						register={register}
						identifier='name'
						className={styles.inputFull}
					/>
					<Input
						error={typeof errors.contact_email !== "undefined"}
						errors={errors}
						label='Contact email'
						register={register}
						identifier='contact_email'
						className={styles.inputHalf}
					/>
					<Input
						error={typeof errors.contact_phone !== "undefined"}
						errors={errors}
						label='Contact phone'
						register={register}
						identifier='contact_phone'
						className={styles.inputHalf}
					/>

					<Input
						error={typeof errors.address !== "undefined"}
						errors={errors}
						label='Address'
						register={register}
						identifier='address'
						className={styles.inputFull}
					/>
					<Input
						error={typeof errors.city !== "undefined"}
						errors={errors}
						label='City'
						register={register}
						identifier='city'
						className={styles.inputThird}
					/>
					<Input
						error={typeof errors.country !== "undefined"}
						errors={errors}
						label='Country'
						register={register}
						identifier='country'
						className={styles.inputThird}
					/>
					<Input
						error={typeof errors.postal_code !== "undefined"}
						errors={errors}
						label='Postal code'
						register={register}
						identifier='postal_code'
						className={styles.inputThird}
					/>

					<FormControl>
						<InputLabel id='demo-simple-select-helper-label'>Industry</InputLabel>
						<Select
							labelId='demo-simple-select-helper-label'
							id='demo-simple-select-helper'
							label='Industry'
							onChange={(e: any) => {
								setSelectedIndustryId(e.target.value);
							}}
						>
							{industries.map((i, k) => (
								<MenuItem key={k} value={i.id}>
									{i.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id='demo-simple-select-helper-label'>Type</InputLabel>
						<Select
							labelId='demo-simple-select-helper-label'
							id='demo-simple-select-helper'
							label='Type'
							onChange={(e: any) => {
								setSelectedTypeId(e.target.value);
							}}
						>
							{types.map((t, k) => (
								<MenuItem key={k} value={t.id}>
									{t.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id='demo-simple-select-helper-label'>Employee range</InputLabel>
						<Select
							labelId='demo-simple-select-helper-label'
							id='demo-simple-select-helper'
							label='Employee range'
							value={employeeRange}
							onChange={(e: any) => {
								setEmployeeRange(e.target.value);
							}}
						>
							<MenuItem value='1-10'>1-10</MenuItem>
							<MenuItem value='11-100'>11-100</MenuItem>
							<MenuItem value='101-1000'>101-1000</MenuItem>
							<MenuItem value='1000+'>1000+</MenuItem>
						</Select>
					</FormControl>

					<Button type='submit'>Submit</Button>
				</form>
			</Box>
		</Box>
	);
};

export { Register };
