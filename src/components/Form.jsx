import { useState } from "react";
import { supabase } from "../lib/supabase";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [direccion, setDireccion] = useState("");
  const [mail, setMail] = useState("");
  const enviarDatos = async (event) => {
    event.preventDefault();

    // Validación de campos
    if (!nombre || !tel || !direccion || !mail) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      // Envío de datos a Supabase
      const { data, error } = await supabase
        .from("compras")
        .upsert([{ nombre, tel, direccion, mail }])
      if (error) {
        console.error("Error al enviar datos a Supabase:", error.message);
      } else {
        alert("Datos enviados correctamente:", data);
        // Puedes realizar acciones adicionales después del envío exitoso, como mostrar un mensaje de éxito o redirigir al usuario.
      }
    } catch (error) {
      console.error("Error inesperado:", error.message);
    }
  };

  return (
    <section className="container mx-auto mt-8">
      <form
        id="compraForm"
        className="max-w-md mx-auto p-8 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-2xl mb-4 font-bold text-center">
          Dejanos tus datos y te contactamos
        </h2>
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre Completo:
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre completo"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tel"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Numero de telefono:
          </label>
          <input
            type="number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            id="tel"
            name="tel"
            placeholder="Escribe el número de tu celular o WhatsApp"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo Electronico: 
          </label>
          <input
            type="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            id="mail"
            name="mail"
            placeholder="Escribe tu correo electronico"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="direccion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Dirección de Envío:
          </label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            id="direccion"
            name="direccion"
            placeholder="Escribe tu dirección de envío"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={enviarDatos}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Enviar datos
        </button>
      </form>
    </section>
  );
}

export default Formulario;
