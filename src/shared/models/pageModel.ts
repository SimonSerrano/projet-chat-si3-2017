
import { MessageModel } from './MessageModel';
import { Component } from "@angular/core";

export class Page {
  static nbPage;
  static nbMax = 10;
  private PageNumber;
  private currentIndice;
  private messages: MessageModel[];

  constructor() {
    if(Page.nbPage==null) Page.nbPage = 0;
    this.currentIndice = Page.nbPage;
    Page.nbPage++;
  }
  
  /**
   * function canAdd equals 0 if PagerItem is full
   * a new one should be created
   */
  private canAdd() {
    console.log("PagerItemr debug : canAdd");
    return (Page.nbMax>this.currentIndice)?0:1;
  }

  addItem(messageModel: MessageModel){
    console.log("PagerItemr debug : addItem");
    if(!this.currentIndice) this.currentIndice=0;
    if(this.canAdd()>0){
      this.messages[this.currentIndice] = messageModel;
      return this.currentIndice++;
    }
     return -1;
  }
}