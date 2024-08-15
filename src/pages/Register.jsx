import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <body class="bg-gray-900 flex items-center justify-center min-h-screen">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div class="flex justify-center mb-8">
            <div class="bg-gray-700 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5 9 6.344 9 8s1.344 3 3 3zm0 2c-2.76 0-5 2.24-5 5v1h10v-1c0-2.76-2.24-5-5-5z" />
                </svg>
            </div>
        </div>
        <div class="text-center mb-6">
            <span class="text-sm text-gray-400">Já tem uma conta?</span>
            <a href="#" class="text-sm text-blue-500 hover:underline">Entrar</a>
        </div>
        <form>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-[#78716C]">Digite seu e-mail</label>
                <input type="email" id="email" class="w-full px-3 py-2 bg-gray-900 text-gray-300 border-b-[0.5px] border-stone-500 focus:outline-none focus:border-purple-500" required />
            </div>
            <div class="flex justify-between mb-6">
                <div class="w-full mr-2">
                    <label for="first-name" class="block mb-2 text-sm font-medium text-[#78716C]">Nome</label>
                    <input type="text" id="first-name" class="w-full px-3 py-2 bg-gray-900 text-gray-300 border-b-[0.5px] border-stone-500 focus:outline-none focus:border-purple-500" required />
                </div>
                <div class="w-full ml-2">
                    <label for="last-name" class="block mb-2 text-sm font-medium text-[#78716C]">Último nome</label>
                    <input type="text" id="last-name" class="w-full px-3 py-2 bg-gray-900 text-gray-300 border-b-[0.5px] border-stone-500 focus:outline-none focus:border-purple-500" required />
                </div>
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-[#78716C]">Senha</label>
                <input type="password" id="password" class="w-full px-3 py-2 bg-gray-900 text-gray-300 border-b-[0.5px] border-stone-500 focus:outline-none focus:border-purple-500" required />
            </div>
            <button type="submit" class="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Entrar</button>
        </form>
    </div>
</body>
  )
}

export default Register