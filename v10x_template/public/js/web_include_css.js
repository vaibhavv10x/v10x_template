frappe.ready(() => {
  const body = document.body;
  const sessionStatus = body.getAttribute("frappe-session-status");
  const dataPath = body.getAttribute("data-path");

  // Inject CSS for login page
  if (sessionStatus === "logged-out" && dataPath === "login") {
    const loginCSS = document.createElement("link");
    loginCSS.rel = "stylesheet";
    loginCSS.href = "/assets/v10x_template/css/login.css";
    document.head.prepend(loginCSS);
  }

  // Inject CSS for /me page
  if (sessionStatus === "logged-in" && dataPath === "me") {
    const meCSS = document.createElement("link");
    meCSS.rel = "stylesheet";
    meCSS.href = "/assets/v10x_template/css/me.css";
    document.head.prepend(meCSS);
  }


});
