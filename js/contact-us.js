function submitForm(e) {
  let hasErrors = false;

  // block elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const content = document.getElementById("content");

  // error elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const contentError = document.getElementById("content-error");

  // cleanup
  nameError.className = "visually-hidden text-danger";
  emailError.className = "visually-hidden text-danger";
  contentError.className = "visually-hidden text-danger";

  // conditions
  if (name.value === "") {
    nameError.className = "text-danger";
    hasErrors = true;
  }

  if (!email.value.includes("@")) {
    emailError.className = "text-danger";
    hasErrors = true;
  }

  if (content.value === "") {
    contentError.className = "text-danger";
    hasErrors = true;
  }

  // do effects
  if (!hasErrors) {
    document.getElementById("main-form").style.display = "none";
    document.getElementById("form-finish").className = "";
  }

  return false;
}
