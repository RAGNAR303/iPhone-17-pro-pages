import Button from "./Button";
import Card from "./Card";

function CamSpecs() {
  const specs = [
    {
      value: "48MP",
      label: "Principal",
      info: "Sensor quad-pixel com foco automático",
      color: "text-blue-600",
    },
    {
      value: "12MP",
      label: "Ultra Wide",
      info: "Campo de visão de 120 com modo noturno",
      color: "text-orange-600",
    },
    {
      value: "12MP",
      label: "Telefoto 5X",
      info: "Zoom óptico de 5x com estabilização",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="py-20 px-6" id="Camera">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl md:text-4xl mb-10 text-gradient ">
          Sistema de Câmera Pro avançado
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 items-center text-center justify-center w-[80%] mx-auto">
        {specs.map((spec, index) => (
          <Card key={index} variant={"default"}>
            <strong className={`${spec.color} text-4xl `}>{spec.value}</strong>
            <h4 className=" font-bold text-2xl">{spec.label}</h4>
            <p className=" text-gray-400">{spec.info}</p>
          </Card>
        ))}
      </div>
      <main className="mx-auto text-center mt-25">
        <h3 className="text-2xl md:text-4xl mb-4 text-gradient">
          Escolha sua cor
        </h3>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto ">
          Quatro acabamentoas em titânio lindos
        </p>
      </main>
    </section>
  );
}

export default CamSpecs;
