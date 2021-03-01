import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import {HashtagService} from '../../services/hashtag.service';
import {HashtagResponse} from '../../Models/HashtagResponse';
import { MentalComponent } from '../resources/mental/mental.component';
declare var jquery:any;

export class post{
  constructor(
    public subject:string,
    public body:string
  ){}
}

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
subject:string;
body:string;
myPost:post;
myHashtags:HashtagResponse[] = [];
displayedHashtag:HashtagResponse;
tagId:number;
shouldDisplayHashtag = false;
keywords = [
  {word: 'mental',
   link:'http://www.google.com' }
]


  constructor(public postService:PostService,private router:Router,private hashtagService:HashtagService) { }

  ngOnInit(): void {
    this.hashtagService.getAllHashtags().subscribe((response:HashtagResponse[])=>{
      this.myHashtags = response;
      console.log(this.myHashtags);
    })
    
    
  }

  addPost(){
    
    this.myPost = new post(this.subject,this.body);
    
    this.postService.addPost(this.myPost).subscribe(data=>{
      console.log(data.id);
      if(this.shouldDisplayHashtag){
        console.log('adding hashtag')
        this.postService.addHashtagToPost(this.tagId,data.id).subscribe(tagData=>{
          console.log(tagData);
        })
         
      }

      this.keywords.forEach(keyword =>{
          if(this.body.includes(keyword.word)){
            console.log(keyword.link)
          }
      })
      this.router.navigate(['post'])
    })
   
  }

  addTagToPost(id,tag){
    this.shouldDisplayHashtag = true;
    this.displayedHashtag = tag;
    this.tagId = id;
    console.log(id);
  }



}
