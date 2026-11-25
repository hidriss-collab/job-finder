const searchForm = document.getElementById("search-form");
const jobResults = document.getElementById("job-results");

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const jobSearch = document.getElementById("job-search").value;
    const location = document.getElementById("location").value;

    if (!jobSearch.trim() || !location.trim()) {
        jobResults.innerHTML = "<p>PLease enter a job title and location.</p>";
        return;
    }

    jobResults.innerHTML = "<p>Searching for jobs...</p>";

    try {
        const response = await fetch(
            `/api/jobs?query=${encodeURIComponent(jobSearch)}&location=${encodeURIComponent(location)}`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to retrieve jobs.");
        }

        console.log(data);

        const jobs = data.data?.jobs || [];

        if (jobs.length === 0) {
            jobResults.innerHTML = "<p>No jobs found.</p>";
            return;
        }    

        jobResults.innerHTML = "";

        jobs.forEach(function (job) {
            const jobCard = document.createElement("div");

            jobCard.className = "job-card";
            
            jobCard.innerHTML = `
                <h3>${job.job_title}</h3>
                <p>${job.employer_name}</p>
                <p>${job.job_city || ""}, ${job.job_country || ""}</p>
                <p>${job.job_employment_type || "Employment type not available"}</p>
                <a href="${job.job_apply_link}" target="_blank">View Job</a>
            `;

            jobResults.appendChild(jobCard);
        });    


    } catch (error) {
        console.error(error);
        jobResults.innerHTML = `<p>${error.message}</p>`;
    }
})