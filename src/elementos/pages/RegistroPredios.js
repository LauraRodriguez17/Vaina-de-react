import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistroPredios = () => {
    return(
         <div class="px-4 py-5 my5 text-center">
            <h1 class="display-5 fw-bold">Crear tipos de cultivos</h1>
                <div class="col-lg-6 mx-auto"></div>
                    <div>
                        {/* input para el tipo de rubro */}
                        <div class="row g-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Tipo de Rubro" aria-label="Tipo de Rubro"></input>
                        </div>
                        {/* CANTIDAD DE FERTILIZANTE */}
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Fertilizante" aria-label="Cantidad de Fertilizante"></input>
                        </div>
                        </div>
                        {/* HECTAREAS */}
                        <div class="row g-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Hectáreas" aria-label="Cantidad de hectáreas"></input>
                        </div>
                        {/* CANTIDAD DE SEMILLAS */}
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Semillas" aria-label="Semillas"></input>
                        </div>
                        </div>
                        {/* AGUA POR SEMANA DEL CULTIVO */}
                        <div class="row g-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Cantidad de Agua por semana" aria-label="Agua"></input>
                        </div>
                        {/* TIEMPO DEL CULTIVO */}
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Tiempo del Cultivo" aria-label="TiempoC"></input>
                        </div>
                        </div>
                        {/* TIEMPO DE RECOLECCION DEL CULTIVO */}
                        <div class="row g-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Tiempo de Recolección" aria-label="TiempoR"></input>
                        </div>
                    </div>
                    </div>
                     <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                         <button type="submit" class="btn btn-primary btn-lg px-4 gap-3">Crear</button>
                </div>
        </div>

    );
}
export { RegistroPredios } ;