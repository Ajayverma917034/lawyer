export const format24hour = (time24) => {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');

    let hours12 = parseInt(hours, 10);
    const amPm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12 || 12; // Handle midnight (0 hours) as 12

    return `${hours12}:${minutes} ${amPm}`;
}