import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostI } from '../../../shared/models/post.interface';
import { PostService } from './../../posts/post.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

declare var jQuery:any;
declare var $:any;
declare var dateStr:string;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
	@Input() postIdentifier: any = {};
	
	public posts$: Observable<PostI[]>;
  	constructor(private postSvc: PostService, public authSvc: AuthService) { }

	public newPostForm = new FormGroup({
	    titlePost: new FormControl('', Validators.required),
	    contentPost: new FormControl(''),
	    datePost: new FormControl(''),
	    videoUrl: new FormControl(''),
	    yearPost: new FormControl(''),
	    tagsPost: new FormControl(''),
	    audioPost: new FormControl(''),
	    videoPost: new FormControl(''),
	    competitionPost: new FormControl(''),
	  });

  ngOnInit(): void {
  }

	addNewPost(data: PostI) {

		var title = $('#title-post').val();
		
		data.titlePost = title;		

		this.postSvc.savePost(data);

	}
}
