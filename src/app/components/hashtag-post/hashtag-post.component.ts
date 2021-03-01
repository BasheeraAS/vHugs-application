import { Component, OnInit } from '@angular/core';
import { HashtagResponse } from 'src/app/Models/HashtagResponse';
import { HashtagService } from 'src/app/services/hashtag.service';

@Component({
  selector: 'app-hashtag-post',
  templateUrl: './hashtag-post.component.html',
  styleUrls: ['./hashtag-post.component.css']
})
export class HashtagPostComponent implements OnInit {
myPosts:any;
  constructor(private hashtagService:HashtagService) { }

  ngOnInit(): void {
    console.log(this.hashtagService.hashtagId)
    this.hashtagService.getPostsByTag(this.hashtagService.hashtagId).subscribe((response) =>{
        this.myPosts = response;
        console.log(this.myPosts.posts);
    })
  }

}
