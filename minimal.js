let indexes={};
indexes["cyberimg"]=1;
indexes["progimg"]=1;
indexes["robotimg"]=1;


/*initialise images, start sliding the first carousel*/
window.onload = function(){
	window.scrollTo({top: 0, behavior: 'smooth'});
	nextimg("cyberimg");
	document.getElementsByClassName("progimg")[0].style.display="block";
	document.getElementsByClassName("robotimg")[0].style.display="block";
}


/*get the users % scrolled down the page*/
function getscrll() {
	var h = document.documentElement;
	var b = document.body;
	return (h["scrollTop"]||b["scrollTop"]) / ((h["scrollHeight"]||b["scrollHeight"]) - h.clientHeight) * 100;
}

function disapr(img){
	img.style.animation="";
	img.style.display="none";

}

/*slide the carousel*/
function nextimg(){

	/*get which carousel the user is over*/
	var scrll=getscrll();
	if (scrll<33){
		var name = "cyberimg";
	} else if (scrll<66){
		var name = "progimg";
	} else {
		var name = "robotimg";
	}


	/*get list of image objects from the current carousel*/
	let imgs = document.getElementsByClassName(name);

	/*If user is hovering ovre image, dont scroll*/
	if (imgs[indexes[name]-1].matches(":hover")) {
		setTimeout(nextimg, 4000);
		return;
	}

	/*transition out last image*/
	imgs[indexes[name]-1].style.animation="out ease .75s forwards";

	setTimeout(disapr, 1500,imgs[indexes[name]-1]);


	/*scroll to next index for carousel youre over, then repeat in 4s*/
	indexes[name]++;
	if (indexes[name] > imgs.length){indexes[name]=1;}
	imgs[indexes[name]-1].style.display="inline-block";
	imgs[indexes[name]-1].style.animation="in ease .75s forwards";
	setTimeout(nextimg, 4000);

}