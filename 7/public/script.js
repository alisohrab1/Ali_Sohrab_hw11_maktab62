$(document).ready(function () {
  $("#button").click(function () {
    const data = {};
    const username = $("#username").val();
    const password = $("#password").val();

    if (username === "" || password === ""){
      empty();
      return;
    }
    data.username = username;
    data.password = password;
    console.log(data);
    console.log("clicked");
    check(data);
  });

  function check(obj) {
    console.log("hello from check");
    // obj = JSON.stringify(obj);
    console.log(obj);
    $.post("http://localhost:5500/user", obj, function (data,xhr) {
      if (data==="success") {
        success();
        
      }else if (data==="fail"){
        fail();
        
      }
    });
  }
  function empty() {
    alert("empty input")

  }

  function success(){
    console.log("hello to success")
    alert("sign in successfull")
  }
  function fail(){
    console.log("hello from fail");
    alert("no user found with this info")

  }
});
