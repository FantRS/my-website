const html = document.documentElement;

function applySystemTheme() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        html.dataset.theme = "dark";
    } else {
        html.dataset.theme = "light";
    }
}

applySystemTheme();

if (window.matchMedia) {
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            html.dataset.theme = e.matches ? "dark" : "light";
        });
}

const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
});
