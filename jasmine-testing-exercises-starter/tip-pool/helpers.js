
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr, type) {
  // CREATE a Table Data cell with an alias of newTD
  // set newTd's className to "deleteBtn"
  // set newTd's innerText to "X"
  // add an Event Listener and listen to "click", removeEle to newTd
  // append newTd to tr

  let newTD = document.createElement("td")
  newTd.className = deleteBtn
  newTD.innerText = "X"
  newTD.addEventListener("click", removeEle)
  tr.append(newTD)
}

function removeEle(evt) {
  // create an ele alias equal to evt.target.closest("tr")

  // delete allServers[ele.id]

  // ele.parentNode.removeChild(ele)
  // updateDerverTable

  let ele = evt.target.closest("tr")
  delete allServers[ele.id]
  ele.parentNode.removeChild(ele)
  updateServerTable()
}