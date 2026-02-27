function SobreoProduto() {
  return (
    <>
       <div className="bg-gray-100 container mx-auto flex justify-center items-center">
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/ms3dptda1/medium-shot-female-economist-holding-tablet.jpg"
            alt="Imagem Página Home"
            className="w-2/3"
          />
        </div>
        <div className="text-[#1E7539] ">
          <h2 className="text-5xl font-bold text-center mb-10">Nossas Soluções</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 items-center justify-center p-4 border rounded-xl shadow-gray-200 shadow-md">
              <p className="text-xl ">Plano Essencial</p>
              <p className="text-sm ">
                {' '}
                Indicado para pequenas empresas que estão começando a organizar
                seu RH.
              </p>
              <p className="text-xs">
               Ideal para empresas que precisam organizar e centralizar as informações dos seus colaboradores de forma simples e segura.
               Permite cadastrar, consultar, atualizar e excluir dados com rapidez, garantindo controle e organização desde o primeiro dia.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center p-4 border rounded-xl shadow-gray-200 shadow-md">
              <p className="text-xl">Plano Profissional</p>
              <p className="text-sm ">
                {' '}
                Indicado para empresas em crescimento.
              </p>
              <p className="text-xs">
                Desenvolvido para empresas que buscam mais eficiência e agilidade na gestão de pessoas.
                Além do controle completo dos colaboradores, oferece organização estratégica por cargos e estrutura preparada para crescimento do negócio.

              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center p-4 border rounded-xl shadow-gray-200 shadow-md">
              <p className="text-xl">Plano Estratégico</p>
              <p className="text-sm ">
                {' '}
                Indicado para empresas que querem gestão inteligente e escalável.
              </p>
              <p className="text-xs">
               Uma solução completa para empresas que desejam profissionalizar a gestão de colaboradores.
               Estrutura robusta, segura e preparada para escalar junto com o crescimento da empresa, garantindo controle total das informações e tomada de decisão mais estratégica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
export default SobreoProduto;


