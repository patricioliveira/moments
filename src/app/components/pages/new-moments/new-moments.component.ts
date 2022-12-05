import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from './../../../Moment';
import { MomentService } from './../../../services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {

  btnText = "Compartilhar!";

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append("image", moment.image)
    }

    //Enviar para o service
    await this.momentService.createMoment(formData).subscribe();

    //Exibir msg
    this.messagesService.add('Seu momento foi compartilhado com sucesso!');

    //redirect
    this.router.navigate(['/']);


  }

}
