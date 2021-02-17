package com.vhugs.Controllers;

import com.vhugs.Models.HashtagSearch;
import com.vhugs.Models.Post;
import com.vhugs.Models.Reply;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Repos.ReplyRepository;
import com.vhugs.Repos.HashtagRepository;
import com.vhugs.Services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
public class HashtagSearchController {
    @Autowired
    private HashtagSearchService service;
     
    @RequestMapping("/")
    public String hashtgList(Model model, @Param("keyword") String keyword) {
        List<Hashtag> listHashtags = service.listAll(keyword);
        model.addAttribute("listHashtags", listHashtags);
        model.addAttribute("keyword", keyword);
         
        return "index";
    }
     
    ...
}