package br.livraria.projeto_livraria.repository;

import br.livraria.projeto_livraria.model.Produto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProdutoRepository extends MongoRepository<Produto, String> {
    // Você pode adicionar métodos de consulta personalizados, se necessário.
}
