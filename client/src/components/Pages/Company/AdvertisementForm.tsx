import { FC, useState, useEffect } from "react";

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText } from "@mui/material";

import { useStyles } from "./styles/AdvertisementForm.styles";
import { Language, Position } from "types/jobs";
import { CreateAdvertisementData } from "types/advertisement.d";
import { useForm } from "react-hook-form";
import { api } from "api/api";
import { Input } from "components/Elements/Input";
import { CustomSelect } from "components/Elements/CustomSelect";

interface CreateError {
	title?: string;
	text?: string;
	remote?: string;
	city?: string;
	positions?: string;
	languages?: string;
}

const AdvertisementForm: FC<{}> = () => {
	const styles = useStyles();

	const { register, handleSubmit } = useForm();

	// States
	const [errors, setErrors] = useState<CreateError>({});
	const [selectedPositionIds, setSelectedPositionIds] = useState([]);
	const [selectedLanguageIds, setSelectedLanguageIds] = useState([]);
	const [positions, setPositions] = useState<Position[]>([]);
	const [languages, setLanguages] = useState<Language[]>([]);
	const [loading, setLoading] = useState(false);

	// Custom methods
	const onSubmit = (data: CreateAdvertisementData) => {
		setLoading(true);

		data.positions = selectedPositionIds;
		data.languages = selectedLanguageIds;

		api.company
			.add(data)
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

	useEffect(() => {
		api.shared.positions().then((res) => {
			setPositions(res.data.items);
		});
		api.shared.languages().then((res) => {
			setLanguages(res.data.items);
		});
	}, []);

	return (
		<Box>
			<form className={styles.form} noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<Input
					error={typeof errors.title !== "undefined"}
					errors={errors}
					label='Title'
					register={register}
					identifier='title'
					className={`${styles.input} ${styles.inputFull}`}
				/>
				<Input
					error={typeof errors.text !== "undefined"}
					errors={errors}
					label='Description'
					register={register}
					identifier='text'
					multiline
					className={`${styles.input} ${styles.inputFull}`}
				/>

				<Input
					error={typeof errors.city !== "undefined"}
					errors={errors}
					label='City'
					register={register}
					identifier='city'
					multiline
					className={`${styles.input} ${styles.inputHalf}`}
				/>
				<Box className={`${styles.input} ${styles.inputHalf}`}>
					<FormControl error={typeof errors.positions !== "undefined"}>
						<FormControlLabel control={<Checkbox {...register("remote")} defaultChecked />} label='Remote available' />
						<FormHelperText>{errors.positions}</FormHelperText>
					</FormControl>
				</Box>

				<CustomSelect
					className={styles.input}
					label='Position'
					id='position'
					items={positions}
					callback={setSelectedPositionIds}
				/>
				<span>{errors.positions}</span>
				<CustomSelect
					className={styles.input}
					label='Language'
					id='language'
					items={languages}
					callback={setSelectedLanguageIds}
				/>
				<span>{errors.languages}</span>

				<Box className={styles.submitContainer}>
					<Button className={styles.submitButton} type='submit' color='success' variant='contained'>
						Submit
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export { AdvertisementForm };
