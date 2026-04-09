package com.senati.gotagota.entity;


import jakarta.persistence.*;

@Entity

@Table(name = "cliente")

public class Cliente {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cliente_id")
    private Long id;

     @Column(nullable = false)
     private Long nombre;

    @Column(nullable = false)
    private Long apellido;

    @Column(nullable = false,unique = true,length = 8)
    private Long dni;

    private String telefono;
    private String direccion;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNombre() {
        return nombre;
    }

    public void setNombre(Long nombre) {
        this.nombre = nombre;
    }

    public Long getApellido() {
        return apellido;
    }

    public void setApellido(Long apellido) {
        this.apellido = apellido;
    }

    public Long getDni() {
        return dni;
    }

    public void setDni(Long dni) {
        this.dni = dni;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
