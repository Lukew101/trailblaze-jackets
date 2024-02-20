export function priceConverter(price) {
    const firstPart = price.substring(0, price.length - 2);
    const lastTwoDigits = price.substring(price.length - 2);
    const formattedPrice = `${firstPart},${lastTwoDigits}`;
    return formattedPrice;
}