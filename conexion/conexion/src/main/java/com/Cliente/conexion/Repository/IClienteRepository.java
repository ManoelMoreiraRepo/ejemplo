/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Cliente.conexion.Repository;

import com.Cliente.conexion.Entity.Cliente;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author UP
 */
@Repository
public interface IClienteRepository extends JpaRepository<Cliente, Long>{
    public Optional<Cliente> findByNombre(String nombre); 
    public boolean  existsByNombre(String nombre);   
}
