
from flask import Flask, render_template, request

app = Flask(__name__)

jobs = [
    {
        "id": 1,
        "title": "Python Developer",
        "company": "Tech Solutions",
        "location": "Hyderabad"
    },
    {
        "id": 2,
        "title": "Frontend Developer",
        "company": "Web Technologies",
        "location": "Bangalore"
    },
    {
        "id": 3,
        "title": "Web Developer Intern",
        "company": "Digital Solutions",
        "location": "Chennai"
    },
    {
        "id": 4,
        "title": "Java Developer",
        "company": "Software Systems",
        "location": "Bangalore"
    }
]

@app.route('/')
def home():
    query = request.args.get('q', '')
    return render_template('index.html', jobs=jobs, query=query)

@app.route('/jobs')
def find_jobs():
    query = request.args.get('q', '').lower()
    filtered_jobs = [
        job for job in jobs
        if query in job['title'].lower()
        or query in job['company'].lower()
        or query in job['location'].lower()
    ]
    return render_template('search-jobs.html', jobs=filtered_jobs)

@app.route('/job/<int:job_id>')
def job_details(job_id):
    job = next((j for j in jobs if j['id'] == job_id), None)

    if job is None:
        return render_template('404.html'), 404

    return render_template('job-details.html', job=job)

@app.route('/health')
def health():
    return "Job Board App is running!"

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)
