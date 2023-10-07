function onSubmit() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "asfakahmed580@gmail.com",
    Password: "EAF7A13744E606CC89AEDD39BF5697973E3D",
    To: "asfakahmed680@gmail.com",
    From: "asfakahmed580@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
