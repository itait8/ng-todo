import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _mock: ITodo[] = [
    {
      id: 1,
      Title: 'White-throated robin',
      description: 'Irania gutteralis',
      isCompleted: false,
      isArchived: false,
      endDate: '12/20/2023',
      selected: true,
    },
    {
      id: 2,
      Title: 'Vulture, oriental white-backed',
      description: 'Gyps bengalensis',
      isCompleted: false,
      isArchived: false,
      endDate: '12/16/2023',
      selected: false,
    },
    {
      id: 3,
      Title: 'Dark-winged trumpeter',
      description: 'Psophia viridis',
      isCompleted: false,
      isArchived: true,
      endDate: '6/26/2023',
      selected: false,
    },
    {
      id: 4,
      Title: 'Cormorant, neotropic',
      description: 'Phalacrocorax brasilianus',
      isCompleted: false,
      isArchived: true,
      endDate: '6/7/2023',
      selected: false,
    },
    {
      id: 5,
      Title: 'Bustard, kori',
      description: 'Choriotis kori',
      isCompleted: false,
      isArchived: true,
      endDate: '12/10/2023',
      selected: false,
    },
    {
      id: 6,
      Title: 'Porcupine, crested',
      description: 'Hystrix cristata',
      isCompleted: false,
      isArchived: true,
      endDate: '3/26/2024',
      selected: false,
    },
    {
      id: 7,
      Title: 'Secretary bird',
      description: 'Sagittarius serpentarius',
      isCompleted: false,
      isArchived: false,
      endDate: '4/26/2024',
      selected: false,
    },
    {
      id: 8,
      Title: 'Stork, white-necked',
      description: 'Ciconia episcopus',
      isCompleted: false,
      isArchived: false,
      endDate: '12/2/2023',
      selected: false,
    },
    {
      id: 9,
      Title: 'Spotted wood sandpiper',
      description: 'Tringa glareola',
      isCompleted: false,
      isArchived: true,
      endDate: '9/4/2023',
      selected: false,
    },
    {
      id: 10,
      Title: "Squirrel, smith's bush",
      description: 'Paraxerus cepapi',
      isCompleted: false,
      isArchived: true,
      endDate: '10/28/2023',
      selected: false,
    },
    {
      id: 11,
      Title: 'Starling, red-shouldered glossy',
      description: 'Lamprotornis nitens',
      isCompleted: false,
      isArchived: true,
      endDate: '1/8/2024',
      selected: false,
    },
    {
      id: 12,
      Title: 'Rufous tree pie',
      description: 'Dendrocitta vagabunda',
      isCompleted: false,
      isArchived: true,
      endDate: '3/17/2024',
      selected: false,
    },
    {
      id: 13,
      Title: 'Masked booby',
      description: 'Sula dactylatra',
      isCompleted: false,
      isArchived: false,
      endDate: '7/6/2023',
      selected: false,
    },
    {
      id: 14,
      Title: 'Eastern boa constrictor',
      description: 'Acrantophis madagascariensis',
      isCompleted: false,
      isArchived: true,
      endDate: '11/22/2023',
      selected: false,
    },
    {
      id: 15,
      Title: "Bennett's wallaby",
      description: 'Macropus rufogriseus',
      isCompleted: false,
      isArchived: false,
      endDate: '11/28/2023',
      selected: false,
    },
    {
      id: 16,
      Title: 'Golden-mantled ground squirrel',
      description: 'Spermophilus lateralis',
      isCompleted: false,
      isArchived: false,
      endDate: '8/25/2023',
      selected: false,
    },
    {
      id: 17,
      Title: 'Australian masked owl',
      description: 'Tyto novaehollandiae',
      isCompleted: false,
      isArchived: true,
      endDate: '3/24/2024',
      selected: false,
    },
    {
      id: 18,
      Title: 'Banded mongoose',
      description: 'Mungos mungo',
      isCompleted: false,
      isArchived: false,
      endDate: '2/5/2024',
      selected: false,
    },
    {
      id: 19,
      Title: 'Kangaroo, red',
      description: 'Macropus rufus',
      isCompleted: false,
      isArchived: true,
      endDate: '7/14/2023',
      selected: false,
    },
    {
      id: 20,
      Title: 'Squirrel, pine',
      description: 'Tamiasciurus hudsonicus',
      isCompleted: false,
      isArchived: true,
      endDate: '10/22/2023',
      selected: false,
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._mock
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._mock[0]
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo): void {
    this._singleTodoSubject.next(todo);
  }

  public getNextUnarchived(): void {
    for (var i = 0; i < this._mock.length; i++) {
      if (this._mock[i].isArchived == false) {
        this.setSelectedTodo(this._mock[i]);
        return;
      }
    }
  }
}
