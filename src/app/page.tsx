import Image from 'next/image'; // Importe o componente Image
import Copyright from './footer';

export default function Home() {
  return (
    <>
      <section className='flex  p-4 '>
        {/* Coluna da imagem */}
        <div className=''>
          <Image src="/pc_home.png" alt="Imagem de boas-vindas" width={800} height={600} className="w-full" />
        </div>
        {/* Coluna de texto */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-4 leading-relaxed">Bem-vindo a um mundo de possibilidades!</h1>
          <p className="text-2xl font-bold mb-4">Nosso site de cadastro é a sua porta de entrada para uma jornada de descobertas.</p>
          
        </div>  
      </section>
      {/* Seção de Comentários */}
      <section className=' p-4 '>
        <h1 className="text-4xl text-center font-bold mt-10 mb-8">O que nossos usuários dizem?</h1>
        <article className="grid md:flex-col grid-cols-1 md:grid-cols-2 bg-customBackgroundPurple rounded-3xl ">
          {/* Primeiro comentário */}
          <div className="flex w-full p-4 mt-4 mr-2 ">
            <Image src="/mariana.png" alt="Foto Mariana" />
            <div className="flex flex-col justify-center gap-5 p-2 ml-3">
              <p>"A plataforma é incrivelmente fácil de usar! Encontrei tudo o que precisava rapidamente. Além disso, o formulário de cadastro foi simples e direto ao ponto, tornando o processo extremamente conveniente."</p>
              <p>- Mariana L.</p>
            </div>
          </div>
          {/* Segundo comentário */}
          <div className="flex w-full p-4 mt-4 ">
            <Image src="/pedro.png" alt="Foto Pedro" />
            <div className="flex flex-col justify-center gap-5 p-2 ml-3">
              <p>"O atendimento ao cliente superou minhas expectativas. Tive algumas dúvidas sobre o preenchimento do formulário e fui respondido quase que imediatamente. Fiquei impressionado com a atenção e dedicação da equipe."</p>
              <p>- Pedro D.</p>
            </div>
          </div>
          {/* Terceiro comentário */}
          <div className="flex w-full p-4 mt-4 ">
            <Image src="/andre.png" alt="Foto Andre" />
            <div  className="flex flex-col justify-center gap-5 p-2 ml-3">
              <p>"A plataforma é muito intuitiva, mesmo para quem não é muito familiarizado com tecnologia. Preencher o formulário de cadastro foi tranquilo, e saber que minha privacidade está sendo respeitada é um grande diferencial."</p>
              <p> - Andre P.</p>
            </div>
          </div>
          {/* Quarto comentário */}
          <div className="flex w-full p-4 mt-4 ">
            <Image src="/camila.png" alt="Foto Camila" />
            <div className="flex flex-col justify-center gap-5 p-2 ml-3">
              <p>"Estou impressionado com a eficiência do atendimento. Tive um problema ao preencher o formulário, mas a equipe de suporte agiu prontamente e me guiou passo a passo até a resolução. A plataforma e o atendimento são de primeira classe!"</p>
              <p> - Camila M.</p>
            </div>
          </div>
        </article>
      </section>
      <footer>
        <Copyright/>
      </footer>
    </>
  );
}
