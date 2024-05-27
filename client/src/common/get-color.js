
const colorMapping = {
    'low': 'text-green',
    'medium': 'text-red',
    'high': 'text-red'
}

export const findColor = (color) => {
    color = color.toLowerCase();
    return colorMapping[color]
}