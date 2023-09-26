
import { SignIn } from "@/app/components/signIn";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Coluna da direita com botão de login social */}
        <section className="flex flex-col w-1/2 h-screen pl-4 justify-center text-left gap-4">
          <h2 className='text-5xl'>"Bem-vindo(a) de volta!</h2>
          <p className="text-2xl">É ótimo tê-lo aqui novamente.</p>  
          <p className="text-2xl">Por favor, faça login para acessar sua conta e continuar aproveitando todos os recursos e serviços que temos a oferecer.</p>  
          <p className="text-2xl">Se você é novo por aqui, fique à vontade para se registrar e fazer parte da nossa comunidade.</p>  
          <p className="text-2xl">Estamos ansiosos para te receber!</p>  

        </section>
        {/* Coluna da esquerda com o formulário de login */}
        <section className="flex flex-col w-1/2 h-screen pr-4 justify-center items-center">
          <form action="/api/login" method="post" className="w-full max-w-md">
            <h1 className="text-5xl font-bold text-center mb-8">Login</h1>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="rounded p-2 w-full bg-customLightPurple"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="senha" className="block mb-2">
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                required
                className="rounded p-2 w-full bg-customLightPurple"
              />
            </div>
            

            <div className="mb-8">
              <input
                type="submit"
                value="Acessar"
                className="bg-customGreen text-white px-4 py-2 w-full hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          </form>
          <SignIn />
        </section>
      </div>
    </>
  )
}
