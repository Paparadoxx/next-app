import {SidebarProps} from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg';

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Logo/>
			<div>Поиск</div>
			<Menu/>
		</div>	
	)
}