import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddTask, showAdd }) => {
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button 
            color={showAdd ? 'green': 'red'} 
            text={showAdd ? 'Add': 'Close'}  
            onClick={onAddTask}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Traker'
}

Header.propTypes = {
    title: PropTypes.string
}

const headingStyle = {
}

export default Header