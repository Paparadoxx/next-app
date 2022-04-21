import {LayoutProps} from "./Layout.props";
import styles from "./Layout.module.css";
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FC } from "react";

const Layout = ({children}: LayoutProps): JSX.Element => {
	return (
		<>
			<Header/>
			<div>
				<Sidebar/>
				<div>
					{children}
				</div>
			</div>
			<Footer/>
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>> (Component: FC<T>) => {
	return function withLAyoutComponent (props: T): JSX.Element {
		return(
			<Layout>
				<Component {...props}/>
			</Layout>
		);
	};
};