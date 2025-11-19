---
sidebar_position: 5
---

# Emissão de NFe, NFCe e Entrada

## NFCe e NFe

O fluxo atual de emissão de NFC-e e NF-e permanece inalterado visualmente. Todas as modificações realizadas ocorreram apenas na estrutura interna do sistema, por meio da criação de novas tabelas destinadas à análise e persistência das informações. Ou seja, para o usuário final, nada mudou na experiência de uso, e mesmo após as configurações serem aplicadas, nenhum novo processo operacional será alterado.

As alterações podem ser observadas nas emissões das notas fiscais através das seguintes tabelas:

**NFC-e: nfce_item_ibscs e nfce_totalizador**

**NF-e: nota_fiscal_item_ibscbs e nota_fiscal_totalizador**

No futuro, caso novas funcionalidades visuais sejam incorporadas aos fluxos já existentes, o material de documentação será atualizado para refletir todas as mudanças.

## Entrada de Mercadorias

O processo de Entrada de Mercadorias já está preparado para receber XMLs que contenham informações de IBS e CBS em sua estrutura. Foram realizados testes utilizando notas fiscais HR para HR, emitidas pelo próprio sistema e contendo todos os novos campos previstos na reforma tributária.
Todas as notas foram processadas corretamente e os produtos foram registrados sem qualquer inconsistência.

A tabela vinculada a esse fluxo é: **entrada_produto_item_ibscbs**
