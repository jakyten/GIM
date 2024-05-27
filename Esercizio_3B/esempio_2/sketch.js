let posizioneX
let posizioneY



function setup() {
	createCanvas(windowWidth, windowHeight)


	posizioneX = width/2
	posizioneY = height/2

	velX = 10
	velY = 5

}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


function draw() {
	background (255)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width)
	{velX = -velX}

	if (posizioneX < 0)
	{velX = -velX}

	if (posizioneY >= height)
	{velY = -velY}

	if (posizioneY < 0)
	{velY = -velY}

	
	circle ( posizioneX, posizioneY, 200)


}

