const toggleButton = document.getElementById('toggle-button');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show() {
	sideBar.classList.toggle('active');
}

//enlever la side bar en cliquant sur le contenu principal

const content = document.querySelector('.content')
content.addEventListener('click', () => {
	sideBar.classList.remove('active')}
)
