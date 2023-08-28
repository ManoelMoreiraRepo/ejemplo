
package com.Cliente.conexion.Interface;

import com.Cliente.conexion.Entity.Cliente;

import java.util.List;
public interface IClienteService {
  
    public List<Cliente> getCliente();
  
  public void savePersona(Cliente cliente);
  
  public void deletePersona(Long id);
  
  public Cliente findPersona(Long id);   

    public void modifyPersona(Cliente cliente);

    public Cliente getPersona(long id);
}
