# Desafio QA - Testes Automatizados

Este projeto é um **desafio de QA** que visa a criação de testes automatizados utilizando **Cypress**. O objetivo principal do projeto é testar um sistema de banco fictício que envolve funcionalidades como depósitos, transferências e saques.

## Funcionalidades Testadas

- **Depósito**: Verificar se o depósito é feito corretamente e se o saldo é atualizado.
- **Transferência**: Validar a transferência de valores não superiores ao saldo disponível.
- **Saque**: Garantir que não sejam feitos saques com valores negativos.
- **Mensagens de Erro**: Verificar se mensagens de erro são exibidas quando necessário, como saldo insuficiente ou valores inválidos.

## Requisitos

Antes de rodar os testes, é necessário ter as seguintes ferramentas instaladas:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## Instruções de Instalação

1. **Clone este repositório** para a sua máquina local:

```bash
git clone https://github.com/Regiane-Martins/desafio-qa-voll.git
```

2. Instale as dependências do projeto: **npm install**

## Executando os Testes

Rodar os testes no modo interativo

**npx cypress open**

Isso abrirá a interface gráfica do Cypress, onde você poderá rodar os testes de forma interativa.

Rodar os testes no modo headless (sem interface gráfica):

**npx cypress run**

Isso executa todos os testes diretamente no terminal.

## Testes Implementados

Teste passou:

. Deve permitir realizar um depósito válido e atualizar o saldo: Verifica se o valor depositado é somado corretamente ao saldo existente.

Testes que falharam:

. Não deve permitir transferências com valores superiores ao saldo disponível.

**Motivo da Falha:** O sistema não está bloqueando transferências com valores superiores ao saldo. Ou seja, ao tentar realizar uma transferência de um valor maior que o saldo disponível, a transação é permitida.

. Não deve permitir saque com valores negativos: Confirma que o sistema não permite saques com valores negativos e exibe uma mensagem de erro.

**Motivo da Falha:** O sistema não está validando o valor do saque corretamente. Ao tentar realizar um saque com um valor negativo, o sistema não exibe a mensagem de erro esperada. Permitindo saques com valores negativos sem exibir um erro.

![Imagem dos Testes](assets/Captura_de_tela_2025_02_17_204315.png)
