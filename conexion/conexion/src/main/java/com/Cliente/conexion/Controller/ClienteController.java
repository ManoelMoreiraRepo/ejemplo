/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Cliente.conexion.Controller;

import com.Cliente.conexion.Entity.Cliente;
import com.Cliente.conexion.Interface.IClienteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    IClienteService iclienteService;

    @GetMapping("/traer")
    public List<Cliente> getCliente() {
        return iclienteService.getCliente();
    }

    @PostMapping("/create")
    public String createCliente(@RequestBody Cliente cliente) {
        iclienteService.savePersona(cliente);
       return "la persona fue creada correctamente";
    }
    
    @PutMapping("/actualizar/{id}")
    public String updateCliente(@PathVariable("id") int id, @RequestBody Cliente cliente){   
        
     this.iclienteService.modifyPersona(cliente);
     return "El cliente fue modificado correctamente";
    }

    @DeleteMapping("/detail/{id}")
    public String deleteCliente( @PathVariable long id) {
        iclienteService.deletePersona(id);
        return "La persona fue eliminada";
    }
}
