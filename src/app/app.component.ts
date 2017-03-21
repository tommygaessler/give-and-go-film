import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }

  ngOnInit() {
    var header = $('.backgound-image');
    var range = 200;

    $(window).on('scroll', function () {

      if (header.length) {
        var scrollTop = $(this).scrollTop();
        var offset = header.offset().top;
        var height = header.outerHeight();
        offset = offset + height / 1.2;
        var calc = 1 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if ( calc > 1 ) {
          header.css({ 'opacity': 1 });
        } else if ( calc < 0 ) {
          header.css({ 'opacity': 0 });
        }
      }
    });
  }
}
