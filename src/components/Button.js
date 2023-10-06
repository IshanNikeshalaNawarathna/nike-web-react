import React from 'react'
import { arrowRight } from '../assets/icons';

const Button = () => {
    return (
        <Button>Shop now
            <img src={arrowRight} alt='arrow roght icon' className='ml-2 rounded-full w-5 h-5' />
        </Button>
    )
}

export default Button;