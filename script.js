function updateCompanyDetails() {
    const companyName = document.getElementById("company-name-ar").value;
  document.getElementById("company-name-display-ar").textContent = companyName;
  document.getElementById("company-name-display-ar-2").textContent = companyName;
  document.getElementById("company-name-display-ar-3").textContent = companyName;
  document.getElementById("company-name-display-en").textContent =
    document.getElementById("company-name-en").value;
  document.getElementById("cr-number-display").textContent =
    document.getElementById("cr-number").value;
  document.getElementById("box-number-display").textContent =
    document.getElementById("box-number").value;
  document.getElementById("pc-number-display").textContent =
    document.getElementById("pc-number").value;
  document.getElementById("commercial-number-display").textContent =
    document.getElementById("cr-number").value;
  document.getElementById("id-number-display").textContent =
      document.getElementById("id-number").value;
  document.getElementById("name-display").textContent =
    document.getElementById("name").value;
    window.print()
}
