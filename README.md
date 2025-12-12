# Desafio Cypress QA 🚀

Este projeto foi desenvolvido por **Anderson Lima** como parte de um desafio de QA utilizando **Cypress** para automação de testes end-to-end.

## 📌 Sobre o projeto
O objetivo é validar funcionalidades críticas da aplicação **[lojaebac.ebaconline.art.br](http://lojaebac.ebaconline.art.br/)** através de testes automatizados, garantindo qualidade e confiabilidade.

## 🛠️ Tecnologias utilizadas
- [Cypress](https://www.cypress.io/) — Framework de testes end-to-end
- [Node.js](https://nodejs.org/) — Ambiente de execução
- [GitHub Actions](https://docs.github.com/actions) — Integração contínua (CI/CD)

## ⚙️ Pipeline integrado
O projeto conta com um **workflow automatizado** configurado no GitHub Actions:

- Instala dependências (`npm install`)
- Executa os testes Cypress (`npx cypress run`)
- Gera relatórios e screenshots em caso de falha
- É disparado automaticamente em **push** e **pull request** para o branch `main`

Arquivo de configuração: `.github/workflows/pipeline.yml`

## ▶️ Como executar localmente
1. Clone este repositório:
   ```bash
   git clone https://github.com/Andersonlima19/desafio-cypress-QA.git
