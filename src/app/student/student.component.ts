import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService, private db: AngularFirestore) { }

  ngOnInit() {
  }

}
