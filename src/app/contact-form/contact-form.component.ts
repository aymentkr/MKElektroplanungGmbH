import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  modalRef: NgbModalRef | undefined;
  FormData: FormGroup;

  constructor(private modalService: NgbModal, private builder: FormBuilder, private contact: ContactService) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      anrede: new FormControl('Herr', Validators.required),
      name: new FormControl('', Validators.required),
      strasse: new FormControl('', Validators.required),
      plzOrt: new FormControl('', Validators.required),
      telefon: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mitteilung: new FormControl('', Validators.required)
    });
  }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

  closeModal() {
    this.modalRef?.close();
  }

  onSubmit() {
    if (this.FormData.valid) {
      console.log(this.FormData.value);
      this.contact.PostMessage(this.FormData.value).subscribe(
        response => {
          location.href = 'https://mailthis.to/confirm';
          console.log(response);
        },
        error => {
          console.warn(error.responseText);
          console.log({ error });
        }
      );
    } else {
      // Handle form validation errors
      this.FormData.markAllAsTouched();
    }
  }
}
