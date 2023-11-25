import { Burger, Categories, Clab, Lavash, Shaurma } from '../../static/products';
import Button from '../Button';
import cls from './style.module.scss';

const Products = () => {
    return (
        <section>
            <div className={cls.topCategory}>
                {
                    Categories.map((category) => (
                        <p key={category.index} className={cls.category}>{category}</p>
                    ))
                }
            </div>
            {/*======== Lavash ========= */}
            <p className={cls.title}>Лаваш</p>
            <div className={cls.cards}>
                {
                    Lavash.map((el) => (
                        <div key={el.index} className={cls.card}>
                            <div className={cls.image}><img src={el.image} /></div>
                            <p className={cls.name}>{el.title}</p>
                            <p className={cls.desc}>{el.desc}</p>
                            <div className={cls.action}>
                                <p>
                                    <span className={cls.price}>{el.price}</span>
                                    <span className={cls.priceText}> som</span>
                                </p>
                                <Button type='button' className={cls.btn} text="Добавить" />
                            </div>
                        </div>
                    ))
                }
            </div>
            {/*======== Burger ========= */}
            <p className={cls.title}>Бургеры</p>
            <div className={cls.cards}>
                {
                    Burger.map((el) => (
                        <div key={el.index} className={cls.card}>
                            <div className={cls.image}><img src={el.image} /></div>
                            <p className={cls.name}>{el.title}</p>
                            <p className={cls.desc}>{el.desc}</p>
                            <div className={cls.action}>
                                <p>
                                    <span className={cls.price}>{el.price}</span>
                                    <span className={cls.priceText}> som</span>
                                </p>
                                <Button type='button' className={cls.btn} text="Добавить" />
                            </div>
                        </div>
                    ))
                }
            </div>
            {/*======== Clab ========= */}
            <p className={cls.title}>Клаб-Сэндвич</p>
            <div className={cls.cards}>
                {
                    Clab.map((el) => (
                        <div key={el.index} className={cls.card}>
                            <div className={cls.image}><img src={el.image} /></div>
                            <p className={cls.name}>{el.title}</p>
                            <p className={cls.desc}>{el.desc}</p>
                            <div className={cls.action}>
                                <p>
                                    <span className={cls.price}>{el.price}</span>
                                    <span className={cls.priceText}> som</span>
                                </p>
                                <Button type='button' className={cls.btn} text="Добавить" />
                            </div>
                        </div>
                    ))
                }
            </div>
            {/*======== Шаурма ========= */}
            <p className={cls.title}>Шаурма</p>
            <div className={cls.cards}>
                {
                    Shaurma.map((el) => (
                        <div key={el.index} className={cls.card}>
                            <div className={cls.image}><img src={el.image} /></div>
                            <p className={cls.name}>{el.title}</p>
                            <p className={cls.desc}>{el.desc}</p>
                            <div className={cls.action}>
                                <p>
                                    <span className={cls.price}>{el.price}</span>
                                    <span className={cls.priceText}> som</span>
                                </p>
                                <Button type='button' className={cls.btn} text="Добавить" />
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={cls.topCategory}>
                {
                    Categories.map((category) => (
                        <p key={category.index} className={cls.category}>{category}</p>
                    ))
                }
            </div>
        </section>
    )
}

export default Products
