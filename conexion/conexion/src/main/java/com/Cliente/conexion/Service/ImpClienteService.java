/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Cliente.conexion.Service;

import com.Cliente.conexion.Entity.Cliente;
import com.Cliente.conexion.Interface.IClienteService;
import com.Cliente.conexion.Repository.IClienteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author UP
 */
@Service
public class ImpClienteService implements IClienteService {

    @Autowired
    IClienteRepository iclienteRepository;

    @Override
    public List<Cliente> getCliente() {
        List<Cliente> clientemostrar = iclienteRepository.findAll();
        return clientemostrar;
    }

    @Override
    public void savePersona(Cliente cliente) {
        iclienteRepository.save(cliente);
    }

    @Override
    public void deletePersona(Long id) {
        iclienteRepository.deleteById(id);
    }

    @Override
    public void modifyPersona(Cliente cliente) {
        Optional<Cliente> clienteEncontrado = this.iclienteRepository.findById(cliente.getId());
        if (clienteEncontrado.get() != null) {
            clienteEncontrado.get().setCif(cliente.getCif());
            clienteEncontrado.get().setNombre(cliente.getNombre());
            clienteEncontrado.get().setDireccion(cliente.getDireccion());
            iclienteRepository.save(cliente);
        }

    }

    @Override
    public Cliente getPersona(Long id) {
        Cliente cliente = iclienteRepository.findById(id).get();
        return cliente;
    }

}
