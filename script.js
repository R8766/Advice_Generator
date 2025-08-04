
  // 🧠 Motivational advice list
const lazyAdvice = [
  "Start before you're ready. Waiting for perfection delays greatness.",
  "Small steps every day lead to big wins. Progress > perfection.",
  "You are your only competition. Compare yourself to who you were yesterday.",
  "Failure isn’t the opposite of success—it’s part of it.",
  "Your comfort zone is cute—but nothing ever grows there.",
  "Dreams don’t work unless you do.",
  "Discipline builds the empire motivation starts.",
  "Consistency is louder than talent.",
  "Push yourself, because no one else will do it for you.",
  "Success loves the stubborn.",
  "Write down your goals—your brain takes them more seriously.",
  "Don’t wait for opportunities. Create them.",
  "Your time is your wealth. Spend it wisely.",
  "Be so good they can’t ignore you. – Steve Martin",
  "Energy flows where intention goes.",
  "Build when others break. Try when others quit.",
  "You don’t need to be extreme, just consistent.",
  "Think bigger. Start smaller. Act now.",
  "Everything you want is on the other side of effort.",
  "Successful people aren't lucky—they're relentless.",
  "Rest when you need to, but never quit.",
  "Visualize, act, refine, repeat.",
  "Excuses make today comfortable but tomorrow regrettable.",
  "You are capable of more than you know.",
  "Find a way. If not now, then how?",
  "Every expert was once a beginner.",
  "Clarity comes from action, not thought.",
  "Your hustle should reflect your hunger.",
  "Results happen when intentions meet execution."
];

// ⚡ Advice Generator
function getLazyAdvice() {
  const advice = document.getElementById("lazyAdvice");
  const random = Math.floor(Math.random() * lazyAdvice.length);
  advice.innerText = lazyAdvice[random];

  // Animate it
  advice.classList.remove("animate"); // reset previous animation
  void advice.offsetWidth; // reflow to restart animation
  advice.classList.add("animate");
}

// 🚀 Launch generator UI
function startGenerator() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("generator").classList.remove("hidden");
}

// 🌗 Theme toggle + icon switch + localStorage support
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const icon = themeToggle.querySelector("i");

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkTheme = savedTheme === "dark" || (!savedTheme && prefersDark);

  document.body.classList.toggle("dark-theme", isDarkTheme);
  document.body.classList.toggle("light-theme", !isDarkTheme);

  if (icon) {
    icon.className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (icon) {
      icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  });
});