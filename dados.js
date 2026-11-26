new Chart(document.getElementById("graficoKm"), {
    type: "bar",
  
    data: {
        labels: meses,
  
        datasets: [{
            label: "KM percorridos",
            data: km,
            backgroundColor: "green"
        }]
    }
  });
  
  new Chart(document.getElementById("graficoEntregas"), {
    type: "line",
  
    data: {
        labels: meses,
  
        datasets: [{
            label: "Entregas realizadas",
            data: entregas,
            borderColor: "blue",
            backgroundColor: "blue",
            tension: 0.3
        }]
    }
  });
  
  new Chart(document.getElementById("graficoCo2"), {
    type: "bar",
  
    data: {
        labels: meses,
  
        datasets: [{
            label: "CO₂ economizado (kg)",
            data: co2,
            backgroundColor: "#75b947"
        }]
    }
  });
  
  options: {
    responsive: true,
    maintainAspectRatio: true
  }