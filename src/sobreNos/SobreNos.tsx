export function SobreNos() {
  return (
    <section
      id="sobre-nos"
      className="
        relative
        w-full
        bg-neutral-950
        text-white
        py-28
        flex
        justify-center
      "
    >
      <div className="relative z-10 w-full max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
          Sobre nós
        </h2>

        {/* Card principal */}
        <div
          className="
            bg-white/5
            backdrop-blur-xl
            border-2
            border-white/10
            rounded-3xl
            p-10
            md:p-14
          "
        >
          {/* Sobre a empresa */}
          <div
            className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-2xl
              p-10
              md:p-12
              mb-16
            "
          >
            <h3 className="text-xl md:text-2xl font-medium mb-8 text-center">
              Sobre a empresa
            </h3>

            <p className="max-w-3xl mx-auto text-center text-white/80 leading-relaxed">
              O RHIZOMA é um sistema de gestão de colaboradores desenvolvido
              para auxiliar empresas no controle, organização e atualização dos
              dados de seus profissionais de forma centralizada, prática e
              segura. Preparado para crescer junto com o negócio, o sistema
              oferece uma base confiável para a gestão de pessoas.
            </p>
          </div>

          {/* Cards flutuantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Missão */}
            <div
              className="
                bg-white/5
                backdrop-blur-lg
                border-b-8
                border-white/10
                rounded-2xl
                p-8
                md:p-10
                shadow-lg
                shadow-black/30
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <h4 className="text-lg font-semibold mb-4">Missão</h4>
              <p className="text-white/70 leading-relaxed">
                Facilitar a gestão de colaboradores por meio de uma solução
                simples, segura e eficiente, contribuindo para a organização e o
                crescimento das empresas.
              </p>
            </div>

            {/* Visão */}
            <div
              className="
                bg-white/5
                backdrop-blur-lg
                border-b-8
                border-white/10
                rounded-2xl
                p-8
                md:p-10
                shadow-lg
                shadow-black/30
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <h4 className="text-lg font-semibold mb-4">Visão</h4>
              <p className="text-white/70 leading-relaxed">
                Ser uma plataforma de referência em gestão de colaboradores,
                reconhecida pela confiabilidade, usabilidade e capacidade de
                evolução.
              </p>
            </div>

            {/* Valores */}
            <div
              className="
                bg-white/5
                backdrop-blur-lg
                border-b-8
                border-white/10
                rounded-2xl
                p-8
                md:p-10
                shadow-lg
                shadow-black/30
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <h4 className="text-lg font-semibold mb-4">Valores</h4>
              <ul className="space-y-2 text-white/70">
                <li>• Simplicidade</li>
                <li>• Confiabilidade</li>
                <li>• Organização</li>
                <li>• Evolução contínua</li>
                <li>• Responsabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}