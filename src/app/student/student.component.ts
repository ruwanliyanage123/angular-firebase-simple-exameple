import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService, private db: AngularFirestore) { }

  ngOnInit() {
    this.defaultData();
  }

  enterData(form: NgForm){
    let data = form.value;
    this.db.collection('student').add(data);
  }

  defaultData(form?: NgForm){
    if(form!=null)
    form.resetForm();
    this.service.student ={
      name: '',
      age : '',
      telephone: ''
    }
  }

}
