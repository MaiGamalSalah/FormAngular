import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent {

  noteForm 
 
 

  //profileData
  adressData
  constructor(private builder:FormBuilder,private noteservice:NotesService) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.noteForm = this.builder.group({
      title: ['', [Validators.required]],   
      content: ['', [Validators.required]],
      category: ['', [Validators.required]], 
      priority: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      
    });
  }
  
  onSubmit() {
    if (this.noteForm.valid) {
     // console.log(this.noteForm);
      //console.log(this.profileData.value);
      this.noteservice.ctreateNotes(this.noteForm.value).subscribe((res)=>{
        console.log('Response',res);
      },(err)=>{
        console.log('Error',err);
      }

    );


    

    }
   
  }
  updatenotes() {
    this.noteForm.patchValue({
      title: 'John',
      content: 'Doe',
      category: 'Doe',
      priority: 'Doe',
      tags: 'Doe',
    });
  }


  get valid(){
    return this.noteForm.controls;
  }
}
