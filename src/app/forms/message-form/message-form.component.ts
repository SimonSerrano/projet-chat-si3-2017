import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModel } from "../../../shared/models/MessageModel";
import {ChanelModel} from "../../../shared/models/ChannelModel";
import {ChannelService} from "../../../shared/services/channel/channel.service";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {
  public message: MessageModel;



  constructor(private messageService: MessageService) {
    if (!ChannelService.selectedChannel) {
      ChannelService.selectedChannel = new ChanelModel(1);
    }
    this.message = new MessageModel(1, "Hello", "moi");
  }
  ngOnInit() {  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    console.log("Click!");
    console.log("currentChannel:" + ChannelService.selectedChannel);
    const route = ChannelService.selectedChannel.id + "/messages";
    this.messageService.sendMessage2(route, this.message);
    this.messageService.getMessages(route);
  }
}
