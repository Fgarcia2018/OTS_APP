export const stringDateCurrent=()=>{
    let dateCurrent=new Date();
    let day=dateCurrent.toDateString().substring(8,10);
    let month=(dateCurrent.getMonth()+1).toString();
    let year=(dateCurrent.getFullYear()).toString();
    return year+'-'+month+'-'+day;
}


