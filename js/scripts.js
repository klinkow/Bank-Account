// Business (or back-end) logic:
var inputtedAccount= [name, balance];
var name;
var balance;
var ammendedDeposit;

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}



// User Interface (or front-end) logic:
$(document).ready(function() {

// Deposit Creator
$("button#applyFunds").click(function(event) {
event.preventDefault();

var inputtedAccount = new Account(($("input#name").val()), ($(("input#initialDeposit")).val()));

$("#accounts").show();
$("#accounts").append("<h3>" + inputtedAccount.name + "</h3><br> <p>Balance:" + inputtedAccount.balance + "</p>");
$("#accounts").append("<label for='deposit'></label>" +
                      "<input id='deposit' type='text' placeholder='Deposit Money' " +
                      "class='form-control'><br><button id='addFunds' class='btn btn-success' type='button'>Add Funds</button>");



$("button#addFunds").click(function(event) {
event.preventDefault();
console.log("3");
console.log((parseInt($("input#initialDeposit").val())) + (parseInt($("input#deposit").val())));


  var ammendedDeposit = ((parseInt($("input#initialDeposit").val())) + (parseInt($("input#deposit").val())));

  initialDeposit = ammendedDeposit;

});


});


});
