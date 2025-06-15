console.log("Hello world!");

const: stats = {
    gardenTotal: 0,
    sps: 0,
};

async function getMarketElements() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const data = await response.json();
    return data;
}

const marketContainer = document.getElementById("market-container");