import cls from './style.module.scss';
import logo from '../../../public/images/LOGO.png'
import locationIcon from '../../../public/images/Location.png'
import korzinaIcon from '../../../public/images/Shopping-cart.png'
import langIcon from '../../../public/images/rus-flag.png'
import downIcon from '../../../public/images/chevron-down-icon.png'

const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.left}>
                <div className={cls.logo}><img src={logo} alt='Logo image' /></div>
                <nav>
                    <ul className={cls.navigation}>
                        <li><a href='#'>Меню</a></li>
                        <li><a href='#'>Филиалы</a></li>
                        <li><a href='#'>О нас</a></li>
                        <li><a href='#'>Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div className={cls.right}>
                <div className={cls.delivery}>
                    <div className={cls.location}><img src={locationIcon} alt='Location image' /></div>
                    <div className={cls.text}>
                        <p className={cls.topText}>Достафка или Заказ с собой</p>
                        <p className={cls.bottomText}>Выберите способ получения</p>
                    </div>
                </div>
                <div className={cls.actions}>
                    <span className={cls.korzinaIcon}><img src={korzinaIcon} alt='Korzinka image' /></span>
                    <span className={cls.lang}>
                        <img src={langIcon} alt='Language image' />
                        <img src={downIcon} alt='Down image' />
                    </span>
                    <p className={cls.enterText}>Войти</p>
                </div>
            </div>
        </header >
    )
}

export default Header
