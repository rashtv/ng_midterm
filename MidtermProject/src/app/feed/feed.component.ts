import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: Post[] = [];

  newPost: Post = { id: 0, title: '', body: '', likes: 0, comments: [] };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts()
  }

  likePost(postId: number) {
    this.postService.incrementLikeNumber(postId);
  }

  submitPost() {
    this.postService.addPost(this.newPost);
    this.newPost = {id: 0, title: '', body: '', likes: 0, comments: [] };
  }
}
