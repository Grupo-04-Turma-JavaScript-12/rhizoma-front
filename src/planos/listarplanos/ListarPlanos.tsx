import CardPlano from "../cardplano/CardPlano";

function ListarPlanos() {
  const planos = [
    {
      id: 1,
      titulo: "Plano Essencial",
      preco: 149.0,
      descricao: "Plano básico com excelente custo e benefícios.",
      coberturas: [
        "Cadastro completo de colaboradores",
        "Consulta por ID e cargo",
        "Atualização de informações",
        "Exclusão segura de registros",
        "Banco de dados confiável",
      ],
    },
    {
      id: 2,
      titulo: "Plano Profissional",
      preco: 249.0,
      descricao: "Plano intermediário com excelentes benefícios.",
      coberturas: [
        "Gestão organizada por cargos",
        "Controle estruturado de admissões",
        "Atualizações rápidas e centralizadas",
        "Sistema preparado para expansão",
        "Interface moderna e intuitiva",
      ],
    },
    {
      id: 3,
      titulo: "Plano Premium",
      preco: 349.0,
      descricao: "Plano premium com excelentes benefícios.",
      coberturas: [
        "Estrutura segura e escalável",
        "Banco de dados relacional com integridade garantida",
        "Organização estratégica de colaboradores",
        "Alta confiabilidade nas informações",
        "Preparado para integração futura com novos módulos",
      ],
    },
  ];

  return (
    <section className="container mx-auto mt-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl text-center font-bold">Planos</h2>
        <div className="grid grid-cols-3 gap-4">
          {planos.map((plano) => (
            <CardPlano key={plano.id} plano={plano} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListarPlanos;
