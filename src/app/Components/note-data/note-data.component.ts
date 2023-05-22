import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, OnInit,Inject} from '@angular/core';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteservicesService } from 'src/app/core/services/noteservices.service';

@Component({
  selector: 'app-note-data',
  templateUrl: './note-data.component.html',
  styleUrls: ['./note-data.component.css']
})
export class NoteDataComponent implements OnInit{
  heading!:string
  constructor(private fb:FormBuilder,private _noteService:NoteservicesService,@Inject(DIALOG_DATA) private datamodeForm:any){}
  noteGroup:FormGroup=this.fb.group({
    title:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    desc:new FormControl(null,[Validators.required,Validators.minLength(5)])
  })
  noteSubmit(data:FormGroup){
    console.log(data.value);
    
    if(data.valid){
      if(this.datamodeForm.mode==='add'){
      this._noteService.addnote(data.value).subscribe(res=>{
        console.log(res);
        // if(res.message==='success'){
        //   this._noteService.getnotes().subscribe(r=>console.log(r)  )
        // }
        
      })}
    }
  }
  ngOnInit(): void {
    this.heading=this.datamodeForm.mode
    if(this.datamodeForm.mode==='update'){
this.setUpdate()
    }
  }

  setUpdate(){
    console.log(this.datamodeForm.mode);
    
    this.noteGroup.patchValue(this.datamodeForm.note)
  }
}
