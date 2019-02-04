const container = document.querySelector('#container');
const bgImage = document.querySelector('#image');
const bgImage2 = document.querySelector('#image2');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowHeight, windowWidth)

moveBackground = (event, element, intensive)  => {
	const mouseXPos = event.clientX
	const mouseYPos = event.clientY

	const calcX = mouseXPos / (windowWidth / 7)
	const calcY = mouseYPos / (windowHeight / 7)

	bgImage.style.transform = `translate(-${+calcX.toString()}%, -${+calcY.toString()}%)`

	bgImage2.style.transform = `translateX(-${+(mouseXPos / (windowWidth / 3)).toString()}%`
}

container.addEventListener('mousemove', moveBackground);