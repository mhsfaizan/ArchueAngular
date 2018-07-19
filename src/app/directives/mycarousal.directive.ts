import { Directive ,Renderer2, ElementRef, AfterViewInit,OnDestroy} from '@angular/core';

@Directive({
  selector: '[appMycarousal]'
})
export class MycarousalDirective implements AfterViewInit,OnDestroy {
  interval:any;
  constructor(private render:Renderer2,private el:ElementRef) { }
  ngAfterViewInit(){
  	var mainImage = this.el.nativeElement.childNodes[0].childNodes[0];
  	var smImage = this.el.nativeElement.childNodes[0].childNodes[1].childNodes;
  	var imgs = [];
  	var counter = 0;
	for(let i=0;i<smImage.length;i++){
		imgs[i] = smImage[i].childNodes[0];		
		this.render.listen(smImage[i].childNodes[0],"click",($event)=>{
			myImgChng($event.target.src);
			counter = i;
		})
	}
	//console.log(imgs);
	var that = this;
	function myImgChng(image){
		that.render.setAttribute(mainImage.childNodes[0] ,"src", image);
	}
	this.interval = setInterval(()=>{
		if(counter==3){
			counter = 0;
		}
		myImgChng(imgs[counter].src);
		counter++;
	},2000);
  }
  ngOnDestroy(){
  	clearInterval(this.interval);
  }
}
