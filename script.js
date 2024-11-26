document.getElementById("registration-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const countryCode = document.getElementById("country-code").value;
  const phoneNumber = document.getElementById("phone-number").value;

  if (phoneNumber) {
    alert(`OTP will be sent to ${countryCode} ${phoneNumber}`);
  } else {
    alert("Please enter a valid phone number!");
  }
});
