import { Component, AfterViewInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'google-sign-in',
  template: '<div class="g-signin2" id="googleBtn">Google</div>'
})
export class GoogleSignInComponent implements AfterViewInit {

  public auth2: any;

  public googleInit() {
    let that = this;
    gapi.load('auth2', function() {
      that.auth2 = gapi.auth2.init({
        client_id: '688955737235-o22bf9ejkcl83jg0q7h0lb6dhbfine76.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      that.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function(googleUser) {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE


      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
