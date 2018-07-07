import { Directive,Renderer2, ElementRef, AfterViewInit ,HostListener} from '@angular/core';

@Directive({
  selector: '[appNavDir]'
})
export class NavDirDirective implements AfterViewInit{
  myElement:any;
  constructor(private render:Renderer2,private el:ElementRef) { 

  }
 ngAfterViewInit(){
	this.myElement = this.el.nativeElement;
 }
    @HostListener("window:scroll",["$event"])
  		onScroll($event){
  		var win = $event.path[1].scrollY;
  		if((win-30)>this.myElement.offsetTop){
  			this.render.addClass(this.myElement,"fixednav");
  		}
  		else{
  			this.render.removeClass(this.myElement,"fixednav");
  		}
	}	
}
