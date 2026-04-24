const revealItems = document.querySelectorAll(".reveal");

revealItems.forEach((item, index) => {
  item.style.setProperty("--delay", `${index * 90}ms`);
});

const copyButton = document.querySelector("[data-copy]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.copy;

    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "Email Copied";

      window.setTimeout(() => {
        copyButton.textContent = "Copy Email";
      }, 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
