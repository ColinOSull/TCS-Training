import { Component, OnInit } from '@angular/core';
import { PensionerService } from 'src/app/Services/pensioner.service';
import Pensioner from 'src/app/Entity/Pensioner';

@Component({
  selector: 'app-pensioner-form',
  templateUrl: './pensioner-form.component.html',
  styleUrls: ['./pensioner-form.component.css']
})
export class PensionerFormComponent implements OnInit {

  title = 'Fill out the form below';
  // to access the data of this variable in out html file use {{variable name}}
  public pensioner:  Pensioner={
    name:'',
    date_of_birth:'',
    pan:0,
    aadhaar: 0,
    salary_earned: 0,
    allowences: 0,
    self_family_pension: '',
    bank_detail: {
        bank_name: '',
        account_number: 0,
        public_or_private: ''}
      };

  save() {
    const observables = this.pensionerService.savePensioner(this.pensioner);
    observables.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }

  constructor(private pensionerService: PensionerService) { }

  ngOnInit(): void {
  }

}
