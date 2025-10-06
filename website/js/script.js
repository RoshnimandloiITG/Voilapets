const searchBar = document.getElementById('searchBar');
const searchBarPopUp = document.getElementById('searchBarPopUp');
const crossBtn = document.getElementById('crossBtn');
const sideBar = document.getElementById("sideBar");
const dustbinBar = document.getElementById('dustbinBar');
const sidebarCrossBtn = document.getElementById('sidebarCrossBtn');
const hamburg = document.getElementById('hamburg');
const onCLickLinks = document.getElementById("onCLickLinks");
const cross = document.getElementById('cross');
// event listner to toggel search bar 
searchBar.addEventListener('click', () => {
    searchBarPopUp.style.display = "block";
    document.body.classList.add('hidden');
})
crossBtn.addEventListener('click', () => {
    searchBarPopUp.style.display = "none";
    document.body.classList.remove('hidden');
})
dustbinBar.addEventListener('click', () => {
    sideBar.style.display = "block";
    document.body.classList.add('hidden');

})
sidebarCrossBtn.addEventListener('click', () => {
    sideBar.style.display = "none";
    document.body.classList.remove('hidden');

})
hamburg.addEventListener('click', () => {
    onCLickLinks.style.display = "block";
    cross.style.display = "block";
    hamburg.style.display = "none";
})

cross.addEventListener('click', () => {
    onCLickLinks.style.display = "none";
    cross.style.display = "none";
    hamburg.style.display = "block";
})