import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../services/resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
editResto: any
alert:boolean =false
  constructor(private router : ActivatedRoute , private resto : RestoService, public fb: FormBuilder) { }
// salary:any=40
// displaysalary:any='';
  ngOnInit(): void {
    this.editResto = this.fb.group({
      name:[''],
      email:[''],
      address:['']
    })
    console.warn(this.router.snapshot.params['id'])
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result : any)=>{
      // console.warn(result)


      // this.editResto=new FormGroup({
      //   name:new FormControl(result.name),
      //   email:new FormControl(result['email']),
      //   address:new FormControl(result['address'])
      // })
      this.editResto = this.fb.group({
        name:[result.name],
        email:[result['email']],
        address:[result['address']]
      })
    })
  }
  updateRestoform(){    
    console.warn( "item" , this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value).subscribe((result)=>{
console.warn("result" , result);
this.alert=true
    })
  }
  // getData(salary:any){
  //   console.warn(salary);
  //   this.displaysalary=salary
  // }
  closeAlert(){
    this.alert=false
  }
}
