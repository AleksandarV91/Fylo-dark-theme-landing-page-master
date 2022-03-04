const btn = document.querySelector(".cta-btn");
const emailInput = document.querySelector("input");
const err = document.querySelector("small");

const isValid = (email) => {
  let regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLocaleLowerCase());
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  if (emailValue === "" || !isValid(emailValue)) {
    err.innerHTML = "Error! Please check your email";
  } else {
    emailInput.value = "";
    err.innerHTML = "";
  }
});
