function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let pregunta;
    let devolucionDiv;
    let contadorId = 0;

    for (let d of datos) {
        

        if (d["Tipo"] === "Pregunta"){
            pregunta = d["Texto"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Texto"];
            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            devolucionDiv = document.createElement('div');

        } else if (d["Tipo"] === "Respuesta") {
            let rta = document.createElement('li');
            let chBox = document.createElement('input');
            chBox.type = 'radio';
            // chBox.type = d["Etiqueta"];
            chBox.name = pregunta
            chBox.id = `preg${contadorId}`;
            
            let etiqRta = document.createElement('label');
            etiqRta.setAttribute('for', `preg${contadorId}`);
            etiqRta.innerHTML = d["Texto"]
            
            let devolucionP = document.createElement('p');
            devolucionP.classList = 'contraste2 oculto';
            devolucionP.setAttribute('name', `preg${contadorId}`);
            devolucionP.innerText = d["Devolucion"];

            if (d["Etiqueta"] === "checkbox") {
                devolucionDiv = document.createElement('div');
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
                
                img.setAttribute('name', `${d["Texto"] === "No" ? d["Texto"] : "Si"}${contadorId}`);
                img.className = 'imgEstado oculto';

                devolucionDiv.append(devolucionP, img);
                rta.append(chBox, etiqRta, devolucionDiv);
                respuestasUl.append(rta);
                divItem.append(respuestasUl);

            } else {
                devolucionDiv.append(devolucionP);
                rta.append(chBox, etiqRta);
                respuestasUl.append(rta);
                divItem.append(respuestasUl, devolucionDiv);
            }


        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

};

export { crearCuestionario }