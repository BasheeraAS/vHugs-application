package com.vhugs.Controllers;

import com.vhugs.Models.Post;
import com.vhugs.Repos.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
