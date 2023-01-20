import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



hotels=[
  {name:'royal plaza' , address:'sectore-10' , stars:'3 stars' , dp:"../../../assets/car 5.png"},
  {name:'canon plaza' , address:'sectore-20' , stars:'5 stars' , dp:'../../../assets/car 5.png'},
  {name:'hritage plaza' , address:'sectore-30' , stars:'2 stars' , dp:'../../../assets/car 5.png'},
  {name:'kings plaza' , address:'sectore-40' , stars:'4 stars' , dp:'../../../assets/car 5.png'},
  {name:'arebic plaza' , address:'sectore-50' , stars:'4 stars' , dp:'../../../assets/car 5.png'},
  {name:'bobmbay dhaba' , address:'sectore-60' , stars:'5 stars' , dp:'../../../assets/car 5.png'},
  {name:'raigad inn' , address:'sectore-70' , stars:'4 stars' , dp:'../../../assets/car 5.png'},
  {name:'krushna hotel' , address:'sectore-80' , stars:'1 stars' , dp:'../../../assets/car 5.png'},
]

getAllHotels(){
  return this.hotels.length
}
getOneStarHotel(){
  return this.hotels.filter(hotels =>hotels.stars === '1 stars').length
}
getTwoStarHotel(){
  return this.hotels.filter(hotels => hotels.stars === '2 stars').length
}
getThreeStarHotel(){
  return this.hotels.filter(hotels => hotels.stars === '3 stars').length
}
getFourStarHotel(){
  return this.hotels.filter(hotels => hotels.stars === '4 stars').length
}
getFiveStarHotel(){
  return this.hotels.filter(hotels => hotels.stars === '5 stars').length
}
}
