import logo from "../../assets/rhizoma (2).png";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-3">
        <div className="container flex justify-between text-lg mx-8">
          <div className="flex items-center gap">
            <img
              src={logo}
              alt="Logo Rhizoma"
              className="w-20 rounded-b-full"
            />
            {/* <h1 className="text-2xl">Rhizoma</h1> */}
          </div>

          <ul className="flex items-center">
            <li className="after:content-['|'] after:mx-3 last:after:content-none hover:underline cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="after:content-['|'] after:mx-3 last:after:content-none hover:underline cursor-pointer">
              <a href="#produto">Produto</a>
            </li>
            <li className="after:content-['|'] after:mx-3 last:after:content-none hover:underline cursor-pointer">
              <a href="#sobre-nos">Sobre nós</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
