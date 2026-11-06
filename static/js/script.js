
document.addEventListener("DOMContentLoaded", function () {
    console.log("JobBoard website loaded successfully!");

    const searchInput = document.querySelector(
        'input[name="q"]'
    );

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            console.log("Searching for:", searchInput.value);
        });
    }

    const applyButtons = document.querySelectorAll(".apply-btn");

    applyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Thank you for your interest! Application feature coming soon.");
        });
    });
});
