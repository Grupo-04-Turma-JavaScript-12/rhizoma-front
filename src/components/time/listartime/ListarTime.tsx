import CardTeam from "../cardteam/CardTeam";

function ListarTime() {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <h1 className="text-center text-4xl font-bold mb-12">Equipe</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
        <CardTeam
          name="Alberto Durán"
          role="Tech Lead"
          image="https://avatars.githubusercontent.com/u/67593467?v=4"
          linkedin="https://www.linkedin.com/in/alberto-janeiro"
          github="https://github.com/AlbertoDuranFilho"
        />
        <CardTeam
          name="André César"
          role="Tech Lead"
          image="https://avatars.githubusercontent.com/u/216065214?v=4"
          linkedin="https://www.linkedin.com/in/andrecesar-dev/"
          github="https://github.com/andrecesarhdev"
        />
        <CardTeam
          name="Bruna Melo"
          role="Tech Lead"
          image="https://avatars.githubusercontent.com/u/226072233?v=4"
          linkedin="https://www.linkedin.com/in/bruna-melo-9335381b3/"
          github="https://github.com/bkmelo"
        />
        <CardTeam
          name="Giovanna Roberta"
          role="Tech Lead"
          image="https://avatars.githubusercontent.com/u/102972472?v=4"
          linkedin="https://www.linkedin.com/in/giovannaroberta/"
          github="https://github.com/gioroberta"
        />
        <CardTeam
          name="Jacqueline Cardeal"
          role="Tech Lead"
          image="https://avatars.githubusercontent.com/u/141357140?v=4"
          linkedin="https:/www.linkedin.com/in/jacqueline-cardeal/"
          github="https://github.com/jackmarques"
        />
        <CardTeam
          name="Renato Sales"
          role="Tech Lead"
          image="https://avatars.githubusercontent.com/u/101156709?v=4"
          linkedin="https://www.linkedin.com/in/renato-sales-desenvolvedor/"
          github="https://github.com/renato-sales"
        />
      </div>
    </div>
  );
}

export default ListarTime;
