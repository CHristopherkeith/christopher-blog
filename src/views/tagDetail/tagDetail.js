import React from 'react';
import {Article} from '../../components'
import {withRouter} from 'react-router'
import {Tag} from 'antd'
import classNames from 'classnames/bind'
import style from './tagDetail.module.css'
import tagStyle from '../tag/tags.module.css'

let tagCx = classNames.bind(tagStyle);
function TagArticleList(props){
	return (
		props.articleList.map((item)=>
			<Article {...item} key={item.id} tagArticle></Article>
		)
	)
}
class TagDetail extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			articleList: [],
			tag: null
		}
	}
	componentDidMount(){
		console.log(this.props.match.params.name, '[name]')
		let {match: {params: {name}}} = this.props;
		console.log(name, '[name233]')
		this.setState({
			articleList: [
				{
					id: 1,
					date: '2019-07-02',
					tag: 'frontend',
					title: 'Marked lets you convert Markdown into HTML'
				},
				{
					id: 2,
					date: '2019-06-02',
					tag: 'backend',
					title: 'It\'s not overly bloated, unlike HTML.'
				},
			],
			tag: name
		})
	}
	render(){
		return (
			<div className={style.tagDetail}>
				<div className={tagCx({tags: true, tagsLeft: true})}>
					<Tag>{this.state.tag}</Tag>
				</div>
				<TagArticleList articleList={this.state.articleList}></TagArticleList>
			</div>
		)
	}
}
export default withRouter(TagDetail)