export class Position {

    constructor(public x: number, public y: number) {
    }

    static fromMouseEvent(event: MouseEvent, boundingRectangle: DOMRect): Position {
        return new Position(
            event.clientX - boundingRectangle.left,
            event.clientY - boundingRectangle.top,
        );
    }
}
