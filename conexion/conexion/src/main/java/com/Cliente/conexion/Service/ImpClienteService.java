/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Cliente.conexion.Service;

import com.Cliente.conexion.Entity.Cliente;
import com.Cliente.conexion.Interface.IClienteService;
import com.Cliente.conexion.Repository.IClienteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author UP
 */
@Service 
public class ImpClienteService implements IClienteService {
    @Autowired IClienteRepository iclienteRepository;
    @Override
    public List<Cliente> getCliente() {
        List<Cliente> clientemostrar = iclienteRepository.findAll();
        return clientemostrar;
    }

   
   /* public void saveCliente(Cliente cliente) {}
      public void deleteCliente(Long id) {}
    @Override
    public Cliente findPersona(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }*/

    @Override
    public void savePersona(Cliente cliente) {
        iclienteRepository.save(cliente);
    }

    @Override
    public void deletePersona(Long id) {
       iclienteRepository.deleteById(id);
    }
    
}