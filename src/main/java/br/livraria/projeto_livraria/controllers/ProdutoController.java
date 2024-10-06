package br.livraria.projeto_livraria.controllers;

import br.livraria.projeto_livraria.model.Produto;
import br.livraria.projeto_livraria.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/produtos") // Endpoint para acessar os produtos
    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll(); // Retorna todos os produtos
    }
}
