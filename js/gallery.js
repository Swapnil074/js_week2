/*Name this external file gallery.js*/

function upDate(element){
    var x=document.getElementById("image");
    var url = document.querySelector('.preview').src;
    x.style.backgroundImage='URL('+url+')';
    x.innerHTML = element.alt;
	}

	function unDo(){
    var x=document.getElementById("image");
    x.style.backgroundImage="none"
    x.innerHTML ='Hover over an image below to display here';

     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	}