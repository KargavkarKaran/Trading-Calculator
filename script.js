function showTab(tabName) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach(tab => tab.style.display = "none");
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabName).style.display = "block";
  document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`).classList.add("active");

  // Clear previous results
  document.querySelectorAll(".result").forEach(r => r.innerHTML = "");
}

// Profit/Loss Calculator
function calculateProfitLoss() {
  const buy = parseFloat(document.getElementById("buyPrice").value);
  const sell = parseFloat(document.getElementById("sellPrice").value);
  const qty = parseInt(document.getElementById("quantity").value);

  if (!buy || !sell || !qty) { alert("Enter all fields"); return; }

  const profitLoss = (sell - buy) * qty;
  const percent = (profitLoss / (buy * qty)) * 100;

  document.getElementById("plResult").innerHTML = `
    Profit / Loss: ${profitLoss.toFixed(2)}<br>
    Profit / Loss %: ${percent.toFixed(2)}%
  `;
}

// Risk-Reward Calculator
function calculateRiskReward() {
  const entry = parseFloat(document.getElementById("entryPrice").value);
  const stop = parseFloat(document.getElementById("stopLoss").value);
  const target = parseFloat(document.getElementById("targetPrice").value);

  if (!entry || !stop || !target) { alert("Enter all fields"); return; }

  const risk = entry - stop;
  const reward = target - entry;

  if (risk === 0) { alert("Risk cannot be zero"); return; }

  const rr = reward / risk;
  document.getElementById("rrResult").innerHTML = `Risk-Reward Ratio: ${rr.toFixed(2)}`;
}

// Brokerage Calculator
function calculateBrokerage() {
  const buy = parseFloat(document.getElementById("bBuyPrice").value);
  const sell = parseFloat(document.getElementById("bSellPrice").value);
  const qty = parseInt(document.getElementById("bQuantity").value);
  const broker = parseFloat(document.getElementById("brokeragePercent").value);

  if (!buy || !sell || !qty || !broker) { alert("Enter all fields"); return; }

  const totalBrokerage = ((buy + sell) * qty) * (broker / 100);
  const netProfit = (sell - buy) * qty - totalBrokerage;

  document.getElementById("brResult").innerHTML = `
    Total Brokerage: ${totalBrokerage.toFixed(2)}<br>
    Net Profit / Loss: ${netProfit.toFixed(2)}
  `;
}
