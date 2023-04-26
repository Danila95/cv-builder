import styled from 'styled-components'

const Wrapper = styled.div`
	width: 10rem;
	height: 10rem;
	border-radius: ${props => (props.isSquare ? '10px' : '50%')};
	background-color: #bfbfbf;
	input {
		display: none;
	}
	label,
	label div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10rem;
		height: 10rem;
		cursor: pointer;
		border-radius: ${props => (props.isSquare ? '10px' : '50%')};
	}
`

const Avatar = ({ isSquare }) => {
	return <Wrapper isSquare={isSquare}>Avatar</Wrapper>
}

export default Avatar
