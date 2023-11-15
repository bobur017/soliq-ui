
/**
 * Created by Sherlock on 05.05.2022.
 */

export const beautifyTime = time => {
    if (time < 10) {
        return '0' + time;
    }
    return time;
};

export const getFileName = () => {
    const today = new Date();
    const dd = beautifyTime(today.getDate());
    const mm = beautifyTime(today.getMonth() + 1); // January is 0!
    const yyyy = today.getFullYear();
    const hours = beautifyTime(today.getHours());
    const minutes = beautifyTime(today.getMinutes());
    const seconds = beautifyTime(today.getSeconds());

    return dd + '-' + mm + '-' + yyyy + '_' + hours + '-' + minutes + '-' + seconds + '.pdf';
};

export const downloadFile = (fileURL) => {
    // Embed the PDF into the HTML page and show it to the user
    const link = document.createElement('a');
    link.innerHTML = 'Download PDF file';
    link.download = getFileName();
    link.href = fileURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const getOptionsYearList = () => {
    const yearList = [];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
        yearList.push(currentYear--);
    }

    return yearList;
};
export const removeItem=(arr, value)=> {
    console.log(arr)
    console.log(value)
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    console.log(arr)
    return arr;
}
