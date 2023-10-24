import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostLikedPost: Post | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.mostLikedPost = this.postService.getMostLikedPost();
  }

  likePost(postId: number) {
    this.postService.incrementLikeNumber(postId);
  }
}
