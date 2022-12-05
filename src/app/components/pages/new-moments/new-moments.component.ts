import { Component, OnInit } from '@angular/core';

import { Moment } from './../../../Moment';
import { MomentService } from './../../../services/moment.service';
@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {

  btnText = "Compartilhar!";

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append("image", moment.image)
    }

    //TO DO

    //Enviar para o service
    await this.momentService.createMoment(formData).subscribe();
    //Exibir msg

    //redirect
  }

}
