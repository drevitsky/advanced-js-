import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Block from '../../components/Block';

class DynamicSearch extends React.Component {
	state = {
		data: [
			'Mariupol',
			'Kiev',
			'Los-Angeles',
			'Moscow',
			'Berdyansk',
			'Odessa'
		],
		findedIndexes: [],
	};

	nodeRef = null;

	handleChange = () => {
		const { data = [] } = this.state;
		let newValue = '';
		
		if (this.nodeRef.value) {
			newValue = this.nodeRef.value.trim().toLowerCase();
		}

		this.setState({
			findedIndexes: newValue.length > 0 ?
				data.filter((item) => {
					item = item.trim().toLowerCase();

					if (item.indexOf(newValue) === 0) {
						return true;
					}
					return false;
				}) :
				[]
		});
	};

	handleClearInput = () => this.setState({
		findedIndexes: []
	}, () => {
		this.nodeRef.value = '';
	});

	render = () => {
		const { 
			// data = [], 
			findedIndexes = [],
		} = this.state;

		return <>
			<Input 
				ref={(node) => node && (this.nodeRef = node)}
				onChange={this.handleChange} />
			<Button
				onClick={this.handleClearInput}>
				x
			</Button>
			<Button>
				Find
			</Button>
			<Block>
			{findedIndexes.map((item, i) => {
				return <Block key={i}>{item}</Block>;
			})}
			</Block>
		</>;
	};
};
export default DynamicSearch;
