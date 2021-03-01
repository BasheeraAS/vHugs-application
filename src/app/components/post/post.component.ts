import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PostService} from '../../services/post.service';
import {postResponse} from '../../Models/postResponse';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

posts:postResponse[] = [];

  constructor(public postService: PostService,private router:Router) { }

  ngOnInit(): void {
    
    this.getAllPosts();
  }

  goToSinglePost(id){
  
    this.postService.setId(id);
    this.router.navigate(['singlepost']);
  }
  addPost(){
    this.router.navigate(['addpost']);
  }

  addHug(id){
    this.postService.addHug(id).subscribe(data=>{
      console.log(data);
      this.getAllPosts();
    })
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(
      (posts:postResponse[]) => {
      
        this.posts = posts;
        this.posts.reverse();
        console.log(this.posts);
     
      }
    )
  }

}
