import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  // Funzione per inviare email
  sendEmail(event: any): void {
    // Sostituisci con i tuoi ID ottenuti da EmailJS
    const serviceID = 'service_2rddhyy';
    const templateID = 'template_c8jfh5r';
    const userID = 'GeboFbKuGIf_ciFgu';  // Public key
    
    // Invia l'email tramite EmailJS
    emailjs.sendForm(serviceID, templateID, event.target, userID)
      .then((result) => {
        console.log('Email inviata con successo!', result.text);
        alert('Messaggio inviato!');
        event.target.reset();  // Reset del form
      }, (error) => {
        console.log('Errore nell\'invio dell\'email:', error.text);
        alert('Errore durante l\'invio!');
      });
  }
}
