import PropTypes from 'prop-types'
import { useState } from 'react'

const Button = ({ color, text }) => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (<button onClick={handleClick} style = {{ backgroundColor: color }} className='btn'>Clicked {count} times</button>)
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button