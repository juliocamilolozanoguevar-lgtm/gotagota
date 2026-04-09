// EVENTO EN JAVASCRIPT
document.addEventListener("DOMContentLoaded", () => {
   fetch('http://localhost:8080/api/clientes')
   .then(response => response.json())
   .then(
    data => console.log(data)
) ;
});