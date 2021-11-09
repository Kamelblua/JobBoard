// React
import { FC } from "react";

// Hooks
import { ToastContainer } from "react-toastify";

const Alert: FC<{}> = () => {
	return (
		<ToastContainer
			position='bottom-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
	);
};

export { Alert };
