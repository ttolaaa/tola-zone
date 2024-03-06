import React from "react"
import style from "./Navigation.module.css"

const Header = () => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<p>work</p>
				<p>about</p>
				<p>resume</p>
				<p>code</p>
			</div>
		</div>
	)
}

export default Header;