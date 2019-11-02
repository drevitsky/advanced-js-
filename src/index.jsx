import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './App.jsx';

// console.log(ReactDOM)
// const root	= window.root;
const root	= document.getElementById('root');
// ReactDOM.render(
// 	<React.Fragment>
// 		<div>hello React</div>
// 	</React.Fragment>	
// 	, root) ;

ReactDOM.render(<App />, root) ;