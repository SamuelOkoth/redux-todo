import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaSignOutAlt } from 'react-icons/fa';
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header-Wrapper">
        <Link to="/" style={{ color: 'brown' }}>
          <FaHome id="icons" />Home
        </Link>
        <Link to="/register" style={{ color: 'purple' }}>
          <FaInfoCircle id="icons" /> Register
        </Link>
        {user && (
          <>
            <Link to="/todos" style={{ color: 'green' }}>
              <FaBook id="icons" /> Todos
            </Link>
            <Link onClick={handleLogout} style={{ color: 'red' }}>
              <FaSignOutAlt id="icons" /> Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
