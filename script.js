let endDate = "Mon Jan 01 2024 12:00 AM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");
console.log(input);
const clock = () => {
  endDate = new Date(endDate);
  const now = new Date();
  const diff = (endDate - now) / 1000;
  console.log(diff);
  const secondInaDay = 24 * 60 * 60;
  let days = Math.floor(diff / secondInaDay);
  let hours = Math.floor((diff - days * secondInaDay) / 3600);
  let minutes = Math.floor((diff - days * secondInaDay - hours * 3600) / 60);
  let seconds = Math.floor(
    diff - days * secondInaDay - hours * 3600 - minutes * 60
  );
  input[0].value = days;
  input[1].value = hours;
  input[2].value = minutes;
  input[3].value = seconds;
};

clock();

setInterval(() => {
  clock();
}, 1000);
