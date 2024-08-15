import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext';
import { getUserById } from '../services/usuarios';

const BookTest = () => {
  const { token, getInfoToken } = useContext(AuthContext);
  const { id, email } = getInfoToken();
  const [user, setUser] = useState({});

  const getUser = async () => {
    const user = await getUserById(id, token);
    setUser(user);
  }

  useEffect(() => {
    getUser();
    console.log(user)
  }, [id])


  return (
    <div className='bg-gray-500 h-screen'>
      <Link to='/'>
        <p>Voltar</p>
      </Link>
          <p>{`Seu id é ${id}, seu email é ${email} e seu nome é ${user.nome}`}</p>
        <h2 className='text-3xl mb-32'>Book test</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit corporis id nulla quis perspiciatis. Fugiat non natus omnis sed maxime unde, corporis temporibus, quia, ipsum repudiandae fugit aperiam soluta placeat nemo autem quisquam facere dolorum atque cumque ut vitae quibusdam. Natus quaerat vero eveniet aut libero modi aspernatur rerum commodi.</p>
        
    </div>
  )
}

export default BookTest