 function sendMail() {
     let params = {
         from_name: document.getElementById("fullName").value,
         email_id: document.getElementById("email_id").value,
         message: document.getElementById("message").value
     }
     emailjs.send("service_zdw0ehu", "template_555dgkr", params).then(function (res) {
         alert("Thanks for reaching out to us!" + " " + res.status);

     });

}

// for my nav
function myFunction(){
    let x = document.getElementById("myLinks");
    if(x.style.display === "block"){
        x.style.display = "none";

    } else{
        x.style.display ="block"
    }
}




