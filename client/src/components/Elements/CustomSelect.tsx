import { FC, useState } from "react";

import {
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
} from "@mui/material";

import { useStyles } from "./styles/CustomSelect.styles";

interface CustomSelectProps {
	label: string;
	items: any;
	id: string;
	callback?: Function;
	[x: string]: any;
}

const CustomSelect: FC<CustomSelectProps> = ({ label, id, items, callback, ...rest }) => {
	const styles = useStyles();

	const [string, setString] = useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof string>) => {
		let {
			target: { value },
		} = event;

		setString(typeof value === "string" ? value.split(",") : value);

		if (callback) {
			let ids: number[] = [];
			if (Array.isArray(value))
				value.forEach((val: any) => {
					ids.push(val.id);
				});
			callback(ids);
		}
	};

	const displayValues = (values: any[]) => {
		let names = "";

		values.forEach((val: any) => {
			names += val.name + ", ";
		});

		return names.replace(/,\s$/, "");
	};

	return (
		<FormControl {...rest} sx={{ m: 1, width: 300 }}>
			<InputLabel id='demo-multiple-checkbox-label'>{label}</InputLabel>
			<Select
				labelId='demo-multiple-checkbox-label'
				id='demo-multiple-checkbox'
				multiple
				value={string}
				onChange={handleChange}
				input={<OutlinedInput label={label} />}
				renderValue={(selected) => {
					return displayValues(selected);
				}}
				MenuProps={{
					PaperProps: {
						className: styles.menu,
					},
				}}
			>
				{items.map((item: any, k: number) => (
					<MenuItem key={k} value={item}>
						<Checkbox checked={string.indexOf(item) > -1} />
						<ListItemText primary={item.name} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export { CustomSelect };
