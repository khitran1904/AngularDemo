import { Directive,ElementRef, HostListener,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor( private elementRef:ElementRef) {
    console.log(this.elementRef.nativeElement);
    // Thay đổi style
    this.elementRef.nativeElement.style.backgroundColor = 'red';

    this.elementRef.nativeElement.classList.add('text-white','w-25');

    this.elementRef.nativeElement.style.transition='all 2s'

    
  }

  ngOnInit():void {
    const {clientWidth,clientHeight} = this.elementRef.nativeElement;
    console.log(clientWidth , clientHeight);
  }

  @HostListener('mouseenter') handleMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave') handleMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('click') handleClick(){
    this.elementRef.nativeElement.classList.toggle('w-100')
  }

  // Lấy width va height của một thẻ

  

}

//add remove toggle
//HostListener : trình lắng nghe sự liện trong directive