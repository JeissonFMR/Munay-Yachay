import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartografia',
  templateUrl: './cartografia.component.html',
  styleUrls: ['./cartografia.component.scss']
})
export class CartografiaComponent implements OnInit {

  ngOnInit() {
    // Vertical Timeline JS
    $.getScript('./assets/js/vertical-timeline.js');
  }
  // Line with Area Chart 1 Ends
}
