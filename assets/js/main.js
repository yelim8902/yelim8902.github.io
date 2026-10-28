// Theme toggle (light / dark), persisted in localStorage
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  function current() {
    const saved = root.getAttribute("data-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  apply(current());

  btn.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();

// Mobile menu
(function () {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => menu.classList.remove("open"))
  );
})();

// Highlight the nav link of the section in view
(function () {
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = Array.from(links)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle(
            "active",
            l.getAttribute("href") === "#" + entry.target.id
          )
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
})();

// Email links: also copy the address, since mailto: does nothing without a mail app
(function () {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  let timer;

  function show(message, ok) {
    toast.innerHTML = ok ? '<i class="fas fa-circle-check" aria-hidden="true"></i>' : "";
    toast.append(message);
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  document.querySelectorAll('a[href^="mailto:"]').forEach((a) =>
    a.addEventListener("click", () => {
      const email = a.getAttribute("href").replace("mailto:", "");
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(email)
          .then(() => show("Email copied: " + email, true))
          .catch(() => show(email));
      } else {
        show(email);
      }
    })
  );
})();
