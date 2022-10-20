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


//goutes d'eau

setInterval(rainFall, 50);

function rainFall() {
  const waterDrop = document.createElement('i');
  
	waterDrop.classList.add('fas');
	waterDrop.classList.add('fa-snowflake');
	waterDrop.style.left = Math.random() * window.innerWidth - 30 + 'px';
	waterDrop.style.animationDuration = Math.random() * 1 + 's';
	waterDrop.style.opacity = Math.random() + 0.4;
	waterDrop.style.fontSize = Math.random() * 7 +'px';
	
	document.body.appendChild(waterDrop);
	
	setTimeout(() => {
		waterDrop.remove();
	}, 300)
};
