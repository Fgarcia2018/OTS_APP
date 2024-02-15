export const stringDateCurrent=()=>{
    let dateCurrent=new Date();
    let day=dateCurrent.toDateString().substring(8,10);
    let month=(dateCurrent.getMonth()+1).toString();
    let year=(dateCurrent.getFullYear()).toString();
    return year+'-'+convertNum(month)+'-'+convertNum(day);
}


const convertNum=(num)=>{
    return num.toString().length<2 ? '0'+num : num
}
