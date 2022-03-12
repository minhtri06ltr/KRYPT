require("@nomiclabs/hardhat-waffle"); //testing package

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/fRgYaIu9G_M_Uk1aH8Bveybfk3nPg1y-",
      accounts: [
        "cfe4ad49b32f1a3cc83be67f14c2200eac2b378057dcda68f63096df0157e1c4",
      ],
    },
  },
};
