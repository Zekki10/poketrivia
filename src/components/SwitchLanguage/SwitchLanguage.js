import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import './SwitchLanguage.css'


export const SwitchLanguage = () => {

    const { i18n, t } = useTranslation(["switchLanguage"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
			<div className="language_list">
				<label>{t('switchLanguage.language')}</label>
				<select
					value={localStorage.getItem("i18nextLng")}
					onChange={handleLanguageChange}
				>
					<option value="en">English</option>
					<option value="es">Español</option>
				</select>
			</div>
	);
};