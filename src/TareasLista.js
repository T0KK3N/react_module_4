import React from 'react'
import Tarea from './Tarea'

export default function TareasLista({ tareas }) {
    return (
        tareas.map(tarea => {
            return <Tarea tarea={tarea} />
        })
    )
}
