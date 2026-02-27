export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#355872] text-white py-14 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-center tracking-wide mb-4">
          Onde pessoas criam raízes e crescem juntas
        </h2>

        <div className="w-24 h-1 bg-[#7AAACE] mx-auto rounded-full mb-10"></div>

        <div className="h-px bg-white/20 mb-12"></div>

        <div className="grid md:grid-cols-[1.3fr_1fr_1.3fr] gap-12 items-start">
          <div className="flex flex-col items-center text-center space-y-5">
            <img
              src="/src/assets/Rhizoma_logo.png"
              alt="Rhizoma Logo"
              className="w-40 opacity-95 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
            />

            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Plataforma que conecta pessoas e estrutura processos de forma
              orgânica, inteligente e sustentável.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Produto
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Sobre Nós
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Fique por dentro</h3>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:border-white transition text-sm"
              />
              <button className="bg-[#7AAACE] hover:bg-[#597e9b] transition px-5 py-2 rounded-full font-medium text-sm shadow-md hover:shadow-lg cursor-pointer">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/20 my-10"></div>

        <div className="text-center text-sm text-white/70">
          © 2026 Rhizoma — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
