// EVENTO: CARGAR DATOS
document.addEventListener("DOMContentLoaded", () => {

  fetch("http://localhost:8080/api/clientes")
    .then((response) => response.json())
    .then((data) => {
      const elemento = document.getElementById("table-cliente");

      data.forEach(cliente => {
        let fila = `
          <tr>
            <td>${cliente.id}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.dni}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.direccion}</td>
            <td> 
              <button class="btn btn-outline-primary me-2">
                <i class="fas fa-edit"></i> Editar
              </button>
              <button data-idcliente="${cliente.id}" class="btn btn-outline-danger btnEliminar">
                <i class="fas fa-trash"></i> Eliminar
              </button>
            </td>
          </tr>`;
        
        elemento.innerHTML += fila;
      });
    });


    //DOM (document object model) Dar accion al boton de guardar cliente
 const btnSaveCliente = document.getElementById("btn-crearcliente")
 btnSaveCliente.addEventListener("click", guardarCliente);
});

// EVENTO CLICK (ELIMINAR)
document.addEventListener("click", function (e) {
  const btnDelete = e.target.closest(".btnEliminar");

  if (btnDelete) {
    const id = btnDelete.dataset.idcliente;

    if (confirm("¿Seguro que deseas eliminar este cliente?")) {
      fetch("http://localhost:8080/api/clientes/" + id, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          alert('Cliente eliminado correctamente');
          location.reload();
        } else {
          alert('Error al eliminar el cliente');
        }
      });
    }
  }
});

// FUNCIÓN GUARDAR CLIENTE
function guardarCliente() {
  const nombre = document.getElementById("c_nombre").value;
  const apellido = document.getElementById("c_apellido").value;
  const dni = document.getElementById("c_dni").value;
  const telefono = document.getElementById("c_telefono").value;
  const direccion = document.getElementById("c_direccion").value;

  fetch("http://localhost:8080/api/clientes", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre,
      apellido,
      dni,
      telefono,
      direccion
    })
  })
  .then(response => {
    console.log(response)
  });
}