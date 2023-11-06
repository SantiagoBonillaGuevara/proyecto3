import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostBinding('style.display') display = 'block';
  constructor(private router: Router){
  }
  ngOnInit(): void {
  }
  irArte(){
    this.display = 'none';
    this.router.navigate(['/arte'])
  }
  irMusica(){
    this.display = 'none';
    this.router.navigate(['/musica'])
  }
  irDeporte(){
    this.display = 'none';
    this.router.navigate(['/deporte'])
  }
}
