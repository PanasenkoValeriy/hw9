const e=document.querySelector(".user-form");e.addEventListener("submit",(function(t){t.preventDefault();const s=e.elements.login.value,r=e.elements.password.value;if("submit-btn"===t.submitter.id){const e={userLogin:s,userPassword:r};localStorage.setItem("userData",JSON.stringify(e)),alert("The user is registered")}if("login-btn"===t.submitter.id){const e={userLogin:s,userPassword:r},t=localStorage.getItem("userData");JSON.stringify(e)===t?alert("Wellcome!"):alert("User not found")}e.reset()}));
//# sourceMappingURL=task-3.e537b54e.js.map
