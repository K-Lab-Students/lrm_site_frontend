import './style.css'

const NavButton = (props) => <button className='NavButtons'> {props.text} </button>


const Header = () => {
    return (
    <header className='Header'>
        <div className='HeaderContentDiv'>

            {/* <div className='Container'> */}
                <div className='ContainerItemIcon'> Иконка </div>
                <div className='ContainerItemNav'>
                    <nav>
                        <a href='http://htmlbook.ru/html/nav'><NavButton text='one'/></a>
                        <a href='http://htmlbook.ru/html/nav'><NavButton text='two'/></a>
                    </nav>
                </div>
            {/* </div> */}

        </div>
    </header>
    )
}

export default Header