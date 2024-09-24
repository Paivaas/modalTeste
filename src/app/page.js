"use client";

import { useState } from 'react';
import Swal from 'sweetalert2';

const MeuComponente = () => {
  const [valor, setValor] = useState('');

  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Confirmação',
      text: 'Você tem certeza que deseja continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Sucesso!', 'Ação confirmada!', 'success');
      }
    });
  };

  return (
    <div className="flex w-screen h-screen max-xl:p-16 max-sm:p-8">

      <div className="h-full w-2/3 flex flex-col justify-center items-center gap-20 max-xl:w-full">

        <div className="flex flex-col gap-14">
          
          <div className="flex flex-col gap-4 pb-10">

            <h1 className="text-gray-3 text-5xl">Login Lótus</h1>
            <h2 className="text-gray-3">Ainda não possui uma conta? <span className="hover:text-gray-2 cursor-pointer transition duration-150 ease-in-out">Clique aqui</span> </h2>
          </div>

          {/* Campos para entrada de valor */}

          <form className="flex flex-col gap-4 w-[40vw] font-ABeeZee max-xl:w-full">

            <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
                <input type="email" placeholder="Seu email" className="w-full" onChange={(e) => setEmail(e.target.value)}
                aria-label="Seu email"
                required/>
              </div>

              <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
                <input type="password" placeholder="Sua Senha" className="w-full" onChange={(e) => setPassword(e.target.value)}aria-label="Sua Senha"
                required/>
              </div>

              <p className="text-pink-3 hover:text-pink-2  hover:cursor-pointer transition duration-150 ease-in-out">Esqueceu sua senha?</p>

          </form>

          <button onClick={mostrarAlerta} className="transition duration-150 ease-in-out bg-gradient-to-r from-pink-3 to-orange-3 w-40 p-4 px-6 items-center justify-between rounded-full border-2 border-black flex hover:cursor-pointer hover:scale-95">
            
            <p className="text-xl">Entrar</p>
            
          </button>

        </div>

      </div>


      <div className="h-full w-1/3 max-xl:w-0 max-xl:hidden">

        <div className="w-full h-1/3 bg-red-degrade-1 flex align-top justify-end"></div>
        <div className="w-full h-1/3 bg-red-degrade-2"></div>
        <div className="w-full h-1/3 bg-red-degrade-3"></div>

      </div>
      
    </div>
  );
};

export default MeuComponente;
