canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d");

car_width = 70;
car_height = 130;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 30;
car_y = 275;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image; //load image

    car_imgTag = new Image();
    car_imgTag.onload = uploadgreencar;
    car_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0 ,0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, car_x ,car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >= 0)
    {
        car_y=car_y - 10;
        uploadBackground();
        uploadgreencar();
        console.log("Car x position = " +car_x + ", y position = " + car_y );
    }
}

function down()
{
	if(car_y <=370 )
    {
        car_y=car_y + 10;
        uploadBackground();
        uploadgreencar();
        console.log("Car x position = " +car_x + ", y position = " + car_y );
    }
}

function left()
{
	if(car_x >=10 )
    {
        car_x=car_x -10;
        uploadBackground();
        uploadgreencar();
        console.log("Car x position = " +car_x + ", y position = " + car_y );
    }
}

function right()
{
	if(car_x <=700 )
    {
        car_x=car_x +10;
        uploadBackground();
        uploadgreencar();
        console.log("Car x position = " +car_x + ", y position = " + car_y );
    }
}
