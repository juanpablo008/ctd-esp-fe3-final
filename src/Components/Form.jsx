import { showAlertSuccErr } from "../Helpers/showAlerts";
import { useForm } from "../Hooks/useForm";

export const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const { name, email, onInputChange } = useForm({
    name: "",
    email: "",
  }, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 5) {
      showAlertSuccErr({
        title: 'El nombre debe tener al menos 5 caracteres',
        icon: 'error'
      })
      return
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      showAlertSuccErr({
        title: 'El correo es invalido',
        icon: 'error'
      })
      return
    }

    showAlertSuccErr({
      title: `Gracias ${name}, te contactaremos pronto!!`,
      icon: 'success'
    })

    console.log({ name, email })
  }

  return (
    <main className="form">
      <form onSubmit={handleSubmit}>
        <div className="label">
          <label htmlFor="name">Nombre: </label>
          <input type="text" id="name" name="name" placeholder="Pepito Perez" value={name} onChange={onInputChange} />
        </div>
        <div className="label">
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" placeholder="Pepito.perez@email.com" value={email} onChange={onInputChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};
