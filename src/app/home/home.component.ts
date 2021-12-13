import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { EvalServiceService } from '../eval-service.service';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [EvalServiceService]
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = postsMock;

  constructor(
    public evalService: EvalServiceService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.evalService.evalGet().subscribe((res) => {
      this.posts = res
      console.log(this.posts)
    });
  }

  goToApplication(slug:any){
    this.router.navigate(['post/'+slug]);
  }
}
