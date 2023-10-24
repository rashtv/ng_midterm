export class Comment {
    id: number;
    name: string;
    text: string;
    likes: number;

    constructor(id: number, name: string = '', text: string = '', likes: number = 0) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.likes = likes;
    }
}
