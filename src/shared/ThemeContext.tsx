import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext<
	Partial<{
		theme: string;
		toggleTheme: () => void;
		setTheme: (theme: string) => void;
	}>
>({});

type theme = { [key: string]: string };
const dark: theme = {
	'--bg': '#222',
	'--light-opacity': 'rgba(29, 32, 33, 0.9)',
	'--light-text': 'rgb(224, 224, 224)',
	'--dark-text': 'rgb(224, 224, 224)',
	'--user-bg': 'rgb(1, 132, 255)',
	'--other-bg': 'rgb(48, 52, 54)',
	'--shadow': 'rgba(0, 0, 0, 0.7)',
};
const light: theme = {
	'--bg': '#eee',
	'--light-opacity': 'rgba(246, 246, 246, 0.9)',
	'--light-text': 'white',
	'--dark-text': 'black',
	'--user-bg': 'rgb(1, 132, 255)',
	'--other-bg': 'rgb(212, 212, 212)',
	'--shadow': 'rgba(0, 0, 0, 0.253)',
};
const applyTheme = (nextTheme: string) => {
	const theme = nextTheme === 'light' ? light : dark;
	Object.keys(theme).map(key => {
		const value = theme[key];
		console.log(key);

		document.documentElement.style.setProperty(key, value);
	});
};

const getTheme = () => {
	const theme = localStorage.getItem('theme');
	console.log('get ' + theme);

	return theme ? theme : 'light';
};

export const ThemeContextProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState(() => getTheme());
	useEffect(() => {
		applyTheme(theme);
		localStorage.setItem('theme', theme);
		console.log('effect ' + theme);
	}, [theme]);

	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
