import cls from './style.module.scss'
import bannerIMg from '../../../public/images/banner.png'
// import dots from '../../../public/images/dots.png'
import { PrevIcon, NextIcon } from '../../../public/svg'

const Banner = () => {
    return (
        <section className={cls.banner}>
            <img src={bannerIMg} />
            <div className={cls.prevIcon}><PrevIcon /></div>
            <div className={cls.nextIcon}><NextIcon /></div>
            {/* <div className={cls.dots}><img src={dots} alt='Dots'/></div> */}
        </section>
    )
}

export default Banner
