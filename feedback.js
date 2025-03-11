document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const feedbackList = document.getElementById("feedbackList");

    const ratings = document.querySelectorAll(".rating");
    
    ratings.forEach(rating => {
        rating.innerHTML = "★".repeat(5); // 5 stars
        rating.dataset.value = 5;

        rating.addEventListener("click", (e) => {
            if (e.target.tagName === "SPAN") {
                let stars = [...e.target.parentNode.children];
                let index = stars.indexOf(e.target);
                
                stars.forEach((star, i) => {
                    star.classList.toggle("active", i <= index);
                });

                e.target.parentNode.dataset.value = index + 1;
            }
        });

        rating.addEventListener("mouseover", (e) => {
            if (e.target.tagName === "SPAN") {
                let stars = [...e.target.parentNode.children];
                let index = stars.indexOf(e.target);
                stars.forEach((star, i) => {
                    star.classList.toggle("active", i <= index);
                });
            }
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const facultyName = document.getElementById("facultyName").value;
        const teachingRating = document.getElementById("teaching").dataset.value;
        const communicationRating = document.getElementById("communication").dataset.value;
        const overallRating = document.getElementById("overall").dataset.value;
        const comments = document.getElementById("comments").value;

        const feedbackEntry = document.createElement("div");
        feedbackEntry.classList.add("feedback-entry");
        feedbackEntry.innerHTML = `
            <strong>${facultyName}</strong><br>
            📚 Teaching Quality: ${"★".repeat(teachingRating)}<br>
            🗣️ Communication: ${"★".repeat(communicationRating)}<br>
            🌟 Overall: ${"★".repeat(overallRating)}<br>
            📝 Comments: ${comments || "No comments"}
        `;

        feedbackList.prepend(feedbackEntry);

        form.reset();
        ratings.forEach(rating => {
            rating.innerHTML = "★".repeat(5);
            rating.dataset.value = 5;
        });
    });
});
