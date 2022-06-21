import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/formulario.css'
import hombre from '../images/hombre.png'

export const Formulario = () => {
  
  const {register, formState: {errors}, handleSubmit} = useForm(); 
  
  const onSubmit = (data) => {
    console.log(data);
  } 



  return (
    <div className="container p-0 bg-white h-4/5 rounded mt-5 lg:flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="box-border p-5 lg:w-4/6"
      >
        <h1 className="text-5xl font-bold">Formulario con Validación</h1>

        <h1 className="text-3xl font-bold mt-2">react-hook-form 📋 </h1>

        <h3 className="text-2xl mt-20 mb-3">Nombre 🧍:</h3>
        <input
          type="text"
          name="nombre"
          id=""
          className="form-control mt-2"
          placeholder="Ingrese el nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "El campo de nombre es requerido.",
            },
          })}
        />

        <h3 className="text-2xl lg:mt-5 mb-3">Apellido 🧍:</h3>
        <input
          type="text"
          name="apellido"
          id=""
          className="form-control mt-2"
          placeholder="Ingrese el apellido"
          {...register("apellido", {
            required: {
              value: true,
              message: "El campo de apellido es requerido.",
            },
          })}
        />

        <div className="text-center">
          <button className="mt-4 btn btn-success box border p-3 w-4/6">
            Enviar formulario
          </button>
        </div>

        {errors.nombre && (
          <div className="rounded p-2 box-border border border-2 mt-3 text-danger">
            <div className="xl:p-4">{errors.nombre.message}</div>
          </div>
        )}

        {errors.apellido && (
          <div className="rounded p-2 box-border border border-2 mt-2 text-danger">
            <div className="xl:p-4">{errors.apellido.message}</div>
          </div>
        )}
      </form>
      <div className="bg-gray-900 h-52 lg:h-full lg:w-4/6 p-4">
        <div className="clip bg-white w-2/6 h-40 xl:mt-20 xl:ml-24 box-border p-2 text-center">
          Este formulario fue hecho con <strong>REACT JS</strong> por:
          <h4 className="mt-3">
            <strong>Kevin Daza</strong>
          </h4>
        </div>

        <img
          src={hombre}
          alt="hombre"
          className="hidden xl:block xl:absolute xl:top-60 xl:right-60 "
        />
      </div>
    </div>
  );
}
