import { Link } from "react-router-dom";

export const Card = ({ dentist }) => {

  const {name, username, id} = dentist

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`/dentist/detail/${id}`}>
        <img src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189901/doctor_ptoeob.jpg" alt={`dentist - ${id}`} />
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{name}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};
