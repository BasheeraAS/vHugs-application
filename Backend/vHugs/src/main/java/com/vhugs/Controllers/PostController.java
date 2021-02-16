package com.vhugs.Controllers;

import com.vhugs.Models.Post;
import com.vhugs.Repos.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*")
@RestController
public class PostController {
    @Autowired
    private PostRepository postRepo;

    @GetMapping("/posts")
    public Iterable<Post> getAllPosts(){
        return postRepo.findAll();
    }

    @PostMapping("/posts")
    public void addNewPost(@RequestBody Post newPost){
        postRepo.save(newPost);
    }
}
