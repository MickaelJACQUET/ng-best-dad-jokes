import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { EvalServiceService } from '../eval-service.service';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [EvalServiceService]
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  post?: Post;
  poster?: Post;
  constructor(
    private route: ActivatedRoute,
    public evalService: EvalServiceService
    ) {}

  ngOnInit(): void {
    this.evalService.evalGet().subscribe((res) => {
      this.posts = res
      console.log(this.posts)
      this.post = this.posts.find((post) => post.slug === this.route.snapshot.params['slug']
        );
    });
    

  }
}
