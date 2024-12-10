# Branch: `feature/validar-teste`

## Descrição

A branch `feature/validar-teste` tem como objetivo implementar e validar a automação dos testes de configuração, especificamente no arquivo `test_script.sh`. Esta feature visa garantir que as mudanças feitas no arquivo `config.json` e outros arquivos de configuração sejam corretamente validadas antes de serem integradas à branch principal.

## Tarefas da Branch

As principais tarefas desta branch incluem:
1. **Alteração e Atualização do Script de Teste**:
   - Modificar o `test_script.sh` para incluir testes adicionais e validar as configurações do arquivo `config.json`.
   - Garantir que o script execute corretamente os testes de conexão e outros parâmetros de configuração.

2. **Validação de Configurações**:
   - Validar se o arquivo de configuração (`config.json`) contém os parâmetros corretos, como a URL da API, timeout e número de tentativas.
   - Incluir verificações adicionais para garantir que os valores de configuração atendam às especificações.

3. **Execução de Testes**:
   - Utilizar o Jenkins para automatizar a execução do script de teste sempre que alterações forem feitas no repositório.
   - Configurar um pipeline no Jenkins para rodar os testes de forma contínua.

4. **Correção de Possíveis Erros**:
   - Corrigir quaisquer falhas no processo de validação que forem encontradas durante a execução dos testes.

## Comandos Utilizados

Durante o desenvolvimento desta feature, alguns comandos Git podem ser úteis para colaborar e manter o versionamento:

1. **Criar e mover para a branch**:
   ```bash
   git checkout -b feature/validar-teste
