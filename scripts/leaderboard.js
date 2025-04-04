document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://leaderboard-backend-y672.onrender.com/api/leaderboard");
        const users = await response.json(); // Read response once

        console.log("✅ Leaderboard Data:", users);

        const leaderboardBody = document.getElementById("leaderboard-body");
        leaderboardBody.innerHTML = ""; 

        users.forEach((user,index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index+1}</td>
                <td>${user.name}</td>
                <td>${user.rollNo}</td>
                <td>${user.instructor}</td>
                <td>${user.year}</td>
                <td>${user.hackerRankScore ?? 'N/A'}</td>
                <td>${user.leetCodeScore ?? 'N/A'}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    } catch (error) {
        console.error("❌ Fetch Error:", error);
    }
});
