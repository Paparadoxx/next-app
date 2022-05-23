import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import close from './close.svg';
import menu from './menu.svg';

export const icons = {
	close,
	menu
}

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconName; 
	appearance: 'primary' | 'white';
}