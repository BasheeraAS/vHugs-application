package com.vhugs.Controllers;

import com.vhugs.Models.Hashtag;
import com.vhugs.Models.Post;
import com.vhugs.Repos.HashtagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HashtagController {

  @Autowired
  private HashtagRepository hashtagRepository;

  @GetMapping("/getHashtags")
  public Iterable<Hashtag> getAllHashtags(){
    return hashtagRepository.findAll();
  }
}
