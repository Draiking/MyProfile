import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalComponent} from './modal/modal.component';




@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        ModalComponent
    ],
    declarations: [ModalComponent],
    providers: [],
})
export class ModalModule {
}
