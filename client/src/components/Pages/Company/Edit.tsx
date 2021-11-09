// React
import { FC, useState, useRef, useEffect, Fragment } from "react";

// Components
import {
	Avatar,
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from "@mui/material";

// Hooks
import { useStyles } from "./styles/Edit.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

// Other
import { CompanyUpdate, EmployeesCountRange } from "types/company.d";
import { api } from "api/api";
import { Industry, Type } from "types/jobs";
import _ from "lodash";

type Data = {
	type_id: number;
	industry_id: number;
	logo: File;
	name: string;
	employees_range: EmployeesCountRange;
	city: string;
	country: string;
	address: string;
	postal_code: string;
	website_link?: string;
	youtube_link?: string;
	instagram_link?: string;
	twitter_link?: string;
	linkedin_link?: string;
	facebook_link?: string;
	contact_phone: string;
	contact_email: string;
};

interface UpdateError {
	type?: string;
	industry?: string;
	logo?: string;
	name?: string;
	email?: string;
	employees_range?: string;
	city?: string;
	country?: string;
	address?: string;
	postal_code?: string;
	website_link?: string;
	youtube_link?: string;
	instagram_link?: string;
	twitter_link?: string;
	linkedin_link?: string;
	facebook_link?: string;
	contact_phone?: string;
	contact_email?: string;
}

const employeesCountRange = ["1-10", "11-100", "101-1000", "1000+"];

const Edit: FC<{}> = () => {
	const styles = useStyles();

	const { register, handleSubmit } = useForm();

	const imgRef = useRef<any>(null);
	const inputRef = useRef<any>(null);

	const [types, setTypes] = useState<Type[]>([]);
	const [industries, setIndustries] = useState<Industry[]>([]);
	const [company, setCompany] = useState<CompanyUpdate>({});
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState<UpdateError>({});
	const [file, setFile] = useState<any>(null);

	const onSubmit: SubmitHandler<Data> = (data) => {
		const id = toast.loading("Updating...");

		let formData = new FormData();

		if (file) {
			formData.append("logo", file);
		}
		Object.keys(data).forEach((i) => {
			formData.append(i, (data as any)[i]);
		});

		api.company
			.update(formData)
			.then((res) => {
				toast.update(id, {
					type: "success",
					render: "Your details have been updated!",
					isLoading: false,
					theme: "colored",
					autoClose: 5000,
				});
			})
			.catch((err) => {
				if (err.response?.status === 500) {
					toast.update(id, {
						type: "error",
						render: "500: Server error. Please try again later.",
						isLoading: false,
						theme: "colored",
						autoClose: 5000,
					});
					return;
				}
				if (err.response?.data.errors) {
					toast.update(id, {
						type: "warning",
						render: "There are some errors.",
						isLoading: false,
						theme: "colored",
						autoClose: 1000,
					});
					setErrors(err.response?.data.errors);
				}
			});
	};

	const handleChange = (e: any) => {
		setFile(e.target.files[0]);

		if (imgRef.current.querySelector("img")) {
			imgRef.current.querySelector("img").src = window.URL.createObjectURL(e.target.files[0]);
		} else {
			imgRef.current.innerHTML = "";
			let img = document.createElement("img");
			img.src = window.URL.createObjectURL(e.target.files[0]);
			img.classList.add("MuiAvatar-img");
			img.classList.add("css-1pqm26d-MuiAvatar-img");
			imgRef.current.append(img);
		}
	};

	useEffect(() => {
		setLoading(true);

		api.shared.industries().then((res) => {
			setIndustries(res.data.items);
		});
		api.shared.types().then((res) => {
			setTypes(res.data.items);
		});

		api.company
			.profile()
			.then((res) => {
				setCompany(res.data);
			})
			.catch((err) => {
				toast.error("500: Server error. Please try again later.", {
					type: "error",
					isLoading: false,
					theme: "colored",
					autoClose: 5000,
				});
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<Box className={styles.container}>
			<Box className={styles.leftContainer}>
				<Avatar src={company?.logo?.location} ref={imgRef} className={styles.logo} alt={company?.name} />
				<label htmlFor='file-upload'>
					<input
						onChange={handleChange}
						style={{ display: "none" }}
						ref={inputRef}
						accept='application/png, application/jpg, application/jpeg'
						id='file-upload'
						type='file'
					/>
					<Box>
						<Button
							onClick={() => {
								inputRef.current?.click();
							}}
							variant='outlined'
						>
							Update your logo
						</Button>
					</Box>
				</label>

				{!loading && (
					<Fragment>
						<TextField
							className={`${styles.input} ${styles.inputFull}`}
							id='name'
							label='Name'
							defaultValue={company.name}
							variant='standard'
							{...register("name")}
							helperText={errors.name}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputFull}`}
							id='email'
							label='Email address'
							defaultValue={company.credentials?.email}
							variant='standard'
							{...register("email")}
							helperText={errors.email}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
					</Fragment>
				)}
			</Box>
			<Box className={styles.rightContainer}>
				{!loading && (
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<TextField
							className={`${styles.input} ${styles.inputFull}`}
							id='address'
							label='Address'
							defaultValue={company.address}
							variant='standard'
							{...register("address")}
							helperText={errors.address}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>

						<TextField
							className={`${styles.input} ${styles.inputThird}`}
							id='city'
							label='City'
							defaultValue={company.city}
							variant='standard'
							{...register("city")}
							helperText={errors.city}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputThird}`}
							id='country'
							label='Country'
							defaultValue={company.country}
							variant='standard'
							{...register("country")}
							helperText={errors.country}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputThird}`}
							id='postal_code'
							label='Postal code'
							defaultValue={company.postal_code}
							variant='standard'
							{...register("postal_code")}
							helperText={errors.postal_code}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>

						<Box className={styles.selectContainer}>
							<FormControl>
								<InputLabel
									sx={{
										margin: "15px",
									}}
									id='demo-simple-select-label'
								>
									Employees range
								</InputLabel>
								<Select
									className={styles.select}
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={company.employees_range}
									label='Employees range'
									{...register("employees_range")}
									onChange={(event: SelectChangeEvent) => {
										setCompany((prevState: CompanyUpdate) => ({
											...prevState,
											employees_range: event.target.value as EmployeesCountRange,
										}));
									}}
								>
									{employeesCountRange.map((v, k) => (
										<MenuItem value={v} key={k}>
											{v}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel
									sx={{
										margin: "15px",
									}}
									id='demo-simple-select-label'
								>
									Type
								</InputLabel>
								<Select
									className={styles.select}
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={company.type?.id.toString()}
									label='Type'
									{...register("type")}
									onChange={(event: SelectChangeEvent) => {
										setCompany((prevState: CompanyUpdate) => ({
											...prevState,
											type: _.find(types, { id: event.target.value }) as any,
										}));
									}}
								>
									{types.map((v: any, k: number) => (
										<MenuItem value={v.id} key={k}>
											{v.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel
									sx={{
										margin: "15px",
									}}
									id='demo-simple-select-label'
								>
									Industry
								</InputLabel>
								<Select
									className={styles.select}
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={company.industry?.id.toString()}
									label='Industry'
									{...register("industry")}
									onChange={(event: SelectChangeEvent) => {
										setCompany((prevState: CompanyUpdate) => ({
											...prevState,
											industry: _.find(industries, { id: event.target.value }) as any,
										}));
									}}
								>
									{industries.map((v: any) => (
										<MenuItem value={v.id} key={v.id}>
											{v.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='website_link'
							label='Website link'
							defaultValue={company.website_link}
							variant='standard'
							{...register("website_link")}
							helperText={errors.website_link}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='facebook_link'
							label='Facebook link'
							defaultValue={company.facebook_link}
							variant='standard'
							{...register("facebook_link")}
							helperText={errors.facebook_link}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='linkedin_link'
							label='Linkedin link'
							defaultValue={company.linkedin_link}
							variant='standard'
							{...register("linkedin_link")}
							helperText={errors.linkedin_link}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='twitter_link'
							label='Twitter link'
							defaultValue={company.twitter_link}
							variant='standard'
							{...register("twitter_link")}
							helperText={errors.twitter_link}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='youtube_link'
							label='Youtube link'
							defaultValue={company.youtube_link}
							variant='standard'
							{...register("youtube_link")}
							helperText={errors.youtube_link}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='instagram_link'
							label='Instagram link'
							defaultValue={company.instagram_link}
							variant='standard'
							{...register("instagram_link")}
							helperText={errors.instagram_link}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>

						<Button type='submit' className={styles.submitButton}>
							Update
						</Button>
					</form>
				)}
			</Box>
		</Box>
	);
};

export { Edit };
