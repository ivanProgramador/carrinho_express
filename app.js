const express = require('express');
const app = express();
const port = 7070;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//array vazio que vai receber os itens
let carrinho = [];

// Rota para exibir o carrinho de compras
app.get('/carrinho', (req, res) => {
  res.render('carrinho', { carrinho });
});

// Rota para adicionar um item ao carrinho
app.post('/adicionar', (req, res) => {
  //pegando os dados o produto
  var descricao = req.body.descricao;
  var preco = req.body.preco;
  var pedido = req.body.pedido;

  //enviando o objeto montado para o array 
  carrinho.push({preco:preco,descricao:descricao,pedido:pedido});

   //voltando para a interface
  res.redirect('/carrinho');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
