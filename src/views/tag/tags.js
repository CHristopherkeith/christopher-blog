import React from 'react';
import { Tag } from 'antd';
import { withRouter } from 'react-router'
import style from './tags.module.css'
function TagsList(props){
	return (
		props.tagsList.map((item)=>
			<Tag key={item.id} onClick={()=>props.handleClick(item.name)}>{item.name}</Tag>
		)
	)
}
class Tags extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			tags: []
		}
		this.getArticleByTags = this.getArticleByTags.bind(this);
	}
	getArticleByTags(name){
		this.props.history.push(`/tagdetail/${name}`);
	}
	componentDidMount(){
		this.setState({
			tags: [
				{name: '前端', id: 1},
				{name: '后端', id: 2},
				{name: '数据库', id: 3},
				{name: '其他', id: 4},
			]
		})
	}
	render(){
		return (
			<div className={style.tags}>
				<TagsList tagsList={this.state.tags} handleClick={this.getArticleByTags}></TagsList>
			</div>
		)
	}
}
export default withRouter(Tags)