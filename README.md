# Projeto Frontend React + TypeScript + Vite

Um projeto frontend moderno, construído com **React**, **TypeScript** e **Vite**, projetado para oferecer uma experiência de desenvolvimento ágil e builds otimizadas para produção. O código adota a arquitetura **MVVM (Model-View-ViewModel)**, promovendo uma clara separação de responsabilidades, alinhado aos princípios de **inversão de dependências** e **desacoplamento** do SOLID.  

## 📚 Principais Tecnologias

- **React**: Biblioteca para construção de interfaces reativas e componentizadas.  
- **TypeScript**: Tipagem estática para maior segurança e produtividade no desenvolvimento.  
- **Vite**: Ferramenta moderna para desenvolvimento rápido e builds eficientes.  
- **TailwindCSS**: Framework utilitário para estilização rápida e consistente.  
- **shadcn/ui**: Conjunto de componentes acessíveis e customizáveis.  
- **Zod**: Validação de esquemas para segurança em tempo de execução.  
- **ContextAPI**: Gerenciamento de estado compartilhado de forma simples e eficiente.

## 🚀 Arquitetura e Princípios

O projeto segue a arquitetura **MVVM**, permitindo uma organização modular e escalável:  
- **Model**: Gerencia os dados e a lógica de negócios.  
- **ViewModel**: Atua como um intermediário entre o Model e a View, fornecendo os dados processados e ações necessários para a interface.  
- **View**: Responsável pela renderização e interação com o usuário.  

Além disso, foram aplicados princípios do SOLID, como:  
- **Inversão de Dependências**: Interfaces são usadas para desacoplar dependências, tornando o código mais testável e flexível.  
- **Desacoplamento**: Separação clara de responsabilidades para facilitar manutenção e extensão.

## 🛠️ Como Começar  

1. **Instale as dependências**:
   ```bash
   npm install 
   ```
   
2. **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
   ```

3. **Gere o build de produção:**
    ```bash
    npm run build
    ```
📜 Scripts Disponíveis
```bash
    npm run dev # - Inicia o servidor de desenvolvimento.
    npm run build # - Gera o build otimizado para produção.
    npm run lint # - Executa o ESLint para análise estática do código.
    npm run preview # - Visualiza o build de produção localmente.
```