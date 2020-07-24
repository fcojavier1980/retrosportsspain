import { Component, OnInit } from '@angular/core';
import { NewPostComponent } from './../../posts/new-post/new-post.component';
import { PostService } from './../../posts/post.service';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-boxeo',
  templateUrl: './boxeo.component.html',
  styleUrls: ['./boxeo.component.scss']
})
export class BoxeoComponent implements OnInit {
	public posts$: Observable<PostI[]>;
  	constructor(private postSvc: PostService,  private _sanitizer: DomSanitizer) { }

  	ngOnInit(): void {
  		this.posts$ = this.postSvc.getAllPosts();
  	}
	getVideoIframe(url) {
	    var video, results;
	 
	    if (url === null) {
	        return '';
	    }
	    results = url.match('[\\?&]v=([^&#]*)');
	    video   = (results === null) ? url : results[1];
	 
	    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
	}
}
