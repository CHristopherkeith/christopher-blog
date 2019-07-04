import React from 'react';
import {Article} from '../../components'
class About extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			id: null,
			date: null,
			tag: null,
			title: null,
			content: null
		}
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				id: 1,
				date: '2019-07-02',
				tag: 'frontend',
				title: 'About lets you convert Markdown into HTML',
				content: '[About] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.'
			})
		},2000)
		
	}
	render(){
		return (
			<Article {...this.state}></Article>
		)
	}
}
export default About