import { CardShop } from "../components/CardShop";
import { obras } from "../data";

const TiendaPage = () => {
  return (
    <main className=" rounded-2xl flex flex-col gap-4 font-yanone mx-6 text-zinc-800">
      {obras.map((obra) => (
        <CardShop
          src={obra.image}
          alt={""}
          title={obra.title}
          description={obra.description}
          resolution={obra.resolution}
          key={obra.id}
        />
      ))}
    </main>
  );
};

export default TiendaPage;
