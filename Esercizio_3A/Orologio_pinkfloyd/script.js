let capture;

function setup() {
    const canvas = createCanvas(640, 480);
    canvas.parent('canvas-container');

    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
}

function draw() {
    background(0);
    
    // Display the video capture
    image(capture, 0, 0, width, height);

    // Apply fog filter
  

    translate(width/2, height/2)
	
	stroke (0, 50)
	line (-200, 0, 200, 0)
	line (0, -200, 0, 200)

	
	//rotate (mouseX * 0.01)
	
	noStroke()
	fill (0)

	push()
	rotate (TAU / 12 * (hour() % 12) + TAU / 12 / 60 * minute() )
	rect (-8, 25, 16, -140)
	pop ()

	push()
	rotate (TAU / 60 * minute() )
	rect (-5, 25, 10, -170)
	pop()

	const m = (new Date()) .getMilliseconds() / 1000 * TAU / 60
	fill(255, 0, 0)
	push()
	rotate (TAU / 60 * second() + m )
	rect (-2, 25, 4, -180)
	circle (0, -155, 24)
	pop()
	
	fill (255)
	circle (0, 0, 12)





}

