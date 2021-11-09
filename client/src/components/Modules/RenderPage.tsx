import { FC } from "react";

import { Navbar } from "components/Modules/Navbar";
import { Footer } from "components/Modules/Footer";

import { Box } from "@mui/system";

interface RenderPageProps {
	navbar?: boolean;
	page: JSX.Element;
	footer?: boolean;
}

const RenderPage: FC<RenderPageProps> = ({ navbar, page, footer }) => {
	return (
		<Box>
			{navbar && <Navbar />}
			{page}
			{footer && <Footer />}
		</Box>
	);
};

RenderPage.defaultProps = {
	navbar: true,
	footer: true,
};

export { RenderPage };
