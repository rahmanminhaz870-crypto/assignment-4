let jobs = [
    { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all" },
    { id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-Time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "all" },
    { id: 3, companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: " Full-time", salary: " $140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "all" },
    { id: 4, companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: " $110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all" },
    { id: 5, companyName: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: " $130,000 - $170,00", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all" },
    { id: 6, companyName: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: " $120,000 - $160,000", description: "Manage AWS cloud services and CI/CD pipelines.", status: "all" },
    { id: 7, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA ", type: "Full-time", salary: " $125,000 - $165,000", description: "Build and train advanced machine learning models.", status: "all" },
    { id: 8, companyName: "TechCorp Industries", position: "Senior Frontend Developer", location: "san-francisco", type: "Full-time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "all" }
];

let activeTab = 'all';


function render() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');


    const filtered = activeTab === 'all' ? jobs : jobs.filter(j => j.status === activeTab);


    setCount('total-count', jobs.length);
    setCount('interview-count', jobs.filter(j => j.status === 'interview').length);
    setCount('rejected-count', jobs.filter(j => j.status === 'rejected').length);
    setCount('section-count', filtered.length);

    container.innerHTML = "";

    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        filtered.forEach(job => {
            const card = document.createElement('div');
            card.className = "card bg-base-100 shadow-sm border border-base-300 group";
            card.innerHTML = `
                <div class="card-body p-6">
                    <div class="flex justify-between items-start">
                        <div class="space-y-1">
                            <h3 class="text-xl font-black text-primary uppercase font-bold">${job.companyName}</h3>
                            <p class="text-lg font-bold">${job.position}</p>
                            <div class="flex gap-4 text-xs font-bold text-neutral/40">
                                <span>. ${job.location}</span>
                                <span>. ${job.type}</span>
                                <span>. ${job.salary}</span>
                            </div>
                        </div>
                        <button onclick="handleDelete(${job.id})" class="btn btn-circle btn-ghost btn-sm text-error/30 hover:text-error">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                    <p class="text-neutral/60 text-sm mt-3 leading-relaxed">${job.description}</p>
                    <div class="card-actions mt-6">
                        <button onclick="changeStatus(${job.id}, 'interview')" class="btn btn-sm btn-success btn-soft rounded-full px-6 font-bold">Interview</button>
                        <button onclick="changeStatus(${job.id}, 'rejected')" class="btn btn-sm btn-error btn-soft rounded-full px-6 font-bold">Rejected</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }
}






function changeStatus(id, newStatus) {
    const index = jobs.findIndex(job => job.id === id);
    if (index !== -1) {

        jobs[index].status = jobs[index].status === newStatus ? 'all' : newStatus;
        render();
    }
}


function handleTabSwitch(tabName) {
    activeTab = tabName;
    toggleTabUI(tabName);
    render();
}