import React from 'react';
import style from './layout.module.css'
import {
  Link
} from 'react-router-dom'
import { Icon } from 'antd';

function Layout(props){
return (
	<div className={style.content}>
		<div className={style.header}>
			<div>
				<div className={style.blogTitle}>Christopher's Blog</div>
				<div className={style.blogSubTitle}>Stranger under my skin</div>
				<div className={style.blogNav}>
					<ul>
						<li>
							<Link to="/home"><Icon type="home" /><br/>首页</Link>
						</li>
						<li>
							<Link to="/tags"><Icon type="tags" /><br/>标签</Link>
						</li>
						<li>
							<Link to="/about"><Icon type="contacts" /><br/>关于</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className={style.main}>
			{props.children}
		</div>
		<div className={style.footer}>
			<Icon type="copyright" /> 2019 Christopher
		</div>
	</div>
)
}
export default Layout