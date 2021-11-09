import { createContext } from "react";
import { Advertisement } from "types/advertisement.d";

export interface GlobalContextState {
	selectedAdvertisement: Advertisement | null;
	openModal: boolean;
}

export type GlobalContextProps = {
	state: GlobalContextState;
	setState?: Function;
};

const DEFAULT_CONTEXT: GlobalContextProps = {
	state: {
		selectedAdvertisement: null,
		openModal: false,
	},
};

export const GlobalContext = createContext<Partial<GlobalContextProps>>(DEFAULT_CONTEXT);
