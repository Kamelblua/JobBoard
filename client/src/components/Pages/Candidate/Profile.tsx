// React
import { FC, Fragment, useEffect, useRef, useState } from "react";

// Components
import { Box, Button, Skeleton, TextField, Typography } from "@mui/material";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

// Hookes
import { useStyles } from "./styles/Profile.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

// Other
import { api } from "api/api";
import { CandidateProfile } from "types/candidate.d";
import { ProfileSkeleton } from "../Skeletons/ProfileSkeleton";
import { Helmet } from "react-helmet";

type Data = {
	email: string;
	graduation_year: string;
	education_name: string;
};

interface UpdateError {
	email?: string;
	graduation_year?: string;
	education_name?: string;
	resume?: string;
}

const Profile: FC<{}> = () => {
	const styles = useStyles();

	const { register, handleSubmit } = useForm();

	const embedRef = useRef<any>(null);
	const inputRef = useRef<any>(null);

	const [loading, setLoading] = useState(true);
	const [hover, setHover] = useState(false);
	const [errors, setErrors] = useState<UpdateError>({});
	const [file, setFile] = useState<any>(null);
	const [profile, setProfile] = useState<CandidateProfile | null>(null);

	const onSubmit: SubmitHandler<Data> = (data) => {
		const id = toast.loading("Updating...");

		let formData = new FormData();

		if (file) {
			formData.append("resume", file);
		}
		Object.keys(data).forEach((i) => {
			formData.append(i, (data as any)[i]);
		});

		api.candidate
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

	useEffect(() => {
		setLoading(true);

		api.candidate
			.profile()
			.then((res) => {
				setProfile(res.data);
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
		<Helmet>
			<title>Job Board | My profile</title>
		</Helmet>

			{(file || profile?.resume) && !loading ? (
				<Box className={styles.filePreviewContainer}>
					<embed
						className={styles.filePreview}
						ref={embedRef}
						src={profile?.resume?.location}
						type='application/pdf'
					></embed>
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
							>
								Choose another file
							</Button>
						</Box>
					</label>
				</Box>
			) : !file && !profile?.resume && loading ? (
				<Skeleton className={styles.previewBoxSkeleton} variant='rectangular' width='50%' height={750} />
			) : (
				<Box
					className={styles.uploadBox}
					onMouseEnter={() => {
						setHover(true);
					}}
				>
					<label htmlFor='contained-button-file'>
						<input
							onChange={handleChange}
							style={{ display: "none" }}
							accept='application/pdf'
							id='contained-button-file'
							type='file'
						/>
						<Box
							className={`${styles.uploadOverlay} ${hover && styles.active}`}
							onMouseLeave={() => {
								setHover(false);
							}}
						>
							<FiUpload fontSize={50} />
							<Typography className={styles.uploadText} variant='caption'>
								Choose file
							</Typography>
						</Box>
					</label>

					<AiOutlineFilePdf fontSize={50} />
					<Typography className={styles.uploadText} variant='caption'>
						Upload your resume
					</Typography>
				</Box>
			)}
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{profile && !loading ? (
					<Fragment>
						<TextField
							className={`${styles.input} ${styles.inputFull}`}
							id='email'
							label='Email address'
							variant='standard'
							{...register("email")}
							defaultValue={profile?.email}
							helperText={errors.email}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='graduation_year'
							label='Graduation year'
							variant='standard'
							{...register("graduation_year")}
							defaultValue={profile?.graduation_year}
							helperText={errors.graduation_year}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<TextField
							className={`${styles.input} ${styles.inputHalf}`}
							id='education_name'
							label='Education name'
							variant='standard'
							{...register("education_name")}
							defaultValue={profile?.education_name}
							helperText={errors.education_name}
							FormHelperTextProps={{ sx: { color: "red" } }}
						/>
						<Button className={styles.updateButton} type='submit' variant='outlined' color='success'>
							Update
						</Button>
					</Fragment>
				) : (
					<ProfileSkeleton />
				)}
			</form>
		</Box>
	);
};

export { Profile };
