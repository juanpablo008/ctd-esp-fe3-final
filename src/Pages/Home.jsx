

//TODO: Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Card } from "../Components";
import { useAppContext } from "../Context/Context";
import { CircleLoader } from "react-spinners";

export const Home = () => {

  const { dentists, loading } = useAppContext();

  return (
    <main className="px-8 flex flex-col items-center gap-4 pb-6 dark:bg-slate-900 dark:text-white">
      <h1 className="text-6xl">Home</h1>
      {
        loading ?
          <CircleLoader color="#3730a3" /> :
          dentists.length >= 1 ?
            (
              <div className="grid grid-cols-4 gap-4 mt-4">
                {dentists.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
              </div>
            )
            :
            <p className="text-xl">No hay dentistas</p>
      }
    </main>
  )
}