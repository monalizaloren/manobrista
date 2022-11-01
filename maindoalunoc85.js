//passo 2 do projeto

//passo 3 do projeto

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//passo 4 do projeto

function add() {
	background_imgTag = new Image(); 				//defining a variable with a new image
	background_imgTag.onload = uploadBackground; 	// setting a function, onloading this variable
	background_imgTag.src = background_image;   	// load image

	greencar_imgTag = new Image(); 				//defining a variable with a new image
	greencar_imgTag.onload = uploadgreencar; 	// setting a function, onloading this variable
	greencar_imgTag.src = greencar_image;  		 // load image

}

//passo 6 do projeto


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

	//último passo do projeto
}

function down()
{
	if(greencar_y <=350)
	{
		greencar_y =greencar_y+ 10;
		
		uploadBackground();
		uploadgreencar();
		
	}
}

function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		
		uploadBackground();
		 uploadgreencar();
		
	}
}

function right()
{
	if(greencar_x <= 750)
	{
		greencar_x =greencar_x + 10;
		
		uploadBackground();
		uploadgreencar();
		
   }
}
