import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
	state = {
		displayFlag: true,

	};
	// constructor (props) {
	// 	super(props);
	// 	setTimeout( () => {
	// 		this.hide();
	// 	}, 3000 );
	// };
	
	// hide = () => {
	// 	this.setState({displayFlag:false})	

	// };
	switchDisplay = () => {
		this.setState({
			displayFlag:! this.state.displayFlag
		})	

	};

	render = () => {console.log(this.state)
		return ( <>
				<button onClick={this.switchDisplay}> 
				switchDisplay
				</button>
				{
					this.state.displayFlag &&
					<div>hello</div>
					
				}
			{/* second method*/}
				{
					this.state.displayFlag ?
					<div>hello</div> :
					<React.Fragment />
				}
			</>		
			)
			

		// return (
		// 	<div onClick={this.hide} id="hello">kbnflkflk</div>
		// )		
	}; 
};
export default App;