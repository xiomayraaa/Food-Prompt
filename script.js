var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendSomeoneAwesome); //event listener

function appendSomeoneAwesome() {
  event.preventDefault(); // Prevents default action
  var name = $('.name').val();
  var name2 = $('.name2').val();// Stores user input value
  var name3 = $('.name3').val();
  cardContainer.append(`
    <p class="name-card">${name}, ${name2}, and ${name3} taste delicious!</p>
  `);
}