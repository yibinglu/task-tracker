import PropTypes from "prop-types";
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1 style={{color: 'black'}}>{title}</h1>
      <Button color='green' text='hello'/>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
