const form = document.querySelector("form");

console.log(form);

const validateForm = () => {
  const emailInput = document.getElementById("emailInput").value;
  const messageInput = document.getElementById("message").value;

  if (!emailInput.includes("@") || !(emailInput.length > 4)) {
    alert("Please enter a valid email");

  } else if (!messageInput.length) {
      alert("Please include a message")

  } else {
    alert("Thank you for your feedback!");
  }
};
