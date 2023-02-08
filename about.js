const description = "Yo, This is Silvio Maria Marcelo. I'm an accountant at the Dunder Mufflin Paper Company in Scranton, PA, 18506, United States.    False.  Facts:    I'm a Junior Web Developer looking for new frontend and backend web solutions. For more informations, leave your email in contacts or write to me.  God bless you";
const descriptionArray = description.split("");
let i = 0;
const descriptionContainer = document.getElementById("descriptionContainer");
const intervalId = setInterval(() => {
  descriptionContainer.innerHTML += descriptionArray[i];
  i++;
  if (i === descriptionArray.length) {
    clearInterval(intervalId);
  }
}, 100);


//grafico a torta

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Html-Css", "Javascript", "Java"],
        datasets: [{
            label: '# of Votes',
            data: [50, 30, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

