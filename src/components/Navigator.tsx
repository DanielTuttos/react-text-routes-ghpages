import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/contact'}>Contact</Link>
    </>
  );
};

export default Navigator;
