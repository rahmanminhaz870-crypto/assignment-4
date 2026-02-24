function getCount(id) {
    return Number(document.getElementById(id).innerText);
}

function setCount(id, value) {
    document.getElementById(id).innerText = value;
}

function toggleTabUI(activeTab) {
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('tab-active'));
    document.getElementById(tab - $ { activeTab }).classList.add('tab-active');
}