function getCount(id) {
    const element = document.getElementById(id);
    return element ? Number(element.innerText) : 0;
}

function setCount(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = value;
    }
}

function toggleTabUI(activeTab) {
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('tab-active'));
    const activeBtn = document.getElementById(`tab-${activeTab}`);
    if (activeBtn) {
        activeBtn.classList.add('tab-active');
    }
}