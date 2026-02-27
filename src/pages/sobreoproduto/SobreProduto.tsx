import ImageRH from "../../assets/rh-sobre.jpg";

function SobreoProduto() {
  return (
    <>
      <h2 id="produto" className=" text-4xl font-bold text-center my-10">
        Nossas Soluções
      </h2>
      <div className="container mx-auto flex justify-center items-center p-8 gap-8">
        <div className="flex justify-center w-1/2">
          <img
            src={ImageRH}
            alt="Imagem Página Home"
            className="
                duration-300
                hover:opacity-90
                transition-opacity"
          />
        </div>
        <div className="text-black flex flex-col w-1/2">
          <div className="grid grid-cols-1 gap-4">
            <div
              className="flex flex-col gap-2 items-center justify-center p-3 rounded-xl shadow-gray-200  shadow-md transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl"
            >
              <p className="text-xl ">Plano Essencial</p>
              <p className="text-sm ">
                {" "}
                Indicado para pequenas empresas que estão começando a organizar
                seu RH.
              </p>
              <p className="text-xs">
                Ideal para empresas que precisam organizar e centralizar as
                informações dos seus colaboradores de forma simples e segura.
                Permite cadastrar, consultar, atualizar e excluir dados com
                rapidez, garantindo controle e organização desde o primeiro dia.
              </p>
            </div>
            <div
              className="flex flex-col gap-2 items-center justify-center p-3 rounded-xl shadow-gray-200 shadow-md transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl"
            >
              <p className="text-xl">Plano Profissional</p>
              <p className="text-sm ">
                {" "}
                Indicado para empresas em crescimento.
              </p>
              <p className="text-xs">
                Desenvolvido para empresas que buscam mais eficiência e
                agilidade na gestão de pessoas. Além do controle completo dos
                colaboradores, oferece organização estratégica por cargos e
                estrutura preparada para crescimento do negócio.
              </p>
            </div>
            <div
              className="flex flex-col gap-2 items-center justify-center p-3 rounded-xl shadow-gray-200 shadow-md transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl"
            >
              <p className="text-xl">Plano Premium</p>
              <p className="text-sm ">
                {" "}
                Indicado para empresas que querem gestão inteligente e
                escalável.
              </p>
              <p className="text-xs">
                Uma solução completa para empresas que desejam profissionalizar
                a gestão de colaboradores. Estrutura robusta, segura e preparada
                para escalar junto com o crescimento da empresa, garantindo
                controle total das informações e tomada de decisão mais
                estratégica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SobreoProduto;
