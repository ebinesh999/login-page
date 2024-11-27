document.querySelector("form").addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill out all fields!");
        e.preventDefault(); // Prevent form submission
    }
});
<script src="script.js" defer></script>
