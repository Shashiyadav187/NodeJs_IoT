function myFunc() {
  var app = {
    isLoading: true,
    spinner: document.querySelector('.loader'),
    container: document.querySelector('.main'),
  }; 

 /* Event listener for refresh button */
  document.getElementById('butRefresh').addEventListener('click', myFunc(););
  if (app.isLoading) {
      app.spinner.setAttribute('hidden', true);
      app.container.removeAttribute('hidden');
      app.isLoading = false;
    }
}

function checkO(value)
{	alert("The input value has changed. The new value is: " + value); 
			var rgb = document.getElementById('ctverec');					
			var r = document.getElementById('RGB');					
			var w = document.getElementById('dvR');					
			var x = document.getElementById('dvA');					
			var y = document.getElementById('dvN');					
			var z = document.getElementById('sliderAmountR');		
	
		switch(value) 
		{
		case 'Analog' :
		{
			if (x.style.display === 'none') {
			rgb.style.display = 'none';
			r.style.display = 'none';
			x.style.display = 'block';
			y.style.display = 'none';
			z.style.display = 'block';
			
			
			} 
			else {x.style.display = 'none';
			}
		}
			break;
		case 'Digital':
		{
			if (y.style.display === 'none') {
			rgb.style.display = 'none';
			r.style.display = 'none';
			y.style.display = 'block';
			x.style.display = 'none';
			z.style.display = 'none';
			w.style.display = 'none';
			} 
			else {y.style.display = 'none';}
		}
		break;
		
		case'RGB' :
		{
			if (rgb.style.display === 'none'&&
			r.style.display === 'none') {
			
			rgb.style.display = 'block';
			r.style.display = 'block';
			y.style.display = 'none';
			x.style.display = 'none';
			z.style.display = 'none';
			w.style.display = 'none';
			} 
			else {rgb.style.display = 'none';
			r.style.display = 'none';}
		}
		break;
		
		default:{
			r.style.display = 'none';
			rgb.style.display = 'none';
			r.style.display = 'none';
			w.style.display = 'none';
			y.style.display = 'none';
			x.style.display = 'none';
			z.style.display = 'none';
			}
			
		}
	}
	//function for checkbox hide unhide  slider 
	function Showcheck()					
	{	var dvR = document.getElementById("dvR");
        dvR.style.display = chkR.checked ? "block" : "none";
    }
    //function for Slider Value updating
	function changeR(slideAmountR)			 
	{
        var sliderDiv = document.getElementById("sliderAmountR");
        sliderDiv.innerHTML = "Analog Value is " + slideAmountR;
    }
    //Test function for Slider Value updating
	function myFunctionV(val)         
	{
    alert("The input value has changed. The new value is: " + val);
	}
	//Test function for hiding Div 
 function myFunction() { 		
    var x = document.getElementById('myDIV');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
 
}
 //function for RGB value change 
function pick (value) {				
//if (document.getElementById() = document.getElementById("RGB")){document.getElementById('ctverec').style.background = document.getElementById("RGB").value;}else{}--->
 var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
 document.getElementById('ctverec').style.background = 'rgb('+ red + ',' + green + ',' + blue +')';
 document.getElementById("valRed").innerHTML = "Red Value is " + red;
 document.getElementById("valGreen").innerHTML = "Green Value is " + green;
 document.getElementById("valBlue").innerHTML = "Blue Value is " + blue;
 }