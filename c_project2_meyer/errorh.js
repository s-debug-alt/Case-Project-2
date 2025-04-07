
// validation for submit
document.getElementById('job-application-form').addEventListener('submit', function(event){
event.preventDefault(); // prevent form from submition
  //get value 
  const email = document.getElementById('myEmail').value;
 //message to show messages
  const message = document.getElementById('message');
  message.innerHTML = '';
  try { 
  //email validation
  if (!email.includes('@') || !email.includes('.')) { throw new Error('not valid email');}
  
  window.alert("Thank you"); this.submit(); // use keyword to submit form
  }catch (error) { //if fails
  window.alert(error.message);
  }});
  
