import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  name : string | null = '';
  
  constructor(private route: ActivatedRoute) { }
  ngOnInit(){
    this.route.params.subscribe((params) =>{
      this.name = params['name'];
    })
  }
}
