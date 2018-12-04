import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name = 'app-about';
  
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', '/src/assets/photos/azizi-gibson-red-bull.jpg');

   }

  ngOnInit() {
  }

}
