const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let currentDate = new Date();
const calendarDates = document.getElementById("calendar-dates");
const monthYear = document.getElementById("month-year");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

function renderCalendar(date) {
  calendarDates.innerHTML = "";
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("date");
    calendarDates.appendChild(emptyDiv);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = i;
    calendarDates.appendChild(dateDiv);
  }
}

btnPrev.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

btnNext.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
