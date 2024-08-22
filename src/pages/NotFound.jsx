import { useNavigate } from 'react-router-dom';
import erroImg from '../assets/Error404.webp';
import { useEffect } from 'react';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, [navigate]);
  return (
    <div 
      className="bg-cover bg-center h-screen w-screen" 
      style={{ backgroundImage: `url(${erroImg})` }}
    >
      <span className="sr-only">Vários livros caídos em uma biblioteca com a mensagem 404 Error</span>
    </div>
  );
}

export default NotFound;
