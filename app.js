function onSubmit() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const messageBody =
    "Name:" + name + "<br/> Number: " + number + "<br/> Email: " + email;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "asfakahmed580@gmail.com",
    Password: "EAF7A13744E606CC89AEDD39BF5697973E3D",
    To: "asfakahmed680@gmail.com",
    From: "asfakahmed580@gmail.com",
    Subject: "Someone telling about me",
    Body: messageBody,
  }).then((message) => {
    if (message === "ok") {
      alert("Your form submitted");
    } else {
      alert(message);
    }
  });
}
