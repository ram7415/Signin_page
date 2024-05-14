const admin = {
  email: "admin@gmail.com",
  password: "123",
};

const employee = {
  email: "employee@gmail.com",
  password: "456",
};
const client = {
  email: "client@gmail.com",
  password: "678",
};

const SignIn = (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === admin.email && password === admin.password) {
    window.location.assign("admin_page.html");
    alert("admin_page.html");
  } else if (email === employee.email && password === employee.password) {
    window.location.assign("employee_page.html");
    alert("employee_page.html");
  } else if (email === client.email && password === client.password) {
    window.location.href = "client_page.html";
    alert("client_page.html");
  } else if (
    email !== employee.email &&
    email !== client.email &&
    email !== admin.email &&
    password !== employee.password &&
    password !== client.password &&
    password !== admin.password
  ) {
    alert("Please Check your email or password");
  } else {
    alert("Invalid email or password");
  }
};
const adminbtn = () => {
  document.getElementById("email").value = admin.email;
  document.getElementById("password").value = admin.password;
};
const employeebtn = () => {
  document.getElementById("email").value = employee.email;
  document.getElementById("password").value = employee.password;
};
const clientbtn = () => {
  document.getElementById("email").value = client.email;
  document.getElementById("password").value = client.password;
};
