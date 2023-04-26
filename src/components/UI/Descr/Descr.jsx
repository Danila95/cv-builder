import classNames from 'classnames'

const Descr = ({ isPrimary, isSecondary, className, children, ...attrs }) => {
	const classes = classNames('ui-text', className, {
		isPrimary,
		isSecondary
	})

	return (
		<p className={classes} contentEditable suppressContentEditableWarning spellCheck={false} {...attrs}>
			{children}
		</p>
	)
}

export default Descr
