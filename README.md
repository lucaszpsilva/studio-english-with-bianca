## English with Bianca - Admin Studio

Este repositório contém o **Painel de Administração (Sanity Studio)** do projeto English with Bianca.

Enquanto o front-end (site do aluno) está em outro repositório, este projeto é o "cérebro" da operação, permitindo que a professora (cliente) gerencie todo o conteúdo do site de forma 100% autônoma, sem precisar de intervenção de um desenvolvedor.

## O Desafio

O principal objetivo deste painel foi criar uma interface simples e à prova de erros para uma usuária não-técnica. A professora precisava cadastrar aulas, subir PDFs, adicionar links do YouTube e criar desafios interativos (quizzes) de forma intuitiva.

## 🛠️ Funcionalidades e Modelagem de Dados (Schema)

O banco de dados foi modelado para atender duas frentes do site: **English Club** (Materiais) e **Challenges** (Desafios).

- **Aulas e Materiais:** Cadastro de conteúdos com título, descrição curta, imagem de capa e links dinâmicos (suporte para links externos ou upload direto de arquivos).
- **Categorização Inteligente:** Sistema de rádio (Radio buttons) para definir se o conteúdo é do "English Club" ou "Challenges", facilitando a filtragem no front-end.
- **Challenges (Quizzes):** Estrutura de array que permite adicionar quantas opções de resposta a professora desejar, marcando qual é a correta. O front-end consome esses dados para randomizar as opções para os alunos.
- **Validações Customizadas:** Implementação de regras de negócio no próprio CMS (ex: obrigatoriedade de imagem de capa e link, dependendo do tipo de material) para evitar que dados corrompidos cheguem ao site.

## Tecnologias Utilizadas

- **Sanity Studio:** Headless CMS (Backend as a Service)
- **React:** Construção da interface do painel
- **TypeScript:** Tipagem estática para garantir a integridade dos Schemas.

## Segurança

O acesso ao painel é restrito à administradora do projeto via autenticação (Google/GitHub). O front-end do site consome os dados via API com permissões restritas apenas de leitura (`Viewer`), garantindo que nenhum dado possa ser alterado por terceiros.

## 🔗 Links

- <a href="https://www.english-with-bianca.com.br" target="_blank" rel="noopener noreferrer">[Acesse o site em produção (Front-end)]</a>
