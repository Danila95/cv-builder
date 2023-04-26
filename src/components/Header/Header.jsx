import './Header.scss'

const Header = () => {
	return (
		<header className='Header'>
			<div className='ui-container'>
				<div className='Header_content'>
					<span className='Header_logo'>CV builder</span>
					<button className='ui-button isLink'>Print</button>
				</div>
			</div>
		</header>
	)
}

export default Header
