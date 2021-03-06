package com.vhugs;

import com.vhugs.Models.Chat;
import com.vhugs.Models.Hashtag;
import com.vhugs.Models.Post;
import com.vhugs.Models.Reply;
import com.vhugs.Repos.ChatRepository;
import com.vhugs.Repos.HashtagRepository;
import com.vhugs.Repos.PostRepository;
import com.vhugs.Repos.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    private PostRepository postRepo;

    @Autowired
    private ReplyRepository replyRepo;

    @Autowired
    private HashtagRepository hashtagRepository;

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public void run(String... args) throws Exception {
        Reply firstReply = new Reply("Hang in there!");
        Reply secondReply = new Reply("Sending you hugs!");
        replyRepo.save(firstReply);
        replyRepo.save(secondReply);
      Hashtag tag1 = new Hashtag("#Help");
      Hashtag tag2 = new Hashtag("#Advice");
      Hashtag tag3 = new Hashtag("#INeedAHug");
      Hashtag tag4 = new Hashtag("#FreeHugs");
      Hashtag tag5 = new Hashtag("#Contact");
      Hashtag tag6 = new Hashtag("#INeedAnAdult");
      Hashtag tag7 = new Hashtag("#Coding");
      Hashtag tag8 = new Hashtag("#SpringBoard");
      hashtagRepository.save(tag1);
      hashtagRepository.save(tag2);
      hashtagRepository.save(tag3);
      hashtagRepository.save(tag4);
      hashtagRepository.save(tag5);
      hashtagRepository.save(tag6);
      hashtagRepository.save(tag7);
      hashtagRepository.save(tag8);

        Post firstPost = new Post("This bootcamp is hard!","The Bootcamp is really hard! I am struggling to learn TDD.",firstReply);
        Post secondPost = new Post("My car broke down today","I am not sure how I will get to work without a car! It is so expensive to fix.",secondReply);


//        firstPost.addHashtag(tag1);
        postRepo.save(firstPost);
        postRepo.save(secondPost);

      Chat chat1 = new Chat("Hello friends!","Mike");
      Chat chat2 = new Chat("Hello There mike! How are you?","Tina");

      chatRepository.save(chat1);
      chatRepository.save(chat2);
    }
}
