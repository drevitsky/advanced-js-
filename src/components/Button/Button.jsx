import styled from 'styled-components';

export default styled.button`
	cursor: pointer;
	${({ cssStr = '' }) => cssStr}
`;
