 function sendMail() {
     let params = {
         from_name: document.getElementById("fullName").value,
         email_id: document.getElementById("email_id").value,
         message: document.getElementById("message").value
     }
     emailjs.send("service_zdw0ehu", "template_555dgkr", params).then(function (res) {
         alert("Thanks for reaching out to us!" + res.status);

     })

}




