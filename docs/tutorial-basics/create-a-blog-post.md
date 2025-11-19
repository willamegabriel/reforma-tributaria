---
sidebar_position: 4
---

# Regras Fiscais

O fluxo de uso e criação das regras fiscais aplica a implementação de forma direta dentro dos produtos do sistema.

## Criação de Regra Fiscal

Todo o processo envolve a criação da regra e a vinculação dela diretamente aos produtos.

Caminho: **Cadastro > Fiscal > Regras > Regra_Fiscal**

Obs.: Veremos sobre a vinculação dos produtos no próximo tópico.

A regra fiscal e a vinculação se aplicam a produtos cujos NCMs ou outras particularidades necessitem de valores diferenciados de IBS UF, IBS Municipal, CBS ou CST. Dessa forma, todos os produtos, por padrão, utilizam as informações cadastradas nos tópicos anteriores (Tipo de Operação e Natureza de Operação). Quando vinculados a uma regra fiscal, esses produtos passam a obedecer aos parâmetros definidos nela.

<p align="center">
  <img src="/reforma-tributaria/img/documents/regra.jpg" width="550px" />
</p>

A tela inicial conta com as mesmas funções do Tipo de Operação, sendo elas:

- **Novo** (Cadastra uma nova Regra Fiscal)
- **Inativar** (Seleciona uma Regra Fiscal já criada e a mantém inativada)
- **Alterar** (Seleciona uma Regra Fiscal já criada e permite alterar seus dados)

> **Obs.:** As regras fiscais não podem ser excluídas — apenas inativadas!

## Tela de Criação

Dentro da tela de criação, o fluxo continua de forma simples. É necessário preencher:

- **Descrição** (Campo usado como referência visual para seleção)
- **CFOP** (Campo do tipo *combo*, permitindo selecionar os valores de CFOP **INTRA** e **INTER**)
- **CBS/IBS** (Grupo contendo campos para selecionar o **CST** e sua respectiva **Classificação Tributária**, quando necessário, além da possibilidade de definir manualmente as porcentagens de IBS e CBS aplicadas àquela regra)

<p align="center">
  <img src="/reforma-tributaria/img/documents/regra_create.jpg" width="550px" />
</p>
