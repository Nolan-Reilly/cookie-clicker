// Points & CPS
let points = 0;
let cps = 0;

// Buildings
let numCursors = 0;
let cursorCookieProduction = 0.1;
let cursorCost = 15;
let totalCursorCookieProduction = 0;
let numGrandmas = 0;
let grandmasCookieProduction = 1;
let grandmasCost = 100;
let totalGrandmasCookieProduction = 0;
let numFarms = 0;
let farmCookieProduction = 8;
let farmCost = 1100;
let totalFarmCookieProduction = 0;
let numMines = 0;
let mineCookieProduction = 47;
let mineCost = 12000;
let totalMineCookieProduction = 0;

// Upgrades
let clickMultiplier = 1;
let hasThousandFingersPerk = false;
let thousandFingersPerk = 0;
let reinforcedIndexFingerCost = 100;
let carpalTunnelCost = 500;
let amibdextrousCost = 10000;
let thousandFingersCost = 100000;
let forwardsFromGrandmaCost = 1000;
let steelPlatedRollingPinsCost = 5000;
let lubricatedDenturesCost = 50000;
let cheapHoesCost = 11000;
let fertilizerCost = 55000;
let sugarGasCost = 120000;
let megadrillCost = 600000;

// Grab the points and cps elements
let pointsEl = document.getElementById("points-el");
let cpsEl = document.getElementById("cps-el");

// Grab the cost elements
let cursorEl = document.getElementById("cursor-el");
let grandmasEl = document.getElementById("grandmas-el");
let farmEl = document.getElementById("farm-el");
let mineEl = document.getElementById("mine-el");

// Set the cost of buildings
cursorEl.textContent = cursorCost;
grandmasEl.textContent = grandmasCost;
farmEl.textContent = farmCost;
mineEl.textContent = mineCost;

// Grab the upgrade button elements
let reinforcedEl = document.getElementById("reinforced-el");
let carpalTunnelEl = document.getElementById("carpalTunnel-el");
let amibdextrousEl = document.getElementById("amibdextrous-el");
let thousandFingersEl = document.getElementById("thousandFingers-el");
let forwardsFromGrandmaEl = document.getElementById("forwardsFromGrandma-el");
let steelPlatedRollingPinsEl = document.getElementById("steelPlatedRollingPins-el");
let lubricatedDenturesEl = document.getElementById("lubricatedDentures-el");
let cheapHoesEl = document.getElementById("cheapHoes-el");
let fertilizerEl = document.getElementById("fertilizer-el");
let sugarGasEl = document.getElementById("sugarGas-el");
let megadrillEl = document.getElementById("megadrill-el");

// Grab the cost of upgrades and set their costs
document.getElementById("reinforcedCost-el").textContent = reinforcedIndexFingerCost;
document.getElementById("carpalTunnelCost-el").textContent = carpalTunnelCost;
document.getElementById("amibdextrousCost-el").textContent = amibdextrousCost;
document.getElementById("thousandFingersCost-el").textContent = thousandFingersCost;
document.getElementById("forwardsFromGrandmaCost-el").textContent = forwardsFromGrandmaCost;
document.getElementById("steelPlatedRollingPinsCost-el").textContent = steelPlatedRollingPinsCost;
document.getElementById("lubricatedDenturesCost-el").textContent = lubricatedDenturesCost;
document.getElementById("cheapHoesCost-el").textContent = cheapHoesCost;
document.getElementById("fertilizerCost-el").textContent = fertilizerCost;
document.getElementById("sugarGasCost-el").textContent = sugarGasCost;
document.getElementById("megadrillCost-el").textContent = megadrillCost;

// Grab building info
cursorEfficiencyEl = document.getElementById("cursorEfficiency-el");
cursorsOwnedEl = document.getElementById("cursorsOwned-el");
cursorsTotalProductionEl = document.getElementById("cursorsTotalProduction-el");
grandmaEfficiencyEl = document.getElementById("grandmaEfficiency-el");
grandmasOwnedEl = document.getElementById("grandmasOwned-el");
grandmasTotalProductionEl =document.getElementById("grandmasTotalProduction-el");
farmEfficiencyEl = document.getElementById("farmEfficiency-el");
farmsOwnedEl = document.getElementById("farmsOwned-el");
farmsTotalProductionEl = document.getElementById("farmsTotalProduction-el");
mineEfficiencyEl = document.getElementById("mineEfficiency-el");
minesOwnedEl = document.getElementById("minesOwned-el");
minesTotalProductionEl = document.getElementById("minesTotalProduction-el");

function changePoints() {
  pointsEl.textContent = points.toFixed(0) + " cookies";
}

function clickedCookie() {
  points += (1 * clickMultiplier) + thousandFingersPerk;
  changePoints();
}

function incrementCursor() {
  if (points >= cursorCost) {
    points -= cursorCost;
    changePoints();
    numCursors += 1;
    cursorCost = Math.floor(cursorCost * 1.2);
    cursorEl.textContent = cursorCost;
    if (numCursors === 1) {
      reinforcedEl.style.display = "block";
      carpalTunnelEl.style.display = "block";
    }
    if (numCursors === 10) {
      amibdextrousEl.style.display = "block";
    }
    if (numCursors === 25) {
      thousandFingersEl.style.display = "block";
    }
  }
}

function buyReinforcedIndexFinger() {
  if (points >= reinforcedIndexFingerCost) {
    points -= reinforcedIndexFingerCost;
    changePoints();
    clickMultiplier *= 2;
    cursorCookieProduction *= 2;
    reinforcedEl.style.display = "none";
  }
}

function buyCarpalTunnel() {
  if (points >= carpalTunnelCost) {
    points -= carpalTunnelCost;
    clickMultiplier *= 2;
    cursorCookieProduction *= 2;
    carpalTunnelEl.style.display = "none";
  }
}

function buyAmibdextrous() {
  if (points >= amibdextrousCost) {
    points -= amibdextrousCost;
    clickMultiplier *= 2;
    cursorCookieProduction *= 2;
    amibdextrousEl.style.display = "none";
  }
}

function buyThousandFingers() {
  if (points >= thousandFingersCost) {
    points -= thousandFingersCost;
    hasThousandFingersPerk = true;
    thousandFingersEl.style.display = "none";
  }
}

function incrementGrandmas() {
  if (points >= grandmasCost) {
    points -= grandmasCost;
    changePoints();
    numGrandmas += 1;
    grandmasCost = Math.floor(grandmasCost * 1.15);
    grandmasEl.textContent = grandmasCost;
  }
  if (numGrandmas === 1) {
    forwardsFromGrandmaEl.style.display = "block";
  }
  if (numGrandmas === 5) {
    steelPlatedRollingPinsEl.style.display = "block";
  }
  if (numGrandmas === 25) {
    lubricatedDenturesEl.style.display = "block";
  }
}

function buyForwardsFromGrandma() {
  if (points >= forwardsFromGrandmaCost) {
    grandmasCookieProduction *= 2;
    forwardsFromGrandmaEl.style.display = "none";
  }
}

function buySteelPlatedRollingPins() {
  if (points >= steelPlatedRollingPinsCost) {
    grandmasCookieProduction *= 2;
    steelPlatedRollingPinsEl.style.display = "none";
  }
}

function buyLubricatedDentures() {
  if (points >= lubricatedDenturesCost) {
    grandmasCookieProduction *= 2;
    lubricatedDenturesEl.style.display = "none";
  }
}

function incrementFarm() {
  if (points >= farmCost) {
    points -= farmCost;
    changePoints();
    numFarms += 1;
    farmCost = Math.floor(farmCost * 1.15);
    farmEl.textContent = farmCost;
  }
  if (numFarms === 1) {
    cheapHoesEl.style.display = "block";
  }
  if (numFarms === 5) {
    fertilizerEl.style.display = "block";
  }
}

function buyCheapHoes() {
  if (points >= cheapHoesCost) {
    farmCookieProduction *= 2;
    cheapHoesEl.style.display = "none";
  }
}

function buyFertilizer() {
  if (points >= fertilizerCost) {
    farmCookieProduction *= 2;
    fertilizerEl.style.display = "none";
  }
}

function incrementMine() {
  if (points >= mineCost) {
    points -= mineCost;
    changePoints();
    numMines += 1;
    mineCost = Math.floor(mineCost * 1.15);
    mineEl.textContent = mineCost;
  }
  if (numMines === 1) {
    sugarGasEl.style.display = "block";
  }
  if (numMines === 5) {
    megadrillEl.style.display = "block";
  }
}

function buySugarGas() {
  if (points >= sugarGasCost) {
    mineCookieProduction *= 2;
    sugarGasEl.style.display = "none";
  }
}

function buyMegadrill() {
  if (points >= megadrillCost) {
    mineCookieProduction *= 2;
    megadrillEl.style.display = "none";
  }
}

// Interval Timers

setInterval(generateCookies, 1000);

function generateCookies() {
  cookiesPerMinute();
  cursorCookieGeneration();
  grandmasCookieGeneration();
  farmCookieGeneration();
  mineCookieGeneration();
  thousandFingersMultiplier();
}

function cursorCookieGeneration() {
  points += (numCursors * cursorCookieProduction) + thousandFingersPerk;
  totalCursorCookieProduction += (numCursors * cursorCookieProduction) + thousandFingersPerk;
  changePoints();
}

function grandmasCookieGeneration() {
  points += numGrandmas * grandmasCookieProduction;
  totalGrandmasCookieProduction += numGrandmas * grandmasCookieProduction;
  changePoints();
}

function farmCookieGeneration() {
  points += numFarms * farmCookieProduction;
  totalFarmCookieProduction += numFarms * farmCookieProduction;
  changePoints();
}

function mineCookieGeneration() {
  points += numMines * mineCookieProduction;
  totalMineCookieProduction += numMines * mineCookieProduction;
  changePoints();
}

function thousandFingersMultiplier() {
  if (hasThousandFingersPerk) {
    thousandFingersPerk = (numGrandmas + numFarms + numMines) / 10;
  }
}

function cookiesPerMinute() {
  cpsEl.textContent = "Per Second: " + (
    (cursorCookieProduction * numCursors) + 
    (grandmasCookieProduction * numGrandmas) + 
    (farmCookieProduction * numFarms) +
    (mineCookieProduction * numMines) +
    thousandFingersPerk).toFixed(1);
}

setInterval(checkStoreCosts, 250);

function checkStoreCosts() {
  if (points >= cursorCost) {
    cursorEl.style.color = "green";
  } else {
    cursorEl.style.color = "red";
  }

  if (points >= grandmasCost) {
    grandmasEl.style.color = "green";
  } else {
    grandmasEl.style.color = "red";
  }

  if (points >= farmCost) {
    farmEl.style.color = "green";
  } else {
    farmEl.style.color = "red";
  }

  if (points >= mineCost) {
    mineEl.style.color = "green";
  } else {
    mineEl.style.color = "red";
  }

  if (points >= reinforcedIndexFingerCost) {
    document.getElementById("reinforcedCost-el").style.color = "green";
  } else {
    document.getElementById("reinforcedCost-el").style.color = "red";
  }

  if (points >= carpalTunnelCost) {
    document.getElementById("carpalTunnelCost-el").style.color = "green";
  } else {
    document.getElementById("carpalTunnelCost-el").style.color = "red";
  }

  if (points >= amibdextrousCost) {
    document.getElementById("amibdextrousCost-el").style.color = "green";
  } else {
    document.getElementById("amibdextrousCost-el").style.color = "red";
  }

  if (points >= thousandFingersCost) {
    document.getElementById("thousandFingersCost-el").style.color = "green";
  } else {
    document.getElementById("thousandFingersCost-el").style.color = "red";
  }

  if (points >= forwardsFromGrandmaCost) {
    document.getElementById("forwardsFromGrandmaCost-el").style.color = "green";
  } else {
    document.getElementById("forwardsFromGrandmaCost-el").style.color = "red";
  }

  if (points >= steelPlatedRollingPinsCost) {
    document.getElementById("steelPlatedRollingPinsCost-el").style.color = "green";
  } else {
    document.getElementById("steelPlatedRollingPinsCost-el").style.color = "red";
  }

  if (points >= lubricatedDenturesCost) {
    document.getElementById("lubricatedDenturesCost-el").style.cost = "green";
  } else {
    document.getElementById("lubricatedDenturesCost-el").style.cost = "red";
  }

  if (points >= cheapHoesCost) {
    document.getElementById("cheapHoesCost-el").style.color = "green";
  } else {
    document.getElementById("cheapHoesCost-el").style.color = "red";
  }

  if (points >= fertilizerCost) {
    document.getElementById("fertilizerCost-el").style.color = "green";
  } else {
    document.getElementById("fertilizerCost-el").style.color = "red";
  }

  if (points >= sugarGasCost) {
    document.getElementById("sugarGasCost-el").style.color = "green";
  } else {
    document.getElementById("sugarGasCost-el").style.color = "red";
  }

  if (points >= megadrillCost) {
    document.getElementById("megadrillCost-el").style.color = "green";
  } else {
    document.getElementById("megadrillCost-el").style.color = "red";
  }
}

setInterval(checkBuildingInfo, 1000);

function checkBuildingInfo() {
  // Cursor info
  cursorEfficiencyEl.textContent = "Each cursor produces " + cursorCookieProduction + " cookies per second";
  cursorsOwnedEl.textContent = "Cursors Owned: " + numCursors;
  cursorsTotalProductionEl.textContent = "Total Production: " + totalCursorCookieProduction.toFixed(0);

  // Grandma info
  grandmaEfficiencyEl.textContent = "Each grandma produces " + grandmasCookieProduction + " cookies per second";
  grandmasOwnedEl.textContent = "Grandmas Owned: " + numGrandmas;
  grandmasTotalProductionEl.textContent = "Total Production: " + totalGrandmasCookieProduction;

  // Farm info
  farmEfficiencyEl.textContent = "Each farm produces " + farmCookieProduction + " cookies per second";
  farmsOwnedEl.textContent = "Farms Owned: " + numFarms;
  farmsTotalProductionEl.textContent = "Total Production: " + totalFarmCookieProduction;

  // Mine info
  mineEfficiencyEl.textContent = "Each mine produces " + mineCookieProduction + " cookies per second";
  minesOwnedEl.textContent = "Mines Owned: " + numMines;
  minesTotalProductionEl.textContent = "Total Production: " + totalMineCookieProduction;
}