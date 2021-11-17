import PropTypes from 'prop-types'

function Button({ color, text }) {

    const handleClick = () => {
        console.log('Click')
    }

    return (
        <button onClick={handleClick} style={{ backgroundColor: color}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
