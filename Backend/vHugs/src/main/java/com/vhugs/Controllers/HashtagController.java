package com.vhugs.Controllers;

import com.vhugs.Models.Hashtag;
import com.vhugs.Models.Post;
import com.vhugs.Repos.HashtagRepository;
import com.vhugs.Services.HashtagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController

public class HashtagController {

  @Autowired
  private HashtagRepository hashtagRepository;

  @Autowired
  private HashtagService hashtagService;

  @GetMapping("/getHashtags")
  public Iterable<Hashtag> getAllHashtags(){
    return hashtagRepository.findAll();
  }

  @PostMapping("/addHashtag/{id}")
  public Hashtag addHashtagToPost(@PathVariable Long tagId, @RequestParam Long postID){
    hashtagService.addPostToHashtag(tagId,postID);
    return hashtagRepository.findById(tagId).get();
  }
}
