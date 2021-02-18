package com.vhugs.Services;

import com.vhugs.Exceptions.ResourceNotFoundException;
import com.vhugs.Models.HashtagSearch;
import com.vhugs.Models.Post;
import com.vhugs.Models.Reply;
import com.vhugs.Repos.HashtagRepository;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Repos.ReplyRepository;
import org.springframework.stereotype.Service;

@Service
public class HashtagSearchService {
    @Autowired
    private HashtagRepository repo;
     
    public List<HashtagService> listAll(String keyword) {
        if (keyword != null) {
            return repo.search(keyword);
        }
        return repo.findAll();
    }
     
    ...
}