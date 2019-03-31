import {
    NgModule,
    Directive,
    ElementRef,
    HostListener,
    Input
} from "@angular/core";

@Directive({
    selector: "[NoDecimal]"
})
export class NoDecimal {
    constructor(private el: ElementRef) { }

    @Input() NoDecimal: boolean;

    @HostListener("keydown", ["$event"])
    onKeyDown(event) {
        let e = <KeyboardEvent>event;
        if (this.NoDecimal) {
            if (
                [8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)
            ) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if (
                (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
                (e.keyCode < 96 ||
                    e.keyCode > 105 ||
                    e.keyCode === 46 ||
                    e.keyCode === 110 ||
                    e.keyCode === 190)
            ) {
                e.preventDefault();
            }
        }
    }
}
@NgModule({
    declarations: [NoDecimal],
    exports: [NoDecimal]
})
export class NoDecimalModule { }