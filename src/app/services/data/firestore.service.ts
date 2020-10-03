import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Routine } from '../../models/routine.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createRoutine(
    routineName: string,
    day: string,
    exerciseOne: string,
    setsOne: string,
    repsOne: string,
    exerciseTwo: string,
    setsTwo: string,
    repsTwo: string,
    exerciseThree: string, 
    setsThree: string,
    repsThree: string,
    exerciseFour: string, 
    setsFour: string,
    repsFour: string,
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`routineList/${id}`).set({
      id,
      routineName, 
      day, 
      exerciseOne, 
      setsOne, 
      repsOne, 
      exerciseTwo, 
      setsTwo, 
      repsTwo,
      exerciseThree, 
      setsThree,
      repsThree,
      exerciseFour, 
      setsFour,
      repsFour,
    });
  }

  getRoutineList(): AngularFirestoreCollection<Routine> {
    return this.firestore.collection(`routineList`);
  }

  getRoutineDetail(routineId: string): AngularFirestoreDocument<Routine> {
    return this.firestore.collection(`routineList`).doc(routineId);
  }

  deleteRoutine(routineId: string): Promise<void> {
    return this.firestore.doc(`routineList/${routineId}`).delete();
  }

}

