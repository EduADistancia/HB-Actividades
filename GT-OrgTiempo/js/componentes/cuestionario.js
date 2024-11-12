function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let pregunta;
    let devolucionDiv;
    let contadorId = 0;
    let rta = null;

    for (let d of datos) {
        

        if (d["Tipo"] === "Pregunta"){

            if (rta) {
                divItem.append(rta, devolucionDiv);
                rta = null;
            }

            pregunta = d["Texto"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Texto"];
            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            devolucionDiv = document.createElement('div');

        } else if (d["Tipo"] === "Respuesta") {

            if (!rta) {
                let etiqSelect = document.createElement('label');
                etiqSelect.innerText = 'Opciones: ';
                etiqSelect.htmlFor = pregunta;
                divItem.append(etiqSelect);

                rta = document.createElement('select');
                rta.id = pregunta;
                let seleccione = document.createElement('option');
                seleccione.text = 'Seleccioná';
                seleccione.selected = true;
                seleccione.disabled = true;
                rta.append(seleccione);
                devolucionDiv = document.createElement('div');
                devolucionDiv.className = 'devoluciones';
            }

            let opcion = document.createElement('option');
            opcion.name = pregunta;
            opcion.value = `preg${contadorId}`;
            opcion.text = d["Texto"];

          
            let devolucionP = document.createElement('p');
            devolucionP.classList = 'marco oculto';
            devolucionP.setAttribute('name', `preg${contadorId}`);
            devolucionP.innerText = d["Devolucion"];

            
            let img = document.createElement('img');
        
            if (d["Estado"]) {
                img.setAttribute('src', './img/correcto.png');
                img.setAttribute('alt', 'Correcto');
                devolucionP.classList.add('marcoOK');
            } else {
                img.setAttribute('src', './img/incorrecto.png');
                img.setAttribute('alt', 'Incorrecto');
                devolucionP.classList.add('marcoNoOk');
            }
            
            img.setAttribute('name', `preg${contadorId}`);
            img.className = 'imgEstado oculto';

            devolucionDiv.append(devolucionP, img);
            rta.append(opcion);
            
        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

    if (rta) {
        divItem.append(rta, devolucionDiv);
        rta = null;
    }

};

export { crearCuestionario }