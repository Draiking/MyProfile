import {
    AfterViewInit,
    Component, ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

    @ViewChild('bodyElement') body;
    @ViewChild('myMail') myMail;

    @Output() closeModal = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.body = document.body;
        this.body.style.overflow = 'hidden';
    }

    onCloseModal() {
        this.closeModal.emit();
        this.body.style.overflow = 'visible';
    }

    copyText(el) {
        const text = el.outerText;
        this.copyTextToClipboard(text);
    }

    copyTextToClipboard(text) {
        const txtArea = document.createElement("textarea");
        txtArea.id = 'txt';
        txtArea.style.position = 'fixed';
        txtArea.style.top = '0';
        txtArea.style.left = '0';
        txtArea.style.opacity = '0';
        txtArea.value = text;
        document.body.appendChild(txtArea);
        txtArea.select();
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            if (successful) {
                return true;
            }
        } catch (err) {
            console.log('Oops, unable to copy');
        } finally {
            document.body.removeChild(txtArea);
        }
        return false;
    }

}
