// import cls from './style.module.scss'

// eslint-disable-next-line react/prop-types
const Button = ({ text, className }) => {
    return (
        <button className={className}>
            {text}
        </button>
    )
}

export default Button
