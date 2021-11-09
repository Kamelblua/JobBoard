import { useState } from "react";

import { GlobalContext, GlobalContextState } from "providers/GlobalContext";
import { Routes } from "./routes";

import { ApplyFormModal } from "components/Pages/Candidate/ApplyFormModal";
import { Alert } from "components/Modules/Alert";

import "react-toastify/dist/ReactToastify.css";

function App() {
	const [state, setState] = useState<GlobalContextState>({
		selectedAdvertisement: null,
		openModal: false,
	});

	return (
		<GlobalContext.Provider value={{ state, setState }}>
			<ApplyFormModal />
			<Alert />
			<Routes></Routes>
		</GlobalContext.Provider>
	);
}

export default App;
