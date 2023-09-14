import { Link } from "react-router-dom";
import { useAppContext } from "../Context/Context";

export const Card = ({ dentist }) => {

  const { dentistsFavs, addFav } = useAppContext();
  const {name, username, id} = dentist
  const findDentist = dentistsFavs.find(fav => fav.id == id);

  const onClickFav = () => {
    addFav(findDentist, dentist);
  }

  return (
    <div className="p-2 border-2 border-indigo-800 flex flex-col items-center justify-center gap-3">
      <Link to={`/dentist/detail/${id}`}>
        <img src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189901/doctor_ptoeob.jpg" alt={`dentist - ${id}`} />
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3 className="text-xl font-bold">{name}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={onClickFav} className="bg-slate-100 rounded-lg p-1 text-yellow-500">
        {
          findDentist ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path className="text-yellow-500" strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          )
        }
      </button>
    </div>
  );
};
