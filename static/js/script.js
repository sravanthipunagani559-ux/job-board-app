
const jobs = [
    {
        id: 1,
        title: "Python Developer",
        company: "Tech Solutions",
        location: "Hyderabad",
        type: "Full Time",
        salary: "₹4-6 LPA"
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Digital India",
        location: "Bangalore",
        type: "Full Time",
        salary: "₹3-5 LPA"
    },
    {
        id: 3,
        title: "Web Developer Intern",
        company: "WebTech",
        location: "Remote",
        type: "Internship",
        salary: "₹15,000/month"
    },
    {
        id: 4,
        title: "Java Developer",
        company: "CodeWorks",
        location: "Chennai",
        type: "Full Time",
        salary: "₹5-7 LPA"
    }
];

// Display jobs
function displayJobs() {
    const jobList = document.getElementById("job-list");

    if (!jobList) return;

    const params = new URLSearchParams(window.location.search);
    const search = (params.get("q") || "").toLowerCase();

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search)
    );

    if (filteredJobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found!</p>";
        return;
    }

    jobList.innerHTML = filteredJobs.map(job => `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Job Type:</strong> ${job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <button onclick="viewJob(${job.id})">
                Apply Now
            </button>
        </div>
    `).join("");
}

// View job
function viewJob(id) {
    const job = jobs.find(item => item.id === id);

    if (job) {
        alert(
            "Job: " + job.title +
            "\nCompany: " + job.company +
            "\nLocation: " + job.location +
            "\n\nApplication feature coming soon!"
        );
    }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", displayJobs);
