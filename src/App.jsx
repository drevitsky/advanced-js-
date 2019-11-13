import React from 'react';
import Slider from './modules/Slider';
import Block from './components/Block';
// import {BlockMini} from './components/Block';


class App extends React.Component {
	sliderData = [
	[{style: {backgroundColor: 'red'}},
	{style: {backgroundColor: 'blue'}},
	{style: {backgroundColor: 'grey'}},
	{style: {backgroundColor: 'yellow'}},

	],
	[{style: {backgroundColor: 'pink'}},
	{style: {backgroundColor: 'black'}},
	{style: {backgroundColor: 'green'}},
	{style: {backgroundColor: 'yellowgreen'}},
	{style: {backgroundColor: 'coral'}},
	],
	[{style: {backgroundColor: 'skyblue'}},
	{style: {backgroundColor: 'brown'}},
	{style: {backgroundColor: 'darkgrey'}},
	
	],
	[{style: {backgroundColor: 'lightgray'}},
	{style: {backgroundColor: 'orange'}},
	{style: {backgroundColor: 'grey'}},
	{style: {backgroundColor: 'purple'}},
	]

	];
	render = () => {
		return <>
			<Slider>
				{this.sliderData.map((item,i) =>(
			<Block key={i} className="slider__row">
			{item.map((item2,ii) => (
				<Block {...item2} key={ii} className="slider__slide">
					{i} {ii} {item2.style.backgroundColor}
				</Block>
				))}
			</Block>
			))}
			</Slider>
			{/*<Block>
			{this.sliderData.map((item,i) =>(
			<Block key={i} style={{
				border: '2px solid #000', 
				display:'flex',

				width:'400px',
				height:'100px'
			}}>
			{item.map((item2,ii) => (
				<BlockMini {...item2} key={ii} >
					{i} {ii} {item2.style.backgroundColor}
				</BlockMini>
				))}
			</Block>
			))}

			</Block>*/}
		</>;
	};
};
export default App;
