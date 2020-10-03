import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public createRoutineForm: FormGroup;
  public currentDate: any;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createRoutineForm = formBuilder.group({
      routineName: [],
      day: [],
      exerciseOne: [],
      setsOne: [],
      repsOne: [],
      exerciseTwo: [],
      setsTwo: [],
      repsTwo: [],
      exerciseThree: [],
      setsThree: [],
      repsThree: [],
      exerciseFour: [],
      setsFour: [],
      repsFour: [],

    });


  }

  async createRoutine() {
    const loading = await this.loadingCtrl.create();

    const routineName = this.createRoutineForm.value.routineName;
    const day = this.createRoutineForm.value.day;

    const exerciseOne = this.createRoutineForm.value.exerciseOne;
    const setsOne = this.createRoutineForm.value.setsOne;
    const repsOne = this.createRoutineForm.value.repsOne;

    const exerciseTwo = this.createRoutineForm.value.exerciseTwo;
    const setsTwo = this.createRoutineForm.value.setsTwo;
    const repsTwo = this.createRoutineForm.value.repsTwo;

    const exerciseThree = this.createRoutineForm.value.exerciseThree;
    const setsThree = this.createRoutineForm.value.setsThree;
    const repsThree = this.createRoutineForm.value.repsThree;

    const exerciseFour = this.createRoutineForm.value.exerciseFour;
    const setsFour = this.createRoutineForm.value.setsFour;
    const repsFour = this.createRoutineForm.value.repsFour;

    this.firestoreService
      .createRoutine(
        routineName, day,
        exerciseOne, setsOne, repsOne,
        exerciseTwo, setsTwo, repsTwo,
        exerciseThree, setsThree, repsThree,
        exerciseFour, setsFour, repsFour
      )
      .then(
        () => {
          loading.dismiss().then(() => {
            this.router.navigateByUrl('');
          });
        },
        error => {
          console.error(error);
        }
      );

    return await loading.present();
  }

  ngOnInit() {
    this.currentDate = new Date();

  }

}
