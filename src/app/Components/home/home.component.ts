import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/core/services/noteservices.service';
import { NoteDataComponent } from '../note-data/note-data.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  notes:any[]=[]
  constructor(private _noteService:NoteservicesService,private dialog:MatDialog){}
  updateNote(){

  }
deleteNote(noteId:string){
this._noteService.deletenotes(noteId).subscribe(r=>{
  console.log(r);

  this.notes=this.notes.filter(note=>note!=noteId)
  
})
}
ngOnInit(): void {
  this._noteService.getnotes().subscribe(r=>{console.log(r)
    if(r.message=="success"){
  this.notes=r.Notes}
  });
}
  openDialog(mode:string,note?:any){
     this.dialog.open(NoteDataComponent, {
      height: '400px',
      width: '600px',
      data:{
        mode,
        note
      }
    });
  }


}
