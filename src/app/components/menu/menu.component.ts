import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  	this.menuItemsManagement();
  	
  }

	menuItemsManagement() {
		$(function() {
		  $('.menu-futbol').hover(function() {
		    $('.overlay-menu').css('background-color', 'transparent');
		    $('.overlay-menu').css('overflow', 'hidden');
		    $('#retrotv').css('display', 'none');
		    $('#video').css('display', 'none');
		  	$('#futbol-bg').css('display', 'block');

		  }, function() {
		    // on mouseout, reset the background colour
		    $('.overlay-menu').css('background-color', '');
		    $('.overlay-menu').css('overflow', '');
		    $('#retrotv').css('display', 'block');
		    $('#video').css('display', 'block');
		    $('#futbol-bg').css('display', '');		     
		  });
		  $('.menu-basket').hover(function() {
		    $('.overlay-menu').css('background-color', 'transparent');
		    $('.overlay-menu').css('overflow', 'hidden');
		    $('#retrotv').css('display', 'none');
		    $('#video').css('display', 'none');
		  	$('#basket-bg').css('display', 'block');

		  }, function() {
		    // on mouseout, reset the background colour
		    $('.overlay-menu').css('background-color', '');
		    $('.overlay-menu').css('overflow', '');
		    $('#retrotv').css('display', 'block');
		    $('#video').css('display', 'block');
		    $('#basket-bg').css('display', '');		     
		  });	
		  $('.menu-nfl').hover(function() {
		    $('.overlay-menu').css('background-color', 'transparent');
		    $('.overlay-menu').css('overflow', 'hidden');
		    $('#retrotv').css('display', 'none');
		    $('#video').css('display', 'none');
		  	$('#nfl-bg').css('display', 'block');

		  }, function() {
		    // on mouseout, reset the background colour
		    $('.overlay-menu').css('background-color', '');
		    $('.overlay-menu').css('overflow', '');
		    $('#retrotv').css('display', 'block');
		    $('#video').css('display', 'block');
		    $('#nfl-bg').css('display', '');		     
		  });		
		  $('.menu-boxeo').hover(function() {
		    $('.overlay-menu').css('background-color', 'transparent');
		    $('.overlay-menu').css('overflow', 'hidden');
		    $('#retrotv').css('display', 'none');
		    $('#video').css('display', 'none');
		  	$('#boxeo-bg').css('display', 'block');

		  }, function() {
		    // on mouseout, reset the background colour
		    $('.overlay-menu').css('background-color', '');
		    $('.overlay-menu').css('overflow', '');
		    $('#retrotv').css('display', 'block');
		    $('#video').css('display', 'block');
		    $('#boxeo-bg').css('display', '');		     
		  });	
		  $('.menu-about').hover(function() {
		    $('#retrotv').css('display', 'none');
		    $('.overlay-menu').css('overflow', 'scroll');
		    $('#video').css('display', 'none');
		  	$('#about-bg').css('display', 'block');
		  	$('#about-bg').css('z-index', '200');
		  	$('#about-bg').css('position', 'relative');

		  }, function() {
		    // on mouseout, reset the background colour
		    $('.overlay-menu').css('background-color', '');
		    $('.overlay-menu').css('overflow', '');
		    $('#retrotv').css('display', 'block');
		    $('#video').css('display', 'block');
		    $('#about-bg').css('display', '');
		    $('#about-bg').css('zIndex', '');	
		    $('#about-bg').css('position', '');	     
		  });	
		  $('.menu-login').hover(function() {
		    $('#retrotv').css('display', 'none');
		    $('.overlay-menu').css('overflow', 'scroll');
		    $('#video').css('display', 'none');
		  	$('#login-bg').css('display', 'block');
		  	$('#login-bg').css('z-index', '200');
		  	$('#login-bg').css('position', 'relative');

		  }, function() {
		    // on mouseout, reset the background colour
		    $('.overlay-menu').css('background-color', '');
		    $('.overlay-menu').css('overflow', '');
		    $('#retrotv').css('display', 'block');
		    $('#video').css('display', 'block');
		    $('#login-bg').css('display', '');
		    $('#login-bg').css('zIndex', '');	
		    $('#login-bg').css('position', '');	     
		  });		  		  	    	  
		});

	}

	showHome(elem=null){
		//var ventana = $('.home-container');
		//console.log($(ventana)[0].offsetTop);
		$('.home-container').show();
		$('#down-tv-img').show();
		$( ".overlay-menu" ).animate({
		    height: "0%",
		}, 800, function() {
		    // Animation complete. 
		    $('.overlay-menu').hide();
		    $('.container-close-img').css('display', 'none');

		}); 
		$( ".container-menu-header-title" ).animate({
		    marginTop: "-25%",
		}, 500, function() {
		    // Animation complete. 
		}); 
		$( ".menu-login" ).animate({
		    opacity: 0,
		    marginTop: "0%",
		}, 600, function() {
		    // Animation complete
		     
		});	
		$( ".menu-about" ).animate({
		    opacity: 0,
		    marginTop: "0%",		    
		}, 600, function() {
		    // Animation complete.
		     
		});		
		$( ".menu-boxeo" ).animate({
		    opacity: 0,
		    marginTop: "0%",		    
		}, 600, function() {
		    // Animation complete.
		     
		});			
		$( ".menu-nfl" ).animate({
		    opacity: 0,
		    marginTop: "0%",		    
		}, 600, function() {
		    // Animation complete.
		     
		});				
		$( ".menu-basket" ).animate({
		    opacity: 0,
		    marginTop: "0%",		    
		}, 200, function() {
		    // Animation complete.
		     
		});		
		$( ".menu-futbol" ).animate({
		    opacity: 0,
		    marginTop: "0%",		    
		}, 200, function() {
		    // Animation complete.
		     
		});				 		

	}

	hideMenu(){
		$( ".overlay-menu" ).hide();
	}
  	onLogout(): void {
    	this.authSvc.logout();
  	}
}
