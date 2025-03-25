// TODO implement determining if the work is done

async function checkWork() {
  const response = await fetch('/work')
  const data = await response.json()
  const status = data.status
  if (status === "done") {
    document.getElementById("work-result").innerText = "Work is done!";
    document.getElementById("work-result").style.color = "green";
    clearInterval(workInterval);
  } else {
    document.getElementById("work-result").innerText = "Work is in progress...";
    document.getElementById("work-result").style.color = "orange";
  }
}

let workInterval = setInterval(checkWork, 1000)
