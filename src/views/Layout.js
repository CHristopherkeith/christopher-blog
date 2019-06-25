import React from 'react';
import style from './Layout.module.css'
import {
  Link
} from 'react-router-dom'

function Layout(props){
	return (
		<div className={style.content}>
			<Link to="/home">home</Link>
			<Link to="/tags">tags</Link>
			<Link to="/about">about</Link>
			{props.children}
		</div>
	)
}
export default Layout