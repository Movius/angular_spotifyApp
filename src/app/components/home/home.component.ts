import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums: any[] = [];
  loading: boolean = true;
  error: boolean;
  errorMsj: string;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.albums = data;
      this.loading = false;
      this.error = false;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      this.errorMsj = errorService.error.error.message;
    });
  }

}
