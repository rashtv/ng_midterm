import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Body 1',
      likes: 123,
      comments: [
        {
          id: 1,
          name: 'Ilyas',
          text: 'Nice',
          likes: 12,
        }
      ]
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Body 2',
      likes: 4,
      comments: [
        {
          id: 1,
          name: 'Alexander',
          text: 'Nice',
          likes: 123,
        }
      ]
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Body 3',
      likes: 4,
      comments: [
        {
          id: 1,
          name: 'Yerassyl',
          text: 'Nice',
          likes: 1234,
        }
      ]
    },
  ]
  constructor() { }

  getAllPosts() {
    return this.posts;
  }

  incrementLikeNumber(postId: number) {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      post.likes++;
    }
  }

  addPost(newPost: Post) {
    newPost.id = this.posts.length + 1;
    this.posts.push(newPost);
  }

  getMostLikedPost(): Post | null {
    if (this.posts.length == 0) {
      return null      
    }
    let mostLikedPost = this.posts[0];

    for(const post of this.posts) {
      if(post.likes > mostLikedPost.likes) {
        mostLikedPost = post;
      }
    }

    return mostLikedPost;
  }
}
