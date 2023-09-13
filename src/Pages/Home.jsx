

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useEffect, useState } from "react"
import { Card } from "../Components";
import { useAppContext } from "../Context/Context";
import { CircleLoader } from "react-spinners";

export const Home = () => {

  const {dentists, loading } = useAppContext();

  return (
    <main className="home">
      <h1>Home</h1>
      
      <div className='card-grid'>
        {
          loading ? 
            <CircleLoader color="#000" /> : 
              dentists.length >= 1 ? 
                dentists.map(dentist => <Card key={dentist.id} dentist={dentist} />) : 
                  <p>No hay dentistas</p>
        }
      </div>
    </main>
  )
}