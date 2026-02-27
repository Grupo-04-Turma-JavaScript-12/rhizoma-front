import logo from "../../assets/rhizoma.png";
import { Footer } from "../../components/footer/Footer";
import ListarPlanos from "../../components/planos/listarplanos/ListarPlanos";
import ListarTime from "../../components/time/listartime/ListarTime";
import { SobreNos } from "../sobreNos/SobreNos";
import SobreoProduto from "../sobreoproduto/SobreProduto";

function Home() {
  return (
    <>
      <div
        id="home"
        className="bg-[#355872] flex justify-center p-6 md:min-h-full md:py-16"
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white pt-20">
          <div className="flex flex-col gap-4 items-center justify-center py-4 p-6 font-semibold mb-8 md:mb-0">
            <h1 className="text-4xl mb-3  text-center md:text-5xl md:text-left">
              Onde pessoas criam raízes e crescem juntas!{" "}
            </h1>
            <p className="text-xl mb-4 md:text-2xl md:mb-9">
              Sistema inteligente para centralizar, organizar e fortalecer sua
              gestão de colaboradores.
            </p>
            <button className="border rounded-2xl px-6 py-1 text-2xl transition duration-300 hover:bg-white hover:text-emerald-900 hover:cursor-pointer">
              Entrar
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img
              className="w-8/12 h-auto rounded-b-full object-contain"
              src={logo}
              alt="Imagem Página Home"
            />
          </div>
        </div>
      </div>
      <SobreoProduto />
      <ListarPlanos />

      <SobreNos />
      <ListarTime />

      <Footer />
    </>
  );
}

export default Home;
