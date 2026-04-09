package com.senati.gotagota.service;

import com.senati.gotagota.entity.Cliente;
import com.senati.gotagota.repository.ClienteRepository;
import com.senati.gotagota.service.ClienteService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//3 ANOTACIONES
//Indica que esta clase maneja penticiones HTTPS y DEVUELVE JSON
@RestController
// Define la URL Base de todos los END-POINT de esta clase
@RequestMapping("api/clientes")
// Esta anotacion permite que el front-end pueda llammar a esta API
// si no ponemos esto,el navegador bloquea las peticiones por politicas CORS
@CrossOrigin(origins = "*")

public class ClienteService {
    private final ClienteService clienteService;
    public ClienteController(ClienteService clienteService){
        this.clienteService = clienteService;
}
    //GET / api/clientes -> devuelve todos los clientes en formato JSON
    @GetMapping
    public List<Cliente>listar(){return clienteService.ListarTodos();}
}

