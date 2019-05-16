const bottomArea = document.querySelector('.bottomArea')
const bigImg = document.querySelector('.bigImg')
var imgs = {}
imgs.list = [
	{name: "img-1",link: "https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg"},
	{name: "img-2",link: "https://www.bournemouthecho.co.uk/resources/images/8859617/?type=responsive-gallery-fullscreen"},
	{name: "img-3",link: "https://cf.broadsheet.ie/wp-content/uploads/2014/06/foxes-roeselien-raimond-1.jpg"},
	{name: "img-4",link: "https://www.visit-dorset.com/imageresizer/?image=%2Fdmsimgs%2FSwanage_Fireworks_credit_Greg_Edgings_if_possible_Non_copyright_14_1960247819.jpg&action=ProductDetail&crop=4D037F13B8DE2ED4468FEA6D4E1CE240"},
	{name: "img-5",link: "https://lh3.googleusercontent.com/-qtckcboud3c/W5aFiUmDaZI/AAAAAAAAAHE/wiTyfzvOPw842Wb87f8cmgFBUWo-MCIIgCJoC/w388-h311/gplus147090278627095002.png"},
];

var img ="<div class='img-{{num}}' name='{{name}}' style='background-image:url({{link}});width:{{width}}'></div>"

function pushImgs(){
	bottomArea.innerHTML = ""
	
	for(let i=0; i<imgs.list.length; i++){
		var item = imgs.list[i]
		
		var current_item_html = 
			 img.replace("{{num}}",i+1)
				 .replace("{{name}}",item.name)
				 .replace("{{link}}",item.link)
				 .replace("{{width}}",1000/imgs.list.length + 'px')
		
		// $(".bottomArea").append(current_item_html)
		bottomArea.innerHTML += current_item_html
		// console.log(bottomArea)
	}
	
	var imgBtn = document.querySelectorAll("[class*='img-']")
	
	//預設讀取第一張圖片
	bigImg.innerHTML = 
			img.replace("{{name}}",imgs.list[0].name)
				.replace("{{link}}",imgs.list[0].link)
	
	for(let i=0; i<imgBtn.length; i++){
		imgBtn[i].addEventListener('click',function(){
			bigImg.innerHTML=""
			var item = imgs.list[i]
		
			var current_item_html = 
				 img.replace("{{num}}",i+1)
					 .replace("{{name}}",item.name)
					 .replace("{{link}}",item.link)
					 .replace("{{width}}",item.link)
			bigImg.innerHTML = current_item_html
			console.log(imgBtn)
		})
	}
}
pushImgs()