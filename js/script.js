const ex = parseInt(prompt("misal nömrəsini seçin (1,2,3): "));


// 1ci misal
if (ex === 1) {
    alert("Üçbucaq düzəltməyin mümkünlüyü yoxlanması üçün 3 tərəf daxil edin.")
    const a = parseInt(prompt("1ci tərəf: "));
    const b = parseInt(prompt("2ci tərəf: "));
    const c = parseInt(prompt("3cü tərəf: "));

    if ((a + b) < c || (a + c) < b || (b + c) < a) {
        console.log("mümkün deyil");
        alert("mümkün deyil");
    } else {
        console.log("mümkündür");
        alert("mümkündür");
    }
}

// 2ci misal
else if (ex == 2) {
    let day = parseInt(prompt("Həftənin gününün nömrəsini daxil edin:"));
    switch (day) {
        case 1:
            alert("Bazarertəsi");
            break;
        case 2:
            alert("Çərşənbə axşamı");
            break;
        case 3:
            alert("Çərşənbə");
            break;
        case 4:
            alert("Cümə axşamı");
            break;
        case 5:
            alert("Cümə");
            break;
        case 6:
            alert("Şənbə");
            break;
        case 7:
            alert("Bazar");
            break;
        default:
            alert("Həftənin 7 günü olur")
    }
}

// 3cü misal
else if (ex == 3) {

    let season = prompt("fəsil seçin (yaz, yay, qis, payiz): ");
    season = season.toLowerCase();

    if (season == "yaz") {
        alert("Mart, Aprel, May");
    } else if (season == "yay") {
        alert("Iyun, Iyul, Avqust");
    } else if (season == "payiz" || season == "payız") {
        alert("Sentyabr, Oktyabr, Noyabr");
    } else if (season == "qis" || season == "qış") {
        alert("Dekabr, Yanvar, Fevral");
    } else {
        alert("Fəsil adını düzgün daxil etiyinizdən əmin olun");
    }

}
