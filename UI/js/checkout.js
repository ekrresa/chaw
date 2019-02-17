// select tab buttons
const tabButtons = document.querySelectorAll(".tablink");
const tabPanels = document.querySelectorAll(".tabcontent");

const showPanel = (panelIndex, colorCode) => {
  tabButtons.forEach(btn => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";

  tabPanels.forEach(btn => {
    btn.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
};

document.getElementById("defaultOpen").click();
