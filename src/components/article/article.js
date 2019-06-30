import React from 'react'
import Marked from 'marked'
import hljs  from 'highlight.js'
import { Icon } from 'antd';
import style from './article.module.css' 
hljs.configure({ useBR: true });
Marked.setOptions({
	langPrefix: 'hljs ',
	highlight: function(code) {
		return hljs.highlightAuto(code).value;
	},

});
class Article extends React.Component{
	constructor(props){
		super(props)
		this.state = {

			content: '[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.\n\nHow To Use The Demo\n-------------------\n\n1. Type in stuff on the left.\n2. See the live updates on the right.\n\nThat\'s it.  Pretty simple.  There\'s also a drop-down option in the upper right to switch between various views:\n\n- **Preview:**  A live display of the generated HTML as it would render in a browser.\n- **HTML Source:**  The generated HTML before your browser makes it pretty.\n- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.\n- **Quick Reference:**  A brief run-down of how to format things using markdown.\n\nWhy Markdown?\n-------------\n\nIt\'s easy.  It\'s not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,\n\n> The overriding design goal for Markdown\'s\n> formatting syntax is to make it as readable\n> as possible. The idea is that a\n> Markdown-formatted document should be\n> publishable as-is, as plain text, without\n> looking like it\'s been marked up with tags\n> or formatting instructions.\n\nReady to start writing?  Either start changing stuff on the left or\n[clear everything](/demo/?text=) with a simple click.\n\n[Marked]: https://github.com/markedjs/marked/\n[Markdown]: http://daringfireball.net/projects/markdown/\n```javascript\nfunction Router() {\n    this.routes = {}; //保存注册的所有路由\n    this.routerViewId = "#routerView"; // 路由挂载点 \n    this.stackPages = true; // 多级页面缓存\n    this.history = []; // 路由历史\n}\n\nfunction handleChange(e){\n    this.setState({content: e.target.value});\n}\nclass Home extends React.Component {\n	constructor(props) {\n		super(props);\n	}\n	render() {\n		return (\n			<div>\n				<Article></Article>\n			</div>\n		)\n	}\n}\nexport default Home\n```'

		}
		// this.handleChange = this.handleChange.bind(this)
	}
	// handleChange(e){
	// 	this.setState({content: e.target.value});
	// }
	render() {
		let isDetail = this.props.isDetail;
		let contentJsx;
		// if(isDetail){
		// 	contentJsx = (
		// 		<div>details article</div>
		// 	)
		// }else{
		// 	let articleContent = Marked(this.state.content);
		// 	contentJsx = (
		// 		<div>
		// 			<div dangerouslySetInnerHTML={{__html:articleContent}}></div>
		// 		</div>
		// 	)
		// }
		let articleContent = Marked(this.state.content);
		return (
			<div className={style.article}>
				{/*<textarea value={this.state.content} onChange={this.handleChange} style={{width:'1px',height:'1px',display: 'none'}}></textarea>*/}
				{/*contentJsx*/}
				<h1 className={style.articleTitle}>Marked lets you convert Markdown into HTML</h1>
				<div className={style.articleRemark}>
					<span className={style.articleDate}>
						<Icon type="calendar" /> 2019-06-30
					</span>
					<span className={style.dividingLine}> | </span>
					<span className={style.articleTags}>
						<Icon type="tags" /> frontend
					</span>
				</div>
				<div dangerouslySetInnerHTML={{__html:articleContent}}></div>
			</div>
		)
	}
}
export default Article