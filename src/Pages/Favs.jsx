import React from "react";
import { useAppContext } from "../Context/Context";
import { CircleLoader } from "react-spinners";
import { Card } from "../Components";

export const Favs = () => {

  const { dentistsFavs, loading } = useAppContext();

  return (
    <>
      <main className="px-8 flex flex-col items-center gap-4 pb-6 dark:bg-slate-900 dark:text-white">
        <h1 className="text-6xl">Dentists Favorites</h1>
        {
          loading ?
            <CircleLoader color="#3730a3" /> :
            dentistsFavs.length >= 1 ?
              (
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {dentistsFavs.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
                </div>
              )
              :
              <p className="text-xl">No hay dentistas favoritos</p>
        }
      </main>
    </>
  );
};
