export interface CanvasCoordinates {
    x: number;
    y: number
}

export interface Bubble {
    coordinates: CanvasCoordinates;
    radius: number;
    step: number;
}
