package com.vhugs.Repos;

import com.vhugs.Models.HashtagSearch;
import com.vhugs.Models.Reply;
import com.vhugs.Models.Post;
import org.springframework.data.repository.CrudRepository;

public interface HashtagRepository extends CrudRepository<Type, Long> {
     
 @Query("SELECT p FROM type p WHERE EXACT(rescource, emotional) LIKE %?1%")
public List<Hashtag> search(String keyword);
}