import { showAlertSuccErr } from "../Helpers/showAlerts";
import { useForm } from "../Hooks/useForm";

export const Form = () => {

  const { name, email, onInputChange } = useForm({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 5 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      showAlertSuccErr({
        title: 'Por favor verifique su información nuevamente',
        icon: 'error'
      })
      return
    }

    showAlertSuccErr({
      title: `Gracias ${name}, te contactaremos cuando antes vía mail`,
      icon: 'success'
    })

    console.log({ name, email })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Pepito Perez" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5 dark:text-black font-bold" value={name} onChange={onInputChange} />
        </div>
        <div className="mt-2">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Pepito.perez@email.com" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5 dark:text-black font-bold" value={email} onChange={onInputChange} />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-4">Enviar</button>
      </form>
    </div>
  );
};
