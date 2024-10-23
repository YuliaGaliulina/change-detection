import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { BlockOnPushSignalComponent } from '../../blocks/block-onpush-signal/block-on-push-signal.component';
import { NgIf } from '@angular/common';
import { BlockDefaultSignalComponent } from '../../blocks/block-default-signal/block-default-signal.component';
import { HighlightAnimationService } from '../../highlight-animation.service';

@Component({
    selector: 'app-on-push-signal',
    standalone: true,
    imports: [
        NgIf,
        BlockOnPushSignalComponent,
        BlockDefaultSignalComponent
    ],
    templateUrl: './app-on-push-signal.component.html',
    styleUrl: './app-on-push-signal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppOnPushSignalComponent {
    constructor(
        private el: ElementRef,
        private highlightService: HighlightAnimationService
    ) {
    }

    highlightBlock() {
        const block = this.el.nativeElement.querySelector('.block');
        this.highlightService.highlightBlock(block);
    }
}
