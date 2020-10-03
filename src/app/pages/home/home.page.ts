import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Routine } from '../../models/routine.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public currentDate: any;

  public routineList;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    
  ) {}

  ngOnInit() {
    this.routineList = this.firestoreService.getRoutineList().valueChanges();
    this.currentDate =  new Date();
  }

 
}
