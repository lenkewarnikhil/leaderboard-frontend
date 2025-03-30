document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script loaded and running!");

    const form = document.getElementById("signup-form");
    if (!form) {
        console.error("❌ Form not found! Check signup.html.");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent form reload

        // Get input values safely
        const name = document.querySelector('input[name="name"]');
        const rollNo = document.querySelector('input[name="rollNo"]');
        const classSec = document.querySelector('input[name="classSec"]');
        const instructor = document.querySelector('input[name="instructor"]');
        const year = document.querySelector('input[name="year"]');
        const hackerRankUsername = document.querySelector('input[name="hackerRankUsername"]');
        const leetCodeUsername = document.querySelector('input[name="leetCodeUsername"]');

        // Check if any field is missing
        if (!name || !rollNo || !classSec || !instructor || !year || !hackerRankUsername || !leetCodeUsername) {
            console.error("❌ Some input fields are missing! Check input names in signup.html.");
            return;
        }

        const formData = {
            name: name.value,
            rollNo: rollNo.value,
            classSec: classSec.value,
            instructor: instructor.value,
            year: year.value,
            hackerRankUsername: hackerRankUsername.value,
            leetCodeUsername: leetCodeUsername.value,
        };

        console.log("Submitting Data:", formData); // Debugging

        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                alert("✅ User signed up successfully!");
                window.location.href = "leaderboard.html";
            } else {
                alert("❌ Error: " + data.error);
            }
        } catch (error) {
            console.error("❌ Server Connection Failed:", error);
            alert("❌ Failed to connect to server.");
        }
    });
});
