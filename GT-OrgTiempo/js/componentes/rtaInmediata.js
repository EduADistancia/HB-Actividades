// Muestra de respuesta de acuerdo a opción seleccionada

function mostrarRtaInmediata() {
    let opciones = document.querySelectorAll('select');
    opciones.forEach(op => {
        op.addEventListener('change', function() {
            let opValue = op.value;
            console.log('cambió!', opValue);
            let devText = document.querySelector(`p[name=${opValue}]`);
            let devTodas = devText.parentElement;
            console.log(devTodas)
            devTodas.childNodes.forEach(d => d.classList.add('oculto'));

            devText.classList.remove('oculto');
            let devImg = document.querySelector(`img[name=${opValue}]`);
            devImg.classList.remove('oculto');
        });
    });
}

export { mostrarRtaInmediata }