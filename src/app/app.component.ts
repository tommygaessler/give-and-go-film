import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  email: string = '';
  response: string;
  error: string;
  loading: boolean = false;
  emailError: boolean = false;

  constructor(private http: Http) {

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

  reserve() {

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailRegex.test(this.email)) {
      this.emailError = false;
      this.loading = true;
      this.http.post(`https://ujj9l4tjj6.execute-api.us-east-1.amazonaws.com/prod/give-and-go-film-reserve`, {email: this.email, FNAME: null, LNAME: null}).map((response:Response) => response.json()).subscribe((response) => {
        this.response = response.body;
      }, (error) => {
        this.loading = false;
        this.error = error.body;
      });
    } else {
      this.emailError = true;
    }
  }
}
