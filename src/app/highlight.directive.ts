import { Directive, OnInit, HostListener, HostBinding } from '@angular/core'; 
@Directive({ 
  selector: '[appHightLight]'
})

export class HightLightDirective implements OnInit {
  @HostBinding('style.backgroundColor') myBackgroundColor: string = '';

  constructor() {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myBackgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myBackgroundColor = 'transparent';
  }
}
