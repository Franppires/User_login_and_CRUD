'use client'

import { useSession } from "next-auth/react"

export default function PrivatePage() { 

  const { data: session } = useSession()

  const dados = [

    {
      nome: 'João Silva',
      cpf: '123.456.789-00',
      email: 'joao@email.com',
      endereco: {
        cep: 16015244,
        rua: 'Cristiano Olsen',
        numero: 123,
        bairro: 'Jardim Sumaré',
        cidade: 'Araçatuba',
        Estado: 'SP',
      },
    },
    {
      nome: 'Maria Santos',
      cpf: '987.654.321-00',
      email: 'maria@email.com',
      endereco: {
        cep: 14401150,
        rua: 'Frederico Moura',
        numero: 456,
        bairro: 'Cidade Nova',
        cidade: 'Franca',
        Estado: 'SP',
      },
    },
    {
      nome: 'Carlos Pereira',
      cpf: '456.789.123-00',
      email: 'carlos@email.com',
      endereco: {
        cep: 96204040,
        rua: 'Almirante Maximiano Fonseca',
        numero: 789,
        bairro: 'Zona Portuária',
        cidade: 'Rio Grande',
        Estado: 'RS',
      },
    },

    
 
    
    // Adicione mais objetos de dados conforme necessário
  ];
  // Função para lidar com a edição de um contato
  const editarContato = (index: number) => {
    // Coloque aqui a lógica para editar o contato com base no índice
    console.log(`Editar contato de índice ${index}`);
  };

  return (
    <>
      {session && (
        <div className="container text-center pt-20">
          <div className="flex justify-between my-4 mx-4">
            <h1 className="text-3xl ">Dados</h1>
            <button className="cursor-pointer bg-customGreen hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 items-center p-2 rounded-3xl ">
              Novo Cadastro 
            </button>
          </div>

          <table className="w-full space-y-4">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>CEP</th>
                <th>Rua</th>
                <th>Número</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Ação</th> {/* Coluna de ação para o botão de edição */}
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr
                  key={index}
                  className="bg-customLightPurple "
                >
                  <td>{item.nome}</td>
                  <td>{item.cpf}</td>
                  <td>{item.email}</td>
                  <td>{item.endereco.cep}</td>
                  <td>{item.endereco.rua}</td>
                  <td>{item.endereco.numero}</td>
                  <td>{item.endereco.bairro}</td>
                  <td>{item.endereco.cidade}</td>
                  <td>
                    <button
                      onClick={() => editarContato(index)}
                      className="cursor-pointer my-4 p-2 rounded-3xl bg-customGreen hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
