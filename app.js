(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");

  const specGrid = document.getElementById("specGrid");
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  const contactForm = document.getElementById("contactForm");
  const formHint = document.getElementById("formHint");

  // Header shadow on scroll
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMobile.hidden = isOpen;
    });

    // Close mobile nav on click
    navMobile.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      navToggle.setAttribute("aria-expanded", "false");
      navMobile.hidden = true;
    });
  }

  // Spec filtering
  function setSpecView(view) {
    if (!specGrid) return;

    toggleButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.specView === view);
    });

    const cards = specGrid.querySelectorAll(".spec-card");
    cards.forEach((card) => {
      const status = card.getAttribute("data-status"); // verified | planned | mixed
      // Mixed view shows all
      if (view === "mixed") {
        card.classList.remove("hidden");
        return;
      }
      // Verified view: show verified + mixed (because mixed contains prelim numbers)
      if (view === "verified") {
        card.classList.toggle("hidden", !(status === "verified" || status === "mixed"));
        return;
      }
      // Planned view: show planned + mixed (roadmap + prelim)
      if (view === "planned") {
        card.classList.toggle("hidden", !(status === "planned" || status === "mixed"));
        return;
      }
      // fallback
      card.classList.remove("hidden");
    });
  }

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setSpecView(btn.dataset.specView || "mixed");
    });
  });

  // Init default view
  setSpecView("mixed");

  // Contact form: frontend-only submit
  function setHint(text, kind) {
    if (!formHint) return;
    formHint.textContent = text;
    formHint.classList.remove("is-error", "is-ok");
    if (kind === "error") formHint.classList.add("is-error");
    if (kind === "ok") formHint.classList.add("is-ok");
  }

  function validateEmail(email) {
    // Simple but ok for frontend
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      const ack = data.get("ack") === "on";

      if (name.length < 2) return setHint("Upiši ime (min 2 znaka).", "error");
      if (!validateEmail(email)) return setHint("Upiši ispravan email.", "error");
      if (message.length < 10) return setHint("Poruka mora imati barem 10 znakova.", "error");
      if (!ack) return setHint("Moraš potvrditi da razumiješ ES / preliminary status.", "error");

      // This is frontend-only: show a confirmation message.
      // For real use, connect to backend endpoint or email service.
      setHint("Upit je spreman. Spoji formu na backend (API/email) za stvarno slanje.", "ok");

      // Optional: print payload for developers
      const payload = {
        name,
        email,
        company: String(data.get("company") || "").trim(),
        message,
        ack
      };
      console.log("Contact payload:", payload);

      contactForm.reset();
    });
  }
})();
