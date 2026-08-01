// Gimbap Story Website
console.log("Website Loaded");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Gimbap Story");

    const button = document.querySelector(".hero button");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thank you for choosing Gimbap Story!");
        });
    }
});
