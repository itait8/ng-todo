import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _mock: ITodo[] = [
    {
      Title: 'White-throated robin',
      description: 'Irania gutteralis',
      isCompleted: true,
      isArchived: false,
      endDate: '12/20/2023',
    },
    {
      Title: 'Vulture, oriental white-backed',
      description: 'Gyps bengalensis',
      isCompleted: true,
      isArchived: false,
      endDate: '12/16/2023',
    },
    {
      Title: 'Dark-winged trumpeter',
      description: 'Psophia viridis',
      isCompleted: true,
      isArchived: true,
      endDate: '6/26/2023',
    },
    {
      Title: 'Cormorant, neotropic',
      description: 'Phalacrocorax brasilianus',
      isCompleted: false,
      isArchived: true,
      endDate: '6/7/2023',
    },
    {
      Title: 'Bustard, kori',
      description: 'Choriotis kori',
      isCompleted: true,
      isArchived: true,
      endDate: '12/10/2023',
    },
    {
      Title: 'Porcupine, crested',
      description: 'Hystrix cristata',
      isCompleted: false,
      isArchived: true,
      endDate: '3/26/2024',
    },
    {
      Title: 'Secretary bird',
      description: 'Sagittarius serpentarius',
      isCompleted: true,
      isArchived: false,
      endDate: '4/26/2024',
    },
    {
      Title: 'Stork, white-necked',
      description: 'Ciconia episcopus',
      isCompleted: true,
      isArchived: false,
      endDate: '12/2/2023',
    },
    {
      Title: 'Spotted wood sandpiper',
      description: 'Tringa glareola',
      isCompleted: true,
      isArchived: true,
      endDate: '9/4/2023',
    },
    {
      Title: "Squirrel, smith's bush",
      description: 'Paraxerus cepapi',
      isCompleted: false,
      isArchived: true,
      endDate: '10/28/2023',
    },
    {
      Title: 'Starling, red-shouldered glossy',
      description: 'Lamprotornis nitens',
      isCompleted: false,
      isArchived: true,
      endDate: '1/8/2024',
    },
    {
      Title: 'Rufous tree pie',
      description: 'Dendrocitta vagabunda',
      isCompleted: true,
      isArchived: true,
      endDate: '3/17/2024',
    },
    {
      Title: 'Masked booby',
      description: 'Sula dactylatra',
      isCompleted: false,
      isArchived: false,
      endDate: '7/6/2023',
    },
    {
      Title: 'Eastern boa constrictor',
      description: 'Acrantophis madagascariensis',
      isCompleted: true,
      isArchived: true,
      endDate: '11/22/2023',
    },
    {
      Title: "Bennett's wallaby",
      description: 'Macropus rufogriseus',
      isCompleted: false,
      isArchived: false,
      endDate: '11/28/2023',
    },
    {
      Title: 'Golden-mantled ground squirrel',
      description: 'Spermophilus lateralis',
      isCompleted: true,
      isArchived: false,
      endDate: '8/25/2023',
    },
    {
      Title: 'Australian masked owl',
      description: 'Tyto novaehollandiae',
      isCompleted: true,
      isArchived: true,
      endDate: '3/24/2024',
    },
    {
      Title: 'Banded mongoose',
      description: 'Mungos mungo',
      isCompleted: true,
      isArchived: false,
      endDate: '2/5/2024',
    },
    {
      Title: 'Kangaroo, red',
      description: 'Macropus rufus',
      isCompleted: true,
      isArchived: true,
      endDate: '7/14/2023',
    },
    {
      Title: 'Squirrel, pine',
      description: 'Tamiasciurus hudsonicus',
      isCompleted: true,
      isArchived: true,
      endDate: '10/22/2023',
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._mock
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
