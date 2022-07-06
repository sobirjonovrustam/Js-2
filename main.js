var onedollor = 9433.34;
var oneyevro =  10354.03 ;

var dollor = prompt("Necha dollor pulingiz bor");
var yevro = prompt("Necha yevro pulingiz bor");
var summadollor = (dollor*onedollor + yevro*oneyevro);

if ((dollor*onedollor >= 7075005 && yevro*oneyevro >= 1242483) || summadollor >= 8317488) {
    alert("Oq yo'l, Alisher!");
}else {
    alert("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
};

console.log(summadollor);