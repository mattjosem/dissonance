import PropTypes from 'prop-types'
import Button from './Button'
import { FaPlay } from 'react-icons/fa'


export const Header = ({ title }) => {
  
  const onClick = () => {
    console.log('play')
  }
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button optionalIcon={<FaPlay />} onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'dissonance',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
