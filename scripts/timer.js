const declOfNum = (n, titles) => {
  return (
    n +
    " " +
    titles[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ]
  );
};

const timer = () => {
  const timer = document.createElement("div");
  const timerText = document.createElement("p");
  const timerCount = document.createElement("span");

  timer.classList.add("timer");
  timerText.classList.add("timer_text");
  timerCount.classList.add("timer_count");

  timerText.textContent = "До конца распродажи осталось: ";

  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);

  const startTimer = () => {
    const deadline = new Date(2024, 11, 31, 0, 0, 0);
    const currentDate = new Date();
    const timeRemaining = (deadline - currentDate) / 1000;

    const seconds = Math.floor(timeRemaining % 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const days = Math.floor((timeRemaining / 60 / 60 / 24) % 30);

    const s = declOfNum(seconds, ["секунда", "секунды", "секунд"]);
    const m = declOfNum(minutes, ["минута", "минуты", "минут"]);
    const h = declOfNum(hours, ["час", "часа", "часов"]);
    const d = declOfNum(days, ["день", "дня", "дней"]);

    timerCount.textContent = `${d} ${h} ${m} ${s}`;

    if (timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      timer.remove();
    }
  };

  startTimer();
};

timer();
