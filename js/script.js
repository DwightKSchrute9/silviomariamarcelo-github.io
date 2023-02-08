

//prompt Contatti

const contacts = document.getElementById("contacts");
const prompt = document.getElementById("prompt");

contacts.addEventListener("click", function() {
  if (prompt.style.display === "block") {
    prompt.style.display = "none";
  } else {
    prompt.style.display = "block";
  }
});


