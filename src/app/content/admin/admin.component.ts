import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Submission } from 'src/app/models/submission.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminComponent implements OnInit {

  public dataSource: Submission[] = [
    {
      firstName: 'Janez',
      lastName: 'Novak',
      address: 'Slovenska cesta 32, 1000 Ljubljana',
      rating: 1,
      description: `Najbolj primeren sem za to delovno mesto zato, ker si že od nekdaj želim delati na vašem delovnem področju.
      Pravtako, imam na tem področju že veliko izkušenj, kar bo pripomoglo k večji uspešnosti pri opravljanju dela, ki ga ponujate.
      Prav tako, sem zelo deloven in ne bom potreboval dodatnega uvajanja za opravljanje dela na delovnem mestu, ki ga ponujate.`
    }
  ];

  public columnsToDisplay = ['firstName', 'lastName', 'address', 'rating'];

  public expandedSubmission: Submission | null;

  constructor() { }

  ngOnInit(): void {
  }

}
