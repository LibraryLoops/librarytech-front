import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import decoderToken from '../../utils/decoderToken';



const UserDropDown = ({ isOpen, closeDropDownMenu, logOut }) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropDownMenu();
    }
  };
  
  const {id} = decoderToken(localStorage.getItem('token'));
  useEffect(() => {

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {isOpen && (
        <div
          className={`absolute right-0 mt-7 w-48 bg-slate-900  rounded-md shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
            }`}
        >
          <div className="py-1">
            <Link
              className="block px-4 py-2 text-sm text-gray-700 hover:text-sky-400"
              to={`/usuarios/${id}`} >Editar 
            </Link>
            <a
              onClick={logOut}
              className="block px-4 py-2 text-sm text-gray-700 hover:text-sky-400"
            >
              Sair
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDropDown;
