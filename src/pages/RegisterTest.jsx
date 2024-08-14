import React from 'react'
import { Link } from 'react-router-dom'

const RegisterTest = () => {
  return (
    <div>
      <Link to='/'>
          <p>Voltar</p>
      </Link>
        <h2>Register test</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit corporis id nulla quis perspiciatis. Fugiat non natus omnis sed maxime unde, corporis temporibus, quia, ipsum repudiandae fugit aperiam soluta placeat nemo autem quisquam facere dolorum atque cumque ut vitae quibusdam. Natus quaerat vero eveniet aut libero modi aspernatur rerum commodi.</p>
        <p>Já tem conta? faça seu <Link to='/login'><span className='text-red-600'>login!</span></Link></p>
    </div>
  )
}

export default RegisterTest