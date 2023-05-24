import PropTypes from 'prop-types'

const Button = ({ text, optionalIcon, onClick }) => {
  return (
    <button 
      className='btn'
      onClick={onClick} 
    >
      {text}
      {optionalIcon}
    </button>
  )
}

Button.defaultProps = {
    text: '',
    optionalIcon: '',
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button