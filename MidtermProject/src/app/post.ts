import { Comment } from "./comment";

export class Post {
    id: number;
    title: string;
    body: string;
    likes: number;
    comments: Comment[];

    constructor(id: number, title: string = '', body: string = '', likes: number = 0, comments: Comment[] = []) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.likes = likes;
        this.comments = comments;
    }
}


