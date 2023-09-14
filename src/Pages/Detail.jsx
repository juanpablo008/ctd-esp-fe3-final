//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/Context";
import { CircleLoader } from "react-spinners";

export const Detail = () => {

  const { id } = useParams();

  const { loading, getDentist, dentist } = useAppContext();

  useEffect(() => {
    getDentist(id);
  }, [])


  return (
    <main className="dark:bg-slate-900 dark:text-white pb-5">
      <h1 className="text-center text-6xl py-4">Detail Dentist</h1>
      {
        loading ?
          <CircleLoader color="#3730a3" /> :
          dentist &&
          (
            <main className="flex flex-col items-center gap-2">
              <img src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189901/doctor_ptoeob.jpg" alt={`dentist - ${id}`} />
              <h2 className="text-2xl font-bold">{dentist.name}</h2>
              <p><b>Username:</b> {dentist.username}</p>
              <p><b>Email:</b> {dentist.email}</p>
              <p><b>Phone:</b> {dentist.phone}</p>
            </main>
          )
      }

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </main>
  )
}