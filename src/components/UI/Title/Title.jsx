import classNames from 'classnames'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-bottom: 1rem;
	button {
		display: inline-block;
		transition: 0.1s all ease;
		opacity: 0 !important;
	}
	&:hover button {
		opacity: 1 !important;
	}
	p {
		display: inline-block;
		margin-bottom: 0;
	}
`

const Title = ({ size, isUppercase, isShowButton, className, onClick, children, contentEditable = true, ...attrs }) => {
	const classes = classNames(`ui-title-${size}`, className, { isUppercase })

	return (
		<Wrapper>
			<p className={classes} contentEditable={contentEditable} suppressContentEditableWarning spellCheck={false} {...attrs}>
				{children}
			</p>
			{isShowButton && (
				<button className='ui-button isLink' onClick={onClick}>
					+
				</button>
			)}
		</Wrapper>
	)
}

export default Title
