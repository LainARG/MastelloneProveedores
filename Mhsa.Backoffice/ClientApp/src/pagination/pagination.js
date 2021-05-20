


export const pagination = (data, totalRows, rowsPerPage ) => {
    let finalData = [];
    let innerData = [];
    let dataCount = 0;

    for (let i = 0; i < totalRows; i++) {
        dataCount++;
        innerData.push(data[i]);
        if (dataCount >= rowsPerPage || i >= totalRows-1) {
            dataCount = 0;
            finalData.push(innerData);
            innerData = [];
        }
       
       
    }

    return finalData;
    
}

export default pagination;