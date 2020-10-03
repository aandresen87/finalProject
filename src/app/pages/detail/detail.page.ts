import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine } from '../../models/routine.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public routine: Observable<Routine>;
  routineId: string;
  public currentDate: any;


  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router,
    //private routineId: string  //added to access in deleteRoutine
  ) { }

  ngOnInit() {
    //const routineId: string = this.route.snapshot.paramMap.get('id');
    this.routineId = this.route.snapshot.paramMap.get('id');

    this.routine = this.firestoreService.getRoutineDetail(this.routineId).valueChanges();
    this.currentDate =  new Date();

  }

  async deleteRoutine() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete the routine?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.firestoreService.deleteRoutine(this.routineId).then(() => {
              this.router.navigateByUrl('');
            });
          },
        },
      ],
    });
  
    await alert.present();
  }
  

}
