import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuComponent } from '../../../components/menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

declare var jQuery:any;
declare var $:any;
let videoElem = $("#video");
var distancia_fix = 0;

var cont = 0; 
var cont_zone = 0; 
var cont_zone_top = 0; 
var cont_zone_medium = 0; 
var cont_zone_medium_nfl = 0; 

var zone_pos_top_initial = 0;
var zone_pos_top_initial_round = 0; 
var zone_pos_left_initial_top = 0;
var zone_pos_left_initial_top_round = 0;
var zone_pos_img_top_initial = 0;
var zone_pos_img_top_initial_round = 0; 
var zone_pos_img_left_initial_top = 0;
var zone_pos_img_left_initial_top_round = 0;
var zone_pos_img_left_initial_medium_round = 0;

var lateral_move_img = 0;
var vertical_move_img = 0;
var vertical_move_img_nfl = 0;

var intervalo=0;
var intervalo_medium=0;

var medium_control = false;
var medium_control_nfl = false;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  	this.initialValues();
  //	this.arrowDown();
  	
  }


	arrowDownShow() {
		$( ".main-gallery" ).animate({
		    top: "70%",
		}, 500, function() {
		    // Animation complete. 
		}); 		
	}  
	arrowDownOut() {
		$( ".main-gallery" ).animate({
		    top: "95%",
		}, 500, function() {
		    // Animation complete. 
		}); 		
	}  	
	showMenu(elem=null){
		//var ventana = $('.home-container');
		//console.log($(ventana)[0].offsetTop);
		$('.overlay-menu').show();
		$( ".overlay-menu" ).animate({
		    height: "100%",
		}, 1500, function() {
		    // Animation complete. 
		    $('.home-container').hide();
		    $('.container-close-img').css('display', 'block');
		}); 
		$( ".container-menu-header-title" ).animate({
		    marginTop: "1%",
		}, 500, function() {
		    // Animation complete. 
		}); 
		$( ".menu-login" ).animate({
		    opacity: 0.5,
		    paddingTop: "2%",
		}, 1500, function() {
		    // Animation complete.
		    $(this).css('opacity', 1);
		     
		});	
		$( ".menu-about" ).animate({
		    opacity: 0.5,
		    paddingTop: "2%",		    
		}, 1550, function() {
		    // Animation complete.
		     $(this).css('opacity', 1);
		     
		});		
		$( ".menu-boxeo" ).animate({
		    opacity: 0.5,
		    paddingTop: "2%",		    
		}, 1600, function() {
		    // Animation complete.
		     $(this).css('opacity', 1);
		     
		});			
		$( ".menu-nfl" ).animate({
		    opacity: 0.5,
		    paddingTop: "2%",		    
		}, 1650, function() {
		    // Animation complete.
		     $(this).css('opacity', 1);
		     
		});				
		$( ".menu-basket" ).animate({
		    opacity: 0.5,
		    paddingTop: "2%",		    
		}, 1700, function() {
		    // Animation complete.
		     $(this).css('opacity', 1);
		     
		});		
		$( ".menu-futbol" ).animate({
		    opacity: 0.5,
		    paddingTop: "2%",		    
		}, 1750, function() {
		    // Animation complete.
		     $(this).css('opacity', 1);
		     
		});							

	}

	showGallery(elem=null){
		//var ventana = $('.home-container');
		//console.log($(ventana)[0].offsetTop);

		//$('.main-gallery').css('top' , '70%');
		var altoscreen = $(window).height();
		var scroll = $(window).scrollTop();	
		var zone_left = $('.half-left-zone');
		var zone_pos_top = zone_left.offset().top;
		var zone_pos_round = Math.round(zone_pos_top);
		var distancia = zone_pos_round - altoscreen;
		//console.log(zone_pos);
		/*
		console.log(altoscreen+" Alto pantalla");
		console.log(zone_pos_round+" Posicion futbol");
		console.log(scroll+" scroll top");
		console.log(zone_pos_round - scroll);
		console.log(distancia_fix+" distancia");
		*/
		this.zoneManagement(scroll, distancia);
		this.zone1_Management(zone_pos_round, scroll, altoscreen)

	}	

	zoneManagement(elem1, elem2){

		cont++;
		if(cont == 2){

			$( ".main-gallery" ).animate({
		        top: "70%",
		    	}, 500, function() {
		    // Animation complete. 
		    cont=1;
		  	}); 
		distancia_fix = elem2;
		}if(elem1 < 1){
			//Oculta la cita anteriormente subida.  
			$( ".main-gallery" ).animate({
		        top: "95%",
		    	}, 500, function() {
		    	// Animation complete. 
		    	$( ".half-left-zone" ).animate({
			        marginTop: "10%",
			    	}, 1, function() {
			    // Animation complete. 
			    cont_zone = 0;
			  	}); 
		    	$( ".half-right-zone" ).animate({
			        marginTop: "10%",
			    	}, 1, function() {
			    // Animation complete. 
			    cont_zone = 0;
			  	}); 		  				  	
		  	}); 
		}
	}

	zone1_Management(elem1, elem2, elem3){
		if(elem1 - elem2 < elem3){

			cont_zone++
			//alert(cont_zone);
			if(cont_zone == 3){
				$( ".half-left-zone" ).animate({
			       	 marginTop: "5%",
			    	}, 800, function() {
			    // Animation complete. 
			    //alert('fin de futbol');
			  	}); 
				$( ".half-right-zone" ).animate({
			        marginTop: "8%",
			    	}, 800, function() {
			    // Animation complete. 
			  	}); 	  	
			}
		}
	}


  	initialValues(){
		//var zone_top_initial = $('.northwest-zone-futbol');
		var zone_top_img_initial = $('.futbol-zone img');		
		zone_pos_img_left_initial_top_round = $(zone_top_img_initial)[0].x;	
		lateral_move_img = zone_pos_img_left_initial_top_round;			
		/*
		zone_pos_top_initial = zone_top_initial.offset().top;
		zone_pos_top_initial_round = Math.round(zone_pos_top_initial);
		zone_pos_left_initial_top = zone_top_initial.offset().left;
		zone_pos_left_initial_top_round = Math.round(zone_pos_left_initial_top);
		*/
		var zone_medium_img_initial = $('.boxeo-zone img');		
		
		zone_pos_img_left_initial_medium_round = $(zone_medium_img_initial)[0].y;	
		vertical_move_img = zone_pos_img_left_initial_medium_round;		
  		
  	}

	futbolNW_incremento(){
		intervalo = setInterval(this.futbolNW_Move, 100);
	}
	futbolNE_incremento(){
		intervalo = setInterval(this.futbolNE_Move, 100);
	}
	futbolSW_incremento(){
		intervalo = setInterval(this.futbolSW_Move, 100);
	}	
	futbolSE_incremento(){
		intervalo = setInterval(this.futbolSE_Move, 100);
	}		

	myStopFunction() {
  		clearInterval(intervalo);
	} 
	
	futbolNW_Init(){
		cont_zone_top = 0;
		this.myStopFunction();
		lateral_move_img = zone_pos_img_left_initial_top_round;
		
		$( ".futbol-rectangle" ).animate({
			marginLeft: "24%",
			marginTop: "-3%",
		}, 800, function() {
		// Animation complete. 
		}); 
		
		$( ".futbol-zone img" ).animate({
			marginRight: "20%",
			marginLeft: zone_pos_img_left_initial_top_round+"px",
			marginTop: "0%",
		}, 200, function() {
		// Animation complete. 
		}); 
		
	}	
	
	futbolNW_Move(){
		/*
		var zone_NW = $('.northwest-zone-futbol');
		var box_width = $(zone_NW)[0].clientWidth;
		var box_height = $(zone_NW)[0].clientHeight;		
		var zone_pos_top = zone_NW.offset().top;
		var zone_pos_top_round = Math.round(zone_pos_top);
		var zone_pos_left = zone_NW.offset().left;
		var zone_pos_left_round = Math.round(zone_pos_left);				
		//console.log('Caja Posición Top:'+zone_pos_top_round+', Caja Posición Left:'+zone_pos_left_round)			 	
		$( ".northwest-zone-futbol" ).on( "mousemove", function( event ) {
		 //console.log( "Ratón Top:" + event.pageY + ", Ratón Left:" + event.pageX );
		 var ejeX = event.pageX;
		 $('.futbol-zone img').css('margin-left', ejeX+'px');
		});
		*/	
		if(cont_zone_top < 20){		
			lateral_move_img++;
			$( ".futbol-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".futbol-zone img" ).css('margin-top', cont_zone_top+'px');
			//$( ".futbol-zone img" ).css('margin-top', '15px');		
		}

		cont_zone_top++;
	}	
	futbolNE_Move(){
		if(cont_zone_top < 20){
			lateral_move_img--;
			$( ".futbol-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".futbol-zone img" ).css('margin-top', cont_zone_top+'px');		
		}
		cont_zone_top++;
	}
	futbolSW_Move(){
		if(cont_zone_top > -20){
			lateral_move_img++;
			$( ".futbol-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".futbol-zone img" ).css('margin-top', cont_zone_top+'px');	
		}

		cont_zone_top--;	
	
	}		
	futbolSE_Move(){
		if(cont_zone_top > -20){
			lateral_move_img--;
			$( ".futbol-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".futbol-zone img" ).css('margin-top', cont_zone_top+'px');	
		}
		cont_zone_top--;	
	}	

	basketNW_Init(){
		cont_zone_top = 0;
		this.myStopFunction();
		lateral_move_img = zone_pos_img_left_initial_top_round;
		
		$( ".basket-rectangle" ).animate({
			marginLeft: "24%",
			marginTop: "-3%",
		}, 800, function() {
		// Animation complete. 
		}); 
		
		$( ".basket-zone img" ).animate({
			marginRight: "20%",
			marginLeft: zone_pos_img_left_initial_top_round+"px",
			marginTop: "0%",
		}, 200, function() {
		// Animation complete. 
		}); 
		
	}	

	basketNW_incremento(){
		intervalo = setInterval(this.basketNW_Move, 100);
	}
	basketNE_incremento(){
		intervalo = setInterval(this.basketNE_Move, 100);
	}
	basketSW_incremento(){
		intervalo = setInterval(this.basketSW_Move, 100);
	}	
	basketSE_incremento(){
		intervalo = setInterval(this.basketSE_Move, 100);
	}	

	basketNW_Move(){
		if(cont_zone_top < 20){		
			lateral_move_img++;
			$( ".basket-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".basket-zone img" ).css('margin-top', cont_zone_top+'px');		
		}
		cont_zone_top++;
	}	

	basketNE_Move(){
		if(cont_zone_top < 20){
			lateral_move_img--;
			$( ".basket-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".basket-zone img" ).css('margin-top', cont_zone_top+'px');	
		}
		cont_zone_top++;
	}

	basketSW_Move(){
		if(cont_zone_top > -20){
			lateral_move_img++;
			$( ".basket-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".basket-zone img" ).css('margin-top', cont_zone_top+'px');		
		}
		cont_zone_top--;	
	}	

	basketSE_Move(){
		if(cont_zone_top > -20){
			lateral_move_img--;
			$( ".basket-zone img" ).css('margin-left', lateral_move_img+'px');
			$( ".basket-zone img" ).css('margin-top', cont_zone_top+'px');	
		}
		cont_zone_top--;	
	
	}
	myStopFunctionMedium() {
  		clearInterval(intervalo_medium);
	} 	
	mediumZoneInit(){

		cont_zone_medium = 0;
		cont_zone_medium_nfl = 0;
		this.myStopFunctionMedium();
		vertical_move_img = zone_pos_img_left_initial_medium_round;
		vertical_move_img_nfl = zone_pos_img_left_initial_medium_round;


		
	}

}


