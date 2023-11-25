import cls from './style.module.scss'
import logo from '../../../public/images/LOGO.png'
import instagram from '../../../public/images/instagram.png'
import telegram from '../../../public/images/telegram.png'
import facebook from '../../../public/images/facebook.png'

const Footer = () => {
  return (
    <footer className="container">
      <div className={cls.footer}>
        <div className={cls.footerTop}>
          <div><img src={logo} /></div>
          <nav className={cls.nav}>
            <ul className={cls.navigation}>
              <li><a href='#'>Филиалы</a></li>
              <li><a href='#'>О нас </a></li>
              <li><a href='#'>Контакты</a></li>
            </ul>
          </nav>
        </div>
        <div className={cls.footerBottom}>
          <p className={cls.text}>©Udevs 2020 - 2022 All rights reserved</p>
          <div className={cls.socials}>
            <img src={instagram} />
            <img src={telegram} />
            <img src={facebook} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
