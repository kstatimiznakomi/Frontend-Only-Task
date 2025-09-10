export const polarToCartesian = (center: number, radius: number, angleDeg: number) => {
    const rad = (Math.PI / 180) * angleDeg;
    const x = center - radius * Math.cos(rad);
    const y = center - radius * Math.sin(rad);
    return {x, y};
}