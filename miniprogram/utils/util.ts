export const formatTime = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return (
        [year, month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':')
    )
}

const formatNumber = (n: number) => {
    const s = n.toString()
    return s[1] ? s : '0' + s
}


export function weekString(weekNumber: string): string {
    switch (weekNumber) {
        case '1':
            return '星期一';
        case '2':
            return '星期二';
        case '3':
            return '星期三';
        case '4':
            return '星期四';
        case '5':
            return '星期五';
        case '6':
            return '星期六';
        case '7':
            return '星期日';
        default:
            return "Enter a value between 1 - 7";
    }
}