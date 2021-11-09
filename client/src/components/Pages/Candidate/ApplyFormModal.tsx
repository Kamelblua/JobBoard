// React
import { FC, useContext, useEffect, Fragment, useRef, useState } from "react";

// Components
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { HiOutlineUpload, HiOutlineX } from "react-icons/hi";

// Hooks
import { GlobalContext } from "providers/GlobalContext";
import { useStyles } from "./styles/ApplyFormModal.styles";
import { useForm, SubmitHandler } from "react-hook-form";

// Others
import { api } from "api/api";
import { auth } from "api/auth";

type Data = {
	email: string;
	graduation_year: string;
	education_name: string;
	more: string;
	password: string;
};

interface LoginError {
	email?: string;
	graduation_year?: string;
	education_name?: string;
	more?: string;
	resume?: string;
	password?: string;
}

const ApplyFormModal: FC<{}> = () => {
	const styles = useStyles();

	const embedRef = useRef<any>(null);
	const inputRef = useRef<any>(null);

	const { state, setState } = useContext(GlobalContext);
	const { register, handleSubmit } = useForm<Data>();
	const [file, setFile] = useState<any>(null);
	const [errors, setErrors] = useState<LoginError>({});

	useEffect(() => {
		if (state?.openModal) {
			document.body.style.overflowY = "hidden";
		}
	}, [state]);

	const onSubmit: SubmitHandler<Data> = (data) => {
		console.log(data, file);

		let formData = new FormData();

		if (file) {
			formData.append("resume", file);
		}
		Object.keys(data).forEach((i) => {
			formData.append(i, (data as any)[i]);
		});

		api.candidate
			.apply(state!?.selectedAdvertisement!?.id, formData)
			.then((res) => {
				if (setState) {
					setState({ ...state, openModal: false, selectedAdvertisement: null });
				}
			})
			.catch((err) => {
				console.error(err);
				if (err.response?.data.errors) {
					setErrors(err.response?.data.errors);
				}
			});
	};

	const close = (e: any) => {
		if (setState && e.target.dataset.utility === "close") {
			document.body.style.overflowY = "auto";
			setState({ ...state, openModal: false, selectedAdvertisement: null });
		}
	};

	const handleChange = (e: any) => {
		setFile(e.target.files[0]);

		const reader = new FileReader();

		reader.addEventListener(
			"load",
			function () {
				embedRef.current.src = reader.result;
			},
			false
		);

		reader.readAsDataURL(e.target.files[0]);
	};

	return (
		<Box
			onClick={(e: any) => {
				close(e);
			}}
			className={`${styles.overlay} ${!state?.openModal && styles.closed}`}
			data-utility='close'
		>
			<Box className={styles.container}>
				<IconButton
					onClick={(e: any) => {
						close(e);
					}}
					data-utility='close'
					className={styles.closeButton}
					color='error'
					component='span'
				>
					<HiOutlineX />
				</IconButton>
				<Typography variant='h3'>Apply to {state?.selectedAdvertisement?.title}</Typography>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Fragment>
						{auth.isUnauthenticated() && (
							<Fragment>
								<TextField
									className={`${styles.input} ${styles.inputFull}`}
									id='email'
									label='Email address'
									variant='standard'
									{...register("email")}
									helperText={errors.email}
									FormHelperTextProps={{ sx: { color: "red" } }}
								/>
								<TextField
									className={`${styles.input} ${styles.inputHalf}`}
									id='password'
									label='Password'
									variant='standard'
									{...register("password")}
									helperText={errors.password}
									FormHelperTextProps={{ sx: { color: "red" } }}
								/>
								<TextField
									className={`${styles.input} ${styles.inputHalf}`}
									id='graduation_year'
									label='Graduation year'
									variant='standard'
									{...register("graduation_year")}
									helperText={errors.graduation_year}
									FormHelperTextProps={{ sx: { color: "red" } }}
								/>
								<TextField
									className={`${styles.input} ${styles.inputHalf}`}
									id='education_name'
									label='Education name'
									variant='standard'
									{...register("education_name")}
									helperText={errors.education_name}
									FormHelperTextProps={{ sx: { color: "red" } }}
								/>
							</Fragment>
						)}

						<TextField
							className={`${styles.input} ${styles.inputFull}`}
							id='more'
							label='More'
							placeholder='More ...'
							multiline
							variant='standard'
							{...register("more")}
							helperText={errors.more}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>

						<label htmlFor='file-upload'>
							<input
								onChange={handleChange}
								style={{ display: "none" }}
								ref={inputRef}
								accept='application/pdf'
								id='file-upload'
								type='file'
							/>
							<Box>
								<Button
									onClick={() => {
										inputRef.current?.click();
									}}
									variant='outlined'
									className={styles.uploadButton}
									endIcon={<HiOutlineUpload />}
								>
									Choose resume
								</Button>
							</Box>
						</label>
						<span className={styles.error}>{errors.resume}</span>
						{file && <embed className={styles.filePreview} ref={embedRef} type='application/pdf'></embed>}
						<Button className={styles.submitButton} type='submit' variant='outlined' color='success'>
							Submit
						</Button>
					</Fragment>
				</form>
			</Box>
		</Box>
	);
};

export { ApplyFormModal };
