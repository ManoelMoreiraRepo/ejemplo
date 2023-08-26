/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Cliente.conexion.Interface;

import com.Cliente.conexion.Entity.Cliente;

import java.util.List;

/**
 *
 * @author UP
 */
public interface IClienteService {
  
  public List<Cliente> getCliente();
  
  public void savePersona(Cliente cliente);
  
  public void deletePersona(Long id);
  
  public void modifyPersona(Cliente cliente);
  
  public Cliente getPersona(Long id);
}
