# Electon Frontend

## Rodando o projeto

Após a clonagem do projeto, é necessário instalar as dependências com o `npm install` e é possível iniciar o projeto com `npm run dev`.

Obs¹: O Projeto depende de um servidor na url http://localhost:8080, definida no @/utils/fetchData como SERVER_URL, no qual a página solicita dados. A falta dele pode gerar instabilidades na apresentação da página.

Obs²: Quase todas as requisições são armazenadas no cache.

## Ferramentas Usadas

- HTML, CSS e JS
- React
- Next.js
- TypeScript
- Tailwind CSS
- Headlessui (Dropdown)
- Swiper
- JSON Server

## Rotas

- **/** -> Rota da Página Inicial
- **/catalog** -> Rota da Página de Catalogo
- **/product/[slug]** -> Rota de um produto buscado por slug
- **/cart** -> Rota do carrinho
- **/signup** -> Rota de cadastro
- **/signin** -> Rota de login

## Objetivos

- [x] Página Inicial
- [x] Página de Catálogo
- [x] Página do Carrinho
- [x] Criar Sistema de Carrinho LocalStorage e deslogado
- [x] Criar base do Registro e Autenticação
- [x] Aprimorar Sistema de Carrinho para estado de logado
- [x] Página de Produto
- [x] Responsividade
- [x] Fazer a pesquisa de produtos
- [ ] Criar Variações de Produtos para cores, preços e marcas
- [ ] Terminar Página de Produto
- [ ] Ajustar Parâmetros de Busca no Catálogo
- [ ] Fazer Favoritos com lógica similar ao Carrinho
- [ ] Ajustar Dropdowns no Header
- [ ] Correções de Designs fora dos padrões, como os carrosséis
- [ ] Aprimorar Lógica de Registro e Autenticação (Refresh Token)
- [ ] Fazer verificações de formulário nas páginas de Cadastro e Login (Zod?)
- [ ] Desenvolver a Parte de Reviews
- [ ] Página de Checkout
- [ ] Ser capaz de realizar pedidos
- [ ] Melhorar Página de Not Found
- [ ] Corrigir Bugs, Partes Faltantes e pequenos Erros
- [ ] Melhorar o Tratamento de Erros
- [ ] Lidar com os Loadings e partes Assíncronas
- [ ] Lidar melhor com o gerenciamento de cache
- [ ] Fazer melhor tratamento das imagens
- [ ] Melhorar performance
- [ ] Aprimorar a Acessibilidade
- [ ] Adicionar Testes Automatizados
- [ ] Refatoração
- [ ] Coisas extras? (Admin Page, Blog, About us, Subscribe newsletter)
