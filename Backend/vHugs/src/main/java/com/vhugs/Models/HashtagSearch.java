package com.vhugs.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class HashtagSearch {

 @ElementCollection
 private List<String> tags = new ArrayList<>();
    
    }

@Query("SELECT FROM HASHTAG s.tags = LOWER(:tag)")
List<Hashtag> retrieveByType(@Param("Rescource") String rescource, @Param("Emotional") 
String emotional, @Param("Monetary") String monetary);

