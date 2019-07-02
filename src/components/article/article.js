import React from 'react'
import { withRouter } from 'react-router'
import Marked from 'marked'
import hljs  from 'highlight.js'
import { Icon, Button } from 'antd';
import classNames from 'classnames/bind'
import style from './article.module.css' 
hljs.configure({ useBR: true });
Marked.setOptions({
	langPrefix: 'hljs ',
	highlight: function(code) {
		return hljs.highlightAuto(code).value;
	},

});
let cx = classNames.bind(style);
class Article extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			id: null,
			date: null,
			tag: null,
			title: '',
			content: ''

		}
		this.handleRead = this.handleRead.bind(this);
	}
	handleRead(e){
		const { history } = this.props;
		history.push(`/detail/${this.state.id}`);
	}
	componentDidMount(){
		if(this.props.isDetail){
			console.log(this.props.match, '[match]')
			this.setState({
				id: 'xx',
				date: 'detail-xx',
				tag: 'detail-xx',
				title: 'detail-title',
				content: '[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.\n\nHow To Use The Demo\n-------------------\n\n1. Type in stuff on the left.\n2. See the live updates on the right.\n\nThat\'s it.  Pretty simple.  There\'s also a drop-down option in the upper right to switch between various views:\n\n- **Preview:**  A live display of the generated HTML as it would render in a browser.\n- **HTML Source:**  The generated HTML before your browser makes it pretty.\n- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.\n- **Quick Reference:**  A brief run-down of how to format things using markdown.\n\nWhy Markdown?\n-------------\n\nIt\'s easy.  It\'s not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,\n\n> The overriding design goal for Markdown\'s\n> formatting syntax is to make it as readable\n> as possible. The idea is that a\n> Markdown-formatted document should be\n> publishable as-is, as plain text, without\n> looking like it\'s been marked up with tags\n> or formatting instructions.\n\nReady to start writing?  Either start changing stuff on the left or\n[clear everything](/demo/?text=) with a simple click.\n\n[Marked]: https://github.com/markedjs/marked/\n[Markdown]: http://daringfireball.net/projects/markdown/\n```javascript\nfunction Router() {\n    this.routes = {}; //保存注册的所有路由\n    this.routerViewId = "#routerView"; // 路由挂载点 \n    this.stackPages = true; // 多级页面缓存\n    this.history = []; // 路由历史\n}\n\nfunction handleChange(e){\n    this.setState({content: e.target.value});\n}\nclass Home extends React.Component {\n	constructor(props) {\n		super(props);\n	}\n	render() {\n		return (\n			<div>\n				<Article></Article>\n			</div>\n		)\n	}\n}\nexport default Home\n```'
			})
		}else{
			let {id, date, tag, title, content} = this.props;
			this.setState({
				id: id,
				date: date,
				tag: tag,
				title: title,
				content: content
			})
		}
	}
	render() {
		let isDetail = this.props.isDetail;
		let {date, tag, title, content} = this.state;
		let articleContent = Marked(content);
		return (
			<div className={style.article}>
				<h1 className={style.articleTitle}>{title}</h1>
				<div className={style.articleRemark}>
					<span className={style.articleDate}>
						<Icon type="calendar" />{date}
					</span>
					<span className={style.dividingLine}> | </span>
					<span className={style.articleTags}>
						<Icon type="tags" />{tag}
					</span>
				</div>
				<div dangerouslySetInnerHTML={{__html:articleContent}} className={style.articleContent}></div>
				{
					!isDetail ? 
					<div className={cx({articleRead: true, grayBtn: true})}>
						<Button type="primary" ghost onClick={this.handleRead}>阅读全文<Icon type="double-right" /></Button>
					</div>
					:null
				}
				
			</div>
		)
	}
}
// export default Article
export default withRouter(Article)