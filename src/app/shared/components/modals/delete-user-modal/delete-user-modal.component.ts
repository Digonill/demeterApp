import { Component, OnInit, ViewChild, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {
  @ViewChild('deleteUserModal') public deleteUserModal: any;
  @Input() recebeItem;
  @Output() resposta = new EventEmitter();

  recebeTitulo = 'Curso de Angular 7/8';
  recebePergunta='Deseja realmente deletar este usuário?';
 
  constructor() { }

  onClose(event:any){
    console.log(event);
  }

  ngOnInit(): void {

  }

  show (){
    this.deleteUserModal.show();
  }

  delete(){
    this.resposta.emit(this.recebeItem);
    this.deleteUserModal.hide();

  }
}
