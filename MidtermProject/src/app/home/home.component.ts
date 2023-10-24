import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostLikedPost: Post | null = null;
  users: User[] = []

  constructor(private postService: PostService, private userService: UserService) {}

  ngOnInit(): void {
    this.mostLikedPost = this.postService.getMostLikedPost();

    this.users = this.userService.getAllUsers();
  }

  likePost(postId: number) {
    this.postService.incrementLikeNumber(postId);
  }
}
