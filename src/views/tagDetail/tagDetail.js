import React from 'react';
import {Article} from '../../components'
import {withRouter} from 'react-router'
import {Tag, Pagination} from 'antd'
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
			tag: null,
			total: 0,
			current: 1
		}
		this.pageOnChange = this.pageOnChange.bind(this)
	}
	pageOnChange(page, pageSize){
		this.setState({
			current: page
		})
	}
	componentDidMount(){
		let {match: {params: {name}}} = this.props;
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
			tag: name,
			total: 400
		})
	}
	render(){
		return (
			<div className={style.tagDetail}>
				<div className={tagCx({tags: true, tagsLeft: true})}>
					<Tag>{this.state.tag}</Tag>
				</div>
				<TagArticleList articleList={this.state.articleList}></TagArticleList>
				<Pagination
				className="grayPagination"
				size="small"
				total={this.state.total}
				onChange={this.pageOnChange}
				current={this.state.current}
				/>
			</div>
		)
	}
}
export default withRouter(TagDetail)