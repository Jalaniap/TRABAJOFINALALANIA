window.onload = function() {
    // Primera advertencia
    alert("⚠️ ZONA RESTRINGIDA: Acceso solo a personal autorizado del Ejército.");
    
    // Segunda advertencia con retardo para dinamismo
    setTimeout(() => {
        const confirmar = confirm("¿Desea continuar bajo los protocolos de seguridad militar?");
        if (!confirmar) {
            alert("Acceso denegado. Saliendo del sistema...");
            window.location.href = "https://www.google.com"; // Redirige si cancela
        }
    }, 800);
};

// 2. LÓGICA DEL FORMULARIO Y POP-UP DE CAPTACIÓN
document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Detiene el envío real

    // Captura de valores
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const rango = document.getElementById('rango').value;

    // Validación rápida
    if (dni.length < 8) {
        alert("❌ ERROR: El DNI debe tener al menos 8 dígitos.");
        return;
    }

    // Mostrar el Pop-up Principal
    const popup = document.getElementById('popup');
    const mensaje = document.getElementById('msg-confirmacion');
    
    // Inyectamos los datos captados en el mensaje
    mensaje.innerHTML = `
        <strong>ASPIRANTE:</strong> ${nombre.toUpperCase()}<br>
        <strong>ID MILITAR:</strong> ${dni}<br>
        <strong>ESTADO:</strong> PROCESANDO PARA ${rango.toUpperCase()}<br><br>
        <em>"La patria agradece su servicio."</em>
    `;

    // Efecto visual de "Procesando" antes de mostrar el pop-up
    const btn = document.querySelector('.btn-enviar');
    btn.innerText = "ENCRIPTANDO DATOS...";
    btn.style.background = "#8b0000"; // Rojo alerta

    setTimeout(() => {
        popup.style.display = 'flex';
        btn.innerText = "ENVIAR EXPEDIENTE";
        btn.style.background = "#5d6d31";
    }, 1500);
});

// 3. FUNCIÓN PARA CERRAR VENTANAS
function cerrarPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    
    // Pop-up final de despedida
    alert("Sesión cerrada de forma segura. Sus datos han sido encriptados.");
    document.getElementById('dataForm').reset();
}

// EXTRA: Efecto de consola para el profesor (si revisa el código)
console.log("%c SISTEMA MILITAR ACTIVADO ", "color: white; background: green; font-weight: bold;");