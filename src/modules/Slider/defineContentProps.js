
export default function() {
	const { currentRow } = this.state;
	const { children = [] } = this.props;
	const rowsCount = children.length;

	const slidesCount = children[currentRow].props.children.length || 1;
	const slideWidth = +(100 / slidesCount).toFixed(2);
	const rowHeight = +(100 / rowsCount).toFixed(2);
	// const 

	return { slideWidth, slidesCount, rowsCount, rowHeight };
};

