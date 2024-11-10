let dt = new Date();
let year = dt.getFullYear();
let month = ('0' + (dt.getMonth() + 1)).slice(-2);
let day = ('0' + dt.getDate()).slice(-2);
let formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate); 