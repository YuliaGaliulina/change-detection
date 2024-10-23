import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    signal,
    WritableSignal
} from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { HighlightAnimationService } from '../../highlight-animation.service';

@Component({
    selector: 'app-block-onpush-signal',
    standalone: true,
    imports: [
        NgIf,
        NgForOf,
        AsyncPipe,
    ],
    templateUrl: './block-on-push-signal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOnPushSignalComponent {
    @Input() depth = 1;
    count: WritableSignal<number | null> = signal(null);

    constructor(
        private el: ElementRef,
        private highlightService: HighlightAnimationService
    ) {
    }

    highlightBlock() {
        const block = this.el.nativeElement.querySelector('.block');
        this.highlightService.highlightBlock(block);
    }

    triggerInterval() {
        setInterval(() => {
            this.count.update(value => value === null ? 0 : value + 1);
        }, 1500);
    }
}
