document.addEventListener("DOMContentLoaded", () => {
    // 1. CARGA DE DATOS DESDE LA API
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {
            const elemento = document.getElementById("table-cliente");
            
            // Limpiamos el contenido por si hay algo previo
            elemento.innerHTML = ""; 

            // Recorremos los datos que vienen del backend
            data.forEach((cliente, index) => {
                // Creamos una fila (tr) para cada cliente
                const fila = `
                    <tr>
                        <td>${cliente.id}</td>
                        <td>${cliente.nombre}</td>
                        <td>${cliente.apellido}</td>
                        <td>${cliente.dni}</td>
                        <td>${cliente.telefono}</td>
                        <td>${cliente.direccion}</td>
                    </tr>
                `;
                // La agregamos al cuerpo de la tabla
                elemento.innerHTML += fila;
            });
        })
        .catch(error => console.error('Error al obtener clientes:', error));

    // 2. LÓGICA DEL SIDEBAR (Móvil)
    const hamburger = document.querySelector(".hamburger");
    const sidebar   = document.querySelector(".sidebar");
    const overlay   = document.querySelector(".overlay");

    function openSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("show");
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    }

    if (hamburger) hamburger.addEventListener("click", openSidebar);
    if (overlay) overlay.addEventListener("click", closeSidebar);

    // Nav links: marcar activo y cerrar sidebar 
    const navLinks = document.querySelectorAll(".sidebar ul li a[data-page]");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetPage = link.getAttribute("data-page");
            
            // Solo prevenimos el default si no es una navegación real
            if(targetPage === "home" || targetPage === "reportes") {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove("activo"));
                link.classList.add("activo");
                
                // Aquí podrías cambiar el texto del breadcrumb dinámicamente
                document.getElementById("breadcrumb-page").textContent = 
                    targetPage.charAt(0).toUpperCase() + targetPage.slice(1);
                
                closeSidebar();
            }
        });
    });

    // Cerrar sesión 
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
        btnLogout.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("¿Seguro que deseas cerrar sesión?")) {
                alert("Sesión cerrada");
                // window.location.href = "login.html"; // Ejemplo de redirección
            }
        });
    }
});