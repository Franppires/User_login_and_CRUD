import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Copyright() { 
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='w-full bg-customGreen p-4 text-white mx-auto max-w-screen-xl'>
        {/* Seção de informações de contato */}
        <section className="mb-4">
          <h1 className="text-3xl mb-4">Entre em contato</h1>
          <p className="mb-2">Telefone: (14) 3238-4022</p>
          <p className="mb-2">Email: <a href="mailto:contato@nexusflow.com.br">contato@nexusflow.com.br</a></p>
          <p>Endereço: Rua Rio Branco, 13-50 | Centro | Bauru - SP, 17017-220</p>
        </section>

        {/* Texto de copyright */}
        <section className="flex justify-between">
          <p>© {currentYear} Franciane Pires.</p>
          {/* Seção de redes sociais */}
          <nav className="flex gap-3">
            <Linkedin size={30} className="rounded cursor-pointer hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <Facebook size={30} className="rounded cursor-pointer hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <Instagram size={30} className="rounded cursor-pointer hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </nav>
        </section>

    </footer>
  ) 
}
