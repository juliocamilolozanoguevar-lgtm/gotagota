document.addEventListener("DOMContentLoaded", () => {
    // 1. CARGA DE DATOS DESDE LA API
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {
            const elemento = document.getElementById("table-cliente");
            /*           
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
           */
            for (let i = 0; i < data.length; i++) {
                //data[i], muestra en forma de array
                let cliente = data[i]

                let fila = `
                    <tr>
                        <td>${cliente.id}</td>
                        <td>${cliente.nombre}</td>
                        <td>${cliente.apellido}</td>
                        <td>${cliente.dni}</td>
                        <td>${cliente.telefono}</td>
                        <td>${cliente.direccion}</td>
                        <td>
            <button class="btn btn-outline-primary btn-sm">
              <i class="fa fa-edit"></i>
            </button>

            <button class="btn btn-outline-danger btn-sm">
              <i class="fa fa-trash"></i>
            </button>
          </td>
                    </tr>
            `
                elemento.innerHTML += fila;
                console.log(cliente)
            };

        });
});

