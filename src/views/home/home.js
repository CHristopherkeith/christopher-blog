import React from 'react';
import {Article} from '../../components'
import style from './home.module.css'
function ArticleList(props){
	return (
		props.articleList.map((item)=>
			<Article {...item} key={item.id}></Article>
		)
	)
}
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articleList: []
		}
	}
	componentDidMount(){
		this.setState({
			articleList: [
				{
					id: 1,
					date: '2019-07-02',
					tag: 'frontend',
					title: 'Marked lets you convert Markdown into HTML',
					content: '[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.'
				},
				{
					id: 2,
					date: '2019-06-02',
					tag: 'backend',
					title: 'It\'s not overly bloated, unlike HTML.',
					content: 'Why Markdown?\n-------------\n\nIt\'s easy.  It\'s not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,\n\n> The overriding design goal for Markdown\'s\n> formatting syntax is to make it as readable\n> as possible. The idea is that a\n> Markdown-formatted document should be\n> publishable as-is, as plain text, without\n> looking like it\'s been marked up with tags\n> or formatting instructions.\n\nReady to start writing?  Either start changing stuff on the left or\n[clear everything](/demo/?text=) with a simple click.\n\n[Marked]: https://github.com/markedjs/marked/\n[Markdown]: http://daringfireball.net/projects/markdown/\n'
				},
			]
		})
	}
	render() {
		return (
			<div>
				<ArticleList articleList={this.state.articleList}></ArticleList>
			</div>
		)
	}
}
export default Home