import { CardShop } from "../components/CardShop";
import { obras } from "../data";

const TiendaPage = () => {
  return (
    <main className=" rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 lg: gap-4 font-yanone mx-6 text-zinc-800">
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
