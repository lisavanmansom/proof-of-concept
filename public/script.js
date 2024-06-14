
const productivity = document.getElementById('ProductivityChart');
if (productivity) {
    const labels = productivity.dataset.labels.split(',') // met split is het mogelijk om een nieuwe array aan te maken als een bepaald character
    const datasets = productivity.dataset.datasets.split(',')
    
    new Chart(productivity, {
      type: 'bar',
      data: { 
        labels: labels,
        datasets: [{
          label: 'Productiviteit (per uur)',
          data: datasets,
          borderWidth: 1,
          padding: 20,
          backgroundColor: [
            'rgb(159, 199, 152)',
            'rgb(243, 234, 156)',
            'rgb(164, 200, 233)',
          ]
        }]
      },
      options: {
        responsive: true
      }
    });
}



const sickdays = document.getElementById('SickdaysChart');
if (sickdays) {
    const labels = sickdays.dataset.labels.split(',') // met split is het mogelijk om een nieuwe array aan te maken als een bepaald character
    const sickdaysdata = sickdays.dataset.sickdaysdata.split(',')
    
    new Chart(sickdays, {
      type: 'bar',
      data: { 
        labels: labels,
        datasets: [{
          label: 'Ziektedagen',
          data: sickdaysdata,
          borderWidth: 1,
          backgroundColor: [
            'rgb(159, 199, 152)',
            'rgb(243, 234, 156)',
            'rgb(164, 200, 233)',
            
          ]
      }]
      },
      options: {
        responsive: true
        }
      
    });
}

const cupsOfCoffee = document.getElementById('CupsOfCoffeeChart');
if (sickdays) {
    const labels = cupsOfCoffee.dataset.labels.split(',') // met split is het mogelijk om een nieuwe array aan te maken als een bepaald character
    const coffeedata = cupsOfCoffee.dataset.coffeedata.split(',')
    
    new Chart(cupsOfCoffee, {
      type: 'doughnut',
      data: { 
        labels: labels,
        datasets: [{
          label: 'Kopjes ☕️',
          data: coffeedata,
          borderWidth: 1,
          backgroundColor: [
            'rgb(159, 199, 152)',
            'rgb(243, 234, 156)',
            'rgb(164, 200, 233)',
            
          ]


        }]
    },
    options: {
      responsive: true
      }
    });
}


const menuButton = document.querySelector(".hamburger-button");
const hetMenu = document.querySelector(".menu-open");
const menuItems = document.querySelector(".header-list-left");


function openMenu() {
    hetMenu.classList.toggle("open");
}

menuButton.addEventListener("click", openMenu);
