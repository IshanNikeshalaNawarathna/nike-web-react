// import { arrowRight } from '../assets/icons';

const Button = ({label,iconURL}) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 leading-none bg-coral-red rounded-full text-white py-3">{label}
        <img src={iconURL} alt="arrow right icon" className="w-5 h-5 rounded-full"/>
        </button>
    )
}

export default Button;