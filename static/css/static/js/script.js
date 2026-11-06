
const jobs = [
    {
        title: "Python Developer",
        company: "Tech Solutions",
        location: "Hyderabad",
        type: "Full Time",
        salary: "₹4-6 LPA"
    },
    {
        title: "Frontend Developer",
        company: "Digital India",
        location: "Bangalore",
        type: "Full Time",
        salary: "₹3-5 LPA"
    },
    {
        title: "Web Developer Intern",
        company: "WebTech",
        location: "Remote",
        type: "Internship",
        salary: "₹15,000/month"
    },
    {
        title: "Java Developer",
        company: "CodeWorks",
        location: "Chennai",
        type: "Full Time",
        salary: "₹5-7 LPA"
    }
];

const jobList = document.getElementById("job-list");

function displayJobs() {
    if (!jobList) return;

    const search = new URLSearchParams(window.location.search)
        .get("q")?.toLowerCase() || "";

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search)
    );

    if (filteredJobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found. Try another keyword.</p>";
        return;
    }

    jobList.innerHTML = filteredJobs.map(job => `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <button onclick="alert('Application feature coming soon!')">
                Apply Now
            </button>
        </div>
    `).join("");
}

displayJobs();
