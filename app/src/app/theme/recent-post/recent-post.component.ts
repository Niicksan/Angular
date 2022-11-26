import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/services/post.service';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {

  posts: IPost[] | null = null;
  errorFetchingData = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      }
    })
  }
}