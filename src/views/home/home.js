import React from 'react';
import {Article} from '../../components'
import style from './home.module.css'
class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Article></Article>
			</div>
		)
	}
}
export default Home