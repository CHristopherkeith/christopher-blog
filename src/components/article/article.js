import React from 'react'
import Marked from 'marked'
import hljs  from 'highlight.js'

// import 'highlight.js/styles/github.css'
// // import 'highlight.js/styles/railscasts.css';
import javascript from 'highlight.js/lib/languages/javascript'

import style from './article.module.css'
// Marked.setOptions({
//   highlight: function(code, lang, callback) {
//     require('pygmentize-bundled') ({ lang: lang, format: 'html' }, code, function (err, result) {
//       callback(err, result.toString());
//     });
//   }
// });

// hljs.configure({ useBR: true });
// Marked.setOptions({
// 	// renderer: renderer,
// 	highlight: function(code) {
// 		return hljs.highlightAuto(code).value;
// 	},
// 	// pedantic: false,
// 	// gfm: true,
// 	// tables: true,
// 	// breaks: false,
// 	// sanitize: false,
// 	// smartLists: true,
// 	// smartypants: false,
// 	// xhtml: false
// }); 
hljs.registerLanguage('javascript', javascript);
hljs.configure({ useBR: true });
Marked.setOptions({
	renderer: new Marked.Renderer(),
	headerIds: false,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: function(code) {
		return hljs.highlightAuto(code).value;
	},
});
class Article extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			content: '[Marked]\n\n[Marked]: https://github.com/markedjs/marked/\n# 0.关于this是指什么\n- 其实可以这么概括，this属于调用被调用的方法的主体，也就是，谁调用，谁就是this。\n- 虽然说起来这么简单，但是上面的话里面的概念其实涉及到：作为方法的调用(function）的this；作为构造函数里的this；作为call或者apply的this。\n- 以上三个概念，又涉及到js里的对象创建，和方法的继承，所以，要弄清楚this，就要弄清楚js里的对象创建和继承机制。\n\n# 1.作为方法调用（function）的this\n这个是最为简单的，但也可以分为几种情况，我们写一个文件，叫functionThis.js\n1.1 有如下代码：\n```\n// 基于数组实现的顺序栈\nclass ArrayStack {\n  constructor(n) {\n      this.items = [];  // 数组\n      this.count = 0;   // 栈中元素个数\n      this.n = n;       // 栈的大小\n  }\n\n  // 入栈操作\n  push(item) {\n    // 数组空间不够了，直接返回 false，入栈失败。\n    if (this.count === this.n) return false;\n    // 将 item 放到下标为 count 的位置，并且 count 加一\n    this.items[this.count] = item;\n    ++this.count;\n    return true;\n  }\n  \n  // 出栈操作\n  pop() {\n    // 栈为空，则直接返回 null\n    if (this.count == 0) return null;\n    // 返回下标为 count-1 的数组元素，并且栈中元素个数 count 减一\n    let tmp = items[this.count-1];\n    --this.count;\n    return tmp;\n  }\n}\n```\n打印结果如下：\n\n![1-1](http://upload-images.jianshu.io/upload_images/10687046-154d36e6aabfb445.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)'
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		this.setState({content: e.target.value});
	}
	render() {
		let isDetail = this.props.isDetail;
		let contentJsx;
		if(isDetail){
			contentJsx = (
				<div>details article</div>
			)
		}else{
			let content = Marked(this.state.content);
			contentJsx = (
				<div>
					<div dangerouslySetInnerHTML={{__html:content}}></div>
				</div>
			)
		}
		return (
			<div className={style.article}>
				<textarea value={this.state.content} onChange={this.handleChange} style={{width:'1px',height:'1px',display: 'none'}}></textarea>
				{contentJsx}
			</div>
		)
	}
}
export default Article