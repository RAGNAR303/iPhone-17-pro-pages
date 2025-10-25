import Button from "./Button";

function NavBar() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-40 ">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-8">
        <a href="#Design" className="linkNav">
          Design
        </a>
        <a href="#Camera" className="linkNav">
          Câmera
        </a>
        <a href="#Performace" className="linkNav">
          Performace
        </a>
        <a href="#Cores" className="linkNav">
          Cores
        </a>
        <a href="#Buy">
          <Button variant={"blue"} name={"Comprar"}></Button>
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
