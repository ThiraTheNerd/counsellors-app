import { Component, OnInit } from '@angular/core';
import { CounsellorServiceService } from '../counsellor/counsellor-service.service';
import { Medication } from '../shared/user.model';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  prescribeMedicine = new Medication()

  constructor(private prescribe: CounsellorServiceService) { }

  ngOnInit(): void {
  }


  prescribeMedics() {
    this.prescribe.prescribeMedic(this.prescribeMedicine).subscribe(data => {
      console.log(data)
    })
  }

}
