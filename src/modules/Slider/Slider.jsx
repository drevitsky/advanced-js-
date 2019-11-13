import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import Button from 'components/Button';
import defineContentProps from './defineContentProps.js';

const RootWrapper = styled(Block)`
	overflow: hidden;
	width: 300px;
	height: 140px;
	border: 1px solid red;
`;
const RowsWrapper = styled(Block)`
	overflow: hidden;
	height: ${({ rowsCount }) => `calc(100% * ${rowsCount})` };
	width: 100%;
	& .slider__row {		
		width: 100%;
		height: ${({ rowHeight = 100 }) =>  rowHeight +'%'};
		
	}
`;
const SlidesWrapper = styled(Block)`
	width: ${({ slidesCount }) => `calc(100% * ${slidesCount})`};
	height: 100%;
	& .slider__slide {
		float:left;  
		width: ${({ slideWidth = 100 }) =>  slideWidth +'%'};
		height: 100%;
	}
`; 



class Slider extends React.Component {
	constructor (props) {
		super(props);

		this.defineContentProps = defineContentProps.bind(this);
	};

	static defaultProps = {
		defaultSlide: 0,
		defaultRow: 0,
	};	

	state = {
		scrollX: 0,
		scrollY: 0,
		currentSlide: this.props.defaultSlide,
		currentRow: this.props.defaultRow,
	};


	slideToHorizontal =(slideIndex =0) =>(e) => {
		const { currentSlide = 0 } = this.state;

		if (currentSlide === slideIndex) {
			return;
		}

		const { 
			slideWidth,
			slidesCount,  
		} = this.defineContentProps();

		const nextIndex =currentSlide < slideIndex ?
			currentSlide + 1 :
			currentSlide - 1;
		if (nextIndex >= 0 && nextIndex <= slidesCount -1) {
			this.setState({
				scrollX: slideWidth * nextIndex,
				currentSlide: nextIndex
			});
		}
		

	}
	slideToVertical =(rowIndex =0) =>(e) => {
		const { currentRow = 0 } = this.state;

		if (currentRow === rowIndex) {
			return;
		}

		const { 
			rowHeight,
			rowsCount,  
		} = this.defineContentProps();

		const nextIndex =currentRow < rowIndex ?
			currentRow + 1 :
			currentRow - 1;
		if (nextIndex >= 0 && nextIndex <= rowsCount -1) {
			this.setState({
				scrollY: rowHeight * nextIndex,
				currentRow: nextIndex
			});
		}
		

	}


	render = () => {
		
		const { children = [] } = this.props;
		const { 
			scrollX = 0,
			currentSlide = 0,
			scrollY = 0,
			currentRow = 0 
		} = this.state;
		const sliderProps = { ...this.defineContentProps() }
		return <>
			<RootWrapper>
				<RowsWrapper 
					{ ...sliderProps }
					className="rows_wrapper"
					style={{
						transform: `translate(0px,-${scrollY}%)`,
						transition: 'ease .2s all'
					}}>
					<SlidesWrapper
					{ ...sliderProps }
					className="slides_wrapper" 
					style={{
						transform: `translate(-${scrollX}%, 0px)`,
						transition: 'ease .2s all'
					}}>
						{children}
					</SlidesWrapper>
				
				</RowsWrapper>
			</RootWrapper>
			<Button onClick={this.slideToHorizontal(currentSlide - 1)}>
				prev
			</Button>
			<Button onClick={this.slideToHorizontal(currentSlide + 1)}>
				next
			</Button>
			<Button onClick={this.slideToVertical(currentRow - 1)}>
				down
			</Button>
			<Button onClick={this.slideToVertical(currentRow + 1)}>
				up
			</Button>
		</>;
	};
};
export default Slider;
