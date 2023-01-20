import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RestoService } from '../services/resto.service'
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })
  constructor(private resto: RestoService) { }
  
  ngOnInit(): void { }
 
  alert: boolean = false
  alert2:boolean=true
  quantity:number=0
  price:number=0
  // para:string=''

  // @ViewChild("dobInput") dateOfBirth : ElementRef | undefined;
  // @ViewChild('ageInput') age : ElementRef;
  // @ViewChild ('login') demoComp : ElementRef;

  calculateAge(){
    // var birthYear = new Date(this.dateOfBirth.nativeElement.value ).getFullYear();
    // var currentYear = new Date().getFullYear();
    // var Age = currentYear - birthYear;
    // this.age.nativeElement.value = Age;
  // console.log(this.dateOfBirth);
  // console.log(this.age)
  }

  data=[
    {id:1, name:"vinay",age:25, status:"Available", presenty:"Present"},
    {id:2, name:"vijay",age:24, status:"Unavailable", presenty:"Absent"},
    {id:3, name:"ajay",age:23, status:"Unavailable", presenty:"Absent"},
    {id:4, name:"sujay",age:22, status:"Available", presenty:"Present"}
  ]

  searchValue: string = ''
  changeSearchValue(eventData:Event) {
// console.log((<HTMLInputElement>eventData.target).value);
this.searchValue=(<HTMLInputElement>eventData.target).value;
  }

  collectResto() {
    // console.warn(this.addResto.value);
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      this.alert = true
    })
    this.addResto.reset({})
  }
  closeAlert() {
    this.alert = false
  }
  closeAlert2(){
    this.alert2= false
  }

  sayhello(inputEl: HTMLInputElement){
    alert('hello'+ inputEl.value)
  }
}
