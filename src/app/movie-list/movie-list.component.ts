import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies = [
    { title: "The Godfather [Film Series]", date: null },
 { title: "The Shawshank Redemption", date: "1994" },
 { title: "Gone With the Wind", date: "1939" },
 { title: "Casablanca", date: "1942" },
 { title: "It's a Wonderful Life", date: "1946" },
 { title: "Schindler's List", date: "1993" },
 { title: "Star Wars [Film Series]", date: null },
 { title: "Rear Window", date: "1954" }, 
{ title: "Citizen Kane", date: "1941" },
 { title: "To Kill a Mockingbird", date: "1962" }
];
showMovies = true;
}
