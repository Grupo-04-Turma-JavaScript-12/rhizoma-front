import logo from "./assets/rhizoma.png";

function Home() {

    return (
        <>
            <div className='bg-emerald-900 flex justify-center min-h-screen'>
                <div className='container grid grid-cols-2 text-white'>
                    <div className='flex flex-col gap-4 items-center justify-center py-4 font-semibold'>
                            <h1 className="text-5xl mb-3">Onde pessoas criam raízes e crescem juntas! </h1>
                            <p className="text-2xl mb-9">Sistema inteligente para centralizar, organizar e fortalecer sua gestão de colaboradores.</p>
                        <button className="border rounded-2xl px-6 py-1 text-2xl">
                            Entrar
                        </button>
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className="w-8/12 h-auto rounded-b-full object-contain"
                            src={logo}
                            alt="Imagem Página Home" />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;