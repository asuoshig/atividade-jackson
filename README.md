# Gerenciamento e Controle de Versões de um Conjunto de Arquivos Configuráveis

## Descrição do Projeto

O projeto "Gerenciamento e Controle de Versões de um Conjunto de Arquivos Configuráveis" visa proporcionar uma experiência prática no gerenciamento de configurações e controle de versões utilizando Git, além da automação de testes de mudanças nos arquivos configurados com Jenkins.

O objetivo é que os alunos criem um pequeno repositório de arquivos configuráveis e utilizem práticas de Gerência de Configuração (GC) para:
1. Controlar versões dos arquivos usando Git.
2. Automatizar o monitoramento e teste de mudanças nos arquivos configurados via Jenkins.
3. Simular um ambiente colaborativo, onde cada membro da equipe trabalha em diferentes "funcionalidades" ou "configurações".

## Objetivos

- **Aplicar conceitos básicos de GC e versionamento**: Compreender e utilizar Git para o gerenciamento de versões e práticas de controle de configuração.
- **Usar Git para gerenciar mudanças e resolver conflitos**: Realizar o versionamento de arquivos e solucionar conflitos de forma colaborativa.
- **Configurar pipelines simples no Jenkins para monitorar e validar mudanças**: Implementar a automação dos testes das configurações alteradas.

## Escopo Simples do Projeto

Os alunos trabalharão com três tipos de arquivos configuráveis:
1. **Arquivo de Configuração Geral (config.json ou .env)**:
   - Contém parâmetros fictícios, como URLs de API, variáveis de ambiente, etc.
   - Exemplo de conteúdo:
     ```json
     {
       "api_url": "https://api.exemplo.com",
       "timeout": 5000,
       "retries": 3
     }
     ```

2. **Documento de Requisitos (requisitos.md)**:
   - Documento fictício descrevendo as especificações do projeto.
   - Exemplo de conteúdo:
     ```markdown
     # Requisitos do Sistema
     1. Deve suportar múltiplas APIs.
     2. Configurações devem ser centralizadas em `config.json`.
     ```

3. **Script de Teste Básico (test_script.sh ou .bat)**:
   - Um script simples que simula a validação de configurações.
   - Exemplo de conteúdo:
     ```bash
     echo "Testando conexão com a API..."
     curl https://api.exemplo.com
     echo "Teste concluído."
     ```

## Etapas do Projeto

### 1. Organização do Repositório Git

- **Criar Repositório**: Configure um repositório com os três arquivos acima.
- **Divisão de Trabalho**:
  - Um aluno edita o `config.json` para ajustar as configurações da API.
  - Outro aluno edita o `requisitos.md` para documentar mudanças.
  - Um terceiro aluno ajusta o `test_script.sh` para incluir validações adicionais.

#### Uso de Branches
- Cada mudança deve ser feita em uma branch separada e, depois, mesclada à branch principal.
- Exemplos de branches:
  - `feature/atualiza-config`
  - `feature/documentacao-requisitos`
  - `feature/valida-teste`

### 2. Controle de Versionamento com Git

#### Comandos Básicos
- Criação e uso de branches.
- Commit e merge.
- Resolução de conflitos simulados durante merges.

#### Atividade
- Os alunos criam conflitos intencionalmente editando o mesmo parâmetro no `config.json` em branches diferentes e resolvem usando Git.

### 3. Automação com Jenkins

#### Pipeline Simples no Jenkins
Configure um pipeline que:
1. Clone o repositório automaticamente.
2. Execute o `test_script.sh` para validar as configurações.
3. Notifique o resultado do teste (sucesso ou falha).

#### Jenkinsfile Básico
```groovy
pipeline {
    agent any
    stages {
        stage('Clonar Repositório') {
            steps {
                git 'https://github.com/exemplo/repo.git'
            }
        }
        stage('Executar Teste') {
            steps {
                sh './test_script.sh'
            }
        }
    }
}

Conclusão


Esse projeto proporcionará uma prática significativa no uso de Git para controle de versão e Jenkins para automação de testes. Além disso, os alunos terão uma experiência real em um ambiente colaborativo de desenvolvimento, onde a integração de mudanças e a comunicação entre membros da equipe são fundamentais.