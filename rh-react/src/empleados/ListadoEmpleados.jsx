import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {

    const urlBase = "http://127.0.0.1:8080/api/empleados";
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        try {
            const resultado = await axios.get(urlBase);
            setEmpleados(resultado.data);
        } catch (error) {
            console.error("Error cargando empleados:", error);
        }
    }

    const eliminarEmpleado = async (id) => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este empleado?");

        if (confirmacion) {
            try {
                await axios.delete(`${urlBase}/${id}/`);
                // Recargamos la lista para ver los cambios
                cargarEmpleados();
            } catch (error) {
                console.error("Error eliminando empleado:", error);
            }
        }
    }

    return (
        <div className="container">
            <div className="container text-center" style={{ margin: "30px" }}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>

            <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((empleado) => (
                            <tr key={empleado.idEmpleado}>
                                <th scope="row">{empleado.idEmpleado}</th>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.departamento}</td>
                                <td>
                                    <NumericFormat value={empleado.sueldo}
                                        displayType={'text'}
                                        thousandSeparator=','
                                        prefix={'$'}
                                        decimalScale={2}
                                        fixedDecimalScale />
                                </td>
                                <td className="text-center">
                                    <div>
                                        <Link to={`/editar/${empleado.idEmpleado}`}
                                            className='btn btn-warning btn-sm me-3'>Editar</Link>

                                        <button
                                            onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                                            className='btn btn-danger btn-sm'>
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}