module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // Ensure this matches Ganache port
      network_id: "*"
    },
  },
  compilers: {
    solc: {
      version: "0.8.19", // Make sure this matches your contract
    }
  }


  
  };
//ogggg