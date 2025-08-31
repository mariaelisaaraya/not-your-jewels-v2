# Not Your Jewels 🎓💎  

**Gamified student microcredit platform built with Scaffold-ETH - Now Multichain**  

A decentralized solution to address university dropout rates in Latin America through blockchain-based microloans with academic performance incentives, expanded across multiple networks for better accessibility and lower costs.  

---

## 🚨 The Problem  
University dropout rates due to financial limitations are critically high in Latin America:  

- **57%** dropout rate in Guatemala  
- **53%** dropout rate in Honduras  
- **16%** dropout rate in Bolivia  

Many students resort to pawning personal belongings, including jewelry, to continue their education.  
This represents a systemic failure where education becomes a privilege instead of a right.  

---

## 💡 Our Solution  
**Not Your Jewels** is a gamified microcredit platform built on Scaffold-ETH that provides decentralized educational financing with performance-driven incentives across multiple blockchain networks.  

---

## 🔗 Multichain Architecture  

### Ethereum Mainnet (Core Infrastructure)  
- Scaffold-ETH 2 framework for rapid dApp development  
- ENS integration for human-readable identities  
- Primary smart contracts and governance  

### Lisk L2 (Fast & Cheap Transactions)  
- Microloan processing with reduced transaction costs  
- Instant transactions for better student UX  
- Scalability for mass adoption  

### ENS (Web3 Identity)  
- Human-readable identities (e.g., `emmi.eth`) instead of complex addresses  
- Significant improvement in UX and trust  
- Cross-chain identity integration  

### Symbiotic SDK (Cross-Chain Bridge)  
- Multichain bridges between different networks  
- Shared liquidity across chains  
- Future expansion without complete restructuring  

---

## 🛠️ Tech Stack  

### Frontend (Scaffold-ETH 2)  
- **Scaffold-ETH 2** → Complete framework for dApp development  
- **Next.js** → React framework for web applications  
- **TypeScript** → Static typing for robustness  
- **Tailwind CSS** → Utility-first CSS framework  
- **RainbowKit** → Multichain wallet connections  
- **Wagmi/Viem** → Smart contract interactions  
- **React Query** → Asynchronous state management  

### Smart Contracts (Ethereum/Lisk - Solidity)  
- **Hardhat** → Development framework integrated with Scaffold-ETH  
- **Solidity** → Smart contract language  
- **OpenZeppelin** → Security standards and libraries  

### Backend & Services  
- **Firebase** → Database and authentication  
- **University APIs** → Real-time academic validation  
- **The Graph** → Blockchain data indexing
---
## 📝 Smart Contracts Architecture  

### Core Contracts (Ethereum)  
- **StudentRegistry** → Student profile registration and management  
- **NYJToken** → Platform token with integrated academic history  
- **AcademicOracle** → Real-time academic validation  
- **GovernanceContract** → Decentralized platform governance  

### Loan Contracts (Lisk L2)  
- **LoanPoolFactory** → Creation of loan pools  
- **LoanPool** → Custom fund distribution logic  
- **InterestManager** → Rate and incentive management  
- **PaymentTracker** → Payment tracking and credit scoring  

### Cross-Chain Infrastructure  
- **CrossChainLender** → Loans across different networks  
- **TokenBridge** → Cross-chain asset transfers  
- **IdentityResolver** → ENS resolution across chains

---

🔧 How It Works
For Students

Multichain registration → Connect wallet and create ENS identity
Academic verification → Validation through university APIs
Credit evaluation → System calculates scoring based on performance
Access to loans → Microloans on Lisk L2 with minimal costs
Gamification → Academic challenges to improve loan conditions
Flexible repayment → Options adapted to student financial cycles

For Administrators/Investors

Institutional authentication → Verification as institution or investor
Multichain pool setup → Creation and funding across networks
Challenge design → Implementation of gamified academic challenges
Cross-chain monitoring → Unified dashboard for metrics

```mermaid
graph TB
    %% Student Registration
    A["👤 Student registers"] --> B["🔒 StudentRegistry.sol"]
    B --> C["🏫 University APIs"]
    C --> D{"✅ Validation successful?"}
    D -->|No| E["❌ Registration rejected"]
    D -->|Yes| F["📝 MicroLoanPool.sol: Register Student"]
    F --> G["💾 Store data and calculate creditScore"]
    G --> H["IdentityResolver.sol: resolve ENS/cross-chain ID"]
    
    %% Loan Request on Ethereum
    H --> I["💰 MicroLoanPool: requestLoan(amount)"]
    I --> J{"📋 Sufficient credit score?"}
    J -->|No| K["❌ Loan rejected"]
    J -->|Yes| L["✅ Emit LoanIssued event"]
    
    %% Cross-Chain Lending
    L --> M["🔗 CrossChainLender.sol: requestLoan(amount, targetChain)"]
    M --> N["💡 Symbiotic SDK listens to LoanIssued"]
    N --> O["📤 Request sent to Lisk L2"]
    O --> P["💵 Funds delivered on Lisk to student"]
    P --> Q["MicroLoanPool/StudentRegistry updated with loan"]
    
    %% Token Bridge
    I --> R["🔒 TokenBridge.sol: lockTokens(amount, targetChain)"]
    R --> S["🔁 Symbiotic SDK listens to TokensLocked"]
    S --> T["💳 releaseTokens on target chain (Lisk)"]
    
    %% Loan Repayment
    P --> U["📅 MicroLoanPool: repayLoan(index, amount)"]
    U --> V["💵 Funds returned to pool"]
    V --> W["📊 Update creditScore"]
    
    %% Dashboard and Gamification
    W --> X["📊 React/Next.js Frontend with wagmi"]
    X --> Y["Display loans, payments and credit score"]
    X --> Z["🎮 Gamification: academic achievements and rewards"]
    
    %% Styling for different blockchain layers
    %% Ethereum Core (blue)
    style B fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    style F fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    style G fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    style H fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    style I fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    style L fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    
    %% Cross-Chain Bridge (orange)
    style M fill:#fff3e0,stroke:#f57f17,stroke-width:2px
    style N fill:#fff3e0,stroke:#f57f17,stroke-width:2px
    style O fill:#fff3e0,stroke:#f57f17,stroke-width:2px
    style P fill:#fff3e0,stroke:#f57f17,stroke-width:2px
    
    %% Lisk L2 (amber)
    style R fill:#ffe0b2,stroke:#ef6c00,stroke-width:2px
    style S fill:#ffe0b2,stroke:#ef6c00,stroke-width:2px
    style T fill:#ffe0b2,stroke:#ef6c00,stroke-width:2px
    
    %% Frontend (pink)
    style X fill:#fce4ec,stroke:#c2185b,stroke-width:2px
    style Y fill:#fce4ec,stroke:#c2185b,stroke-width:2px
    style Z fill:#fce4ec,stroke:#c2185b,stroke-width:2px
```

---



## 🎯 Accelerated Development with v0  
Integration with [v0.dev](https://v0.dev) for rapid component development:  
- Automatic generation of loan application forms  
- Custom dashboards for students and institutions  
- Native Tailwind UI components  
- Rapid prototyping for feature validation  
- Seamless integration with Scaffold-ETH architecture  

---

## 🌟 Multichain Development Roadmap  

### Phase 1: ENS Integration ✅  
- Student identity registration (.eth)  
- Public profiles with academic history  
- Cross-chain reputation system  

### Phase 2: Lisk L2 Deployment 🔄  
- Microloan migration to Lisk  
- Transaction cost reduction  
- Processing speed improvement  

### Phase 3: Symbiotic Bridges 📋  
- Cross-chain liquidity pools  
- Multi-network loan distribution  
- Unified user experience  

---

## 🎮 Gamification System  
- 🏆 **Academic achievements**: NYJ rewards for outstanding grades  
- 📚 **Learning challenges**: Financial education trivia and quizzes  
- ⭐ **Level system**: Progression based on academic performance  
- 💎 **Reward tokens**: Tangible benefits across networks  
- 🏅 **Performance scholarships**: Interest reduction for academic excellence  
- 🌐 **ENS identity**: Public profiles with academic reputation  

---

## 🔗 Aleph Hackathon Participation  
**Not Your Jewels** is participating in **Aleph Hackathon**, an intensive competition driving innovative tech project development.  
This event, open to developers, designers, cryptographers, project managers, students, and blockchain enthusiasts, represents a unique opportunity for:  
- Networking  
- Learning from experts  
- Contributing to startup ecosystem growth  

---

## 🏗️ Roadmap  

- **Q1 2025**: Multichain MVP on Testnet + ENS integration  
- **Q2 2025**: Argentina launch + university partnerships  
- **Q3 2025**: Brazil, Chile, Bolivia expansion + Lisk mainnet  
- **Q4 2025**: Institutional investor program + Symbiotic bridges  

---

## 📞 Contact  

- **Website**: [not-your-jewels.vercel.app](https://not-your-jewels.vercel.app/)  
- **Email**: notyourjewelsdapp@gmail.com  
- **Dorahacks**: [Project Page](https://dorahacks.io/buidl/30925/)  
- **Twitter**: [@notyourjewelslatam](https://twitter.com/notyourjewelslatam)  
- **Instagram**: [@notyourjewelslatam](https://instagram.com/notyourjewelslatam)  

---

## 🤝 Team  

- **Emmi Aguilar Rivero** –
- **Maria Elisa Araya** – 
- **Tatiana Borda** – 

---

💎 **Not Your Jewels — No student should lose their jewelry to keep their future** 💎  
_Built with ❤️ using Scaffold-ETH, modern Web3 infrastructure, and multichain technology_  
