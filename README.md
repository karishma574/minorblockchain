# Health Recorder: Health Record Management System Using Blockchain Technology

## 🧾 Introduction

**Health Recorder** is a decentralized **Electronic Health Record (EHR)** management system using **Blockchain** technology. This system securely stores and manages health records by leveraging the benefits of **blockchain** for tamper-proof data verification and **IPFS** for decentralized storage. The system also provides granular access control to ensure secure sharing of records between patients, doctors, and other healthcare providers.

---

## ⚙️ Installation

### Prerequisites

- **Node.js** and **npm** (Package Manager)
- **Truffle** (for smart contract development)
- **Ganache** (Local blockchain for development)
- **IPFS Desktop** (for decentralized file storage)
- **Metamask** (Browser extension for Ethereum wallet)

### Steps to Install

1. **Clone the Repository**
   ```bash
   git clone https://github.com/karishma574/minorblockchain.git
   cd minorblockchain
````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Install Truffle globally**

   ```bash
   npm install -g truffle
   ```

4. **Download Ganache** from [Ganache Website](https://www.trufflesuite.com/ganache) and configure it.

5. **Install IPFS Desktop** from [IPFS Desktop](https://docs.ipfs.tech/install/ipfs-desktop/).

6. **Install Metamask Extension** from [Metamask.io](https://metamask.io/).

---

##  Running the Application

### 1. **Start Ganache**

* Open Ganache and configure the settings as required.
* Use the Ganache private key for adding to your MetaMask wallet.

### 2. **Start IPFS**

* Open IPFS Desktop and start the local node.

### 3. **Compile and Migrate Smart Contracts**

* Run the following commands to compile and migrate the contracts.

  ```bash
  truffle compile
  truffle migrate
  ```

### 4. **Start the Local Server**

```bash
npm start
```

Open your browser and navigate to **`http://localhost:3000`** to see the app in action.

---

##  Features

* **Doctor & Patient Registration**: Users can register as a doctor or patient.
* **Health Record Storage**: Health records are securely stored using IPFS and linked with blockchain for verification.
* **Access Control**: Granular permissions are set to control access to the health records.
* **Smart Contracts**: Data integrity is maintained using Ethereum-based smart contracts.

---

##  Technologies Used

* **Blockchain**: Ethereum
* **Smart Contracts**: Truffle, Solidity
* **Frontend**: HTML, CSS, JavaScript
* **Storage**: IPFS
* **Wallet**: MetaMask

---

## 👩‍💻 Developed By

**Karishma Dahale**
B.Tech – IoT, Cybersecurity & Blockchain
📍 Indore Institute of Science and Technology
📧 [karishmadahale574@gmail.com](mailto:karishmadahale574@gmail.com)

````
