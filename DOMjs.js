//menampilkan waktu di web
document.getElementById("website-header").innerHTML = `Today's actual Date: ${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`

function ganjilGenap() {
    var platNum = document.getElementById("plat").value;
    var userName = document.getElementById("namauser").value;
    var todayDate = new Date().getDate()
    //untuk panjang data  dan urutan data di database.id dan database.idCity harus sinkron
    var database = 
    {
        oddRoute: 'Jalan Sudirman, Jalan Slipi Raya, Jalan Daan Mogot, Jalan Sultan Iskandar Muda',
        evenRoute: 'Jalan KH Ahmad Dahlan, Jalan RS Fatmawati, Jalan Pal Putih, Jalan Palmerah',
        id: ['B', 'BE', 'D', 'F', 'R', 'AD', 'AE', 'N', 'L'],
        idCity: ['Greater Jakarta', 'Lampung Region', 'Bandung Region', 'Bogor Region', 'Semarang City', 'Solo City', 'Madiun Region', 'Malang Region', 'Surabaya City']

    }
    if (platNum === "" || userName === "") {
        alert('Please input your name along with your vehicle identity number (plat nomor)')
        return
    }
    if (platNum.length >= 5 && userName.length >= 5) {
        let plat = ''
        let identificator = ''
        let name = ''
        //filtering number di input
        for (let i = 0; i < platNum.length; i++) {
            if (String(Number(platNum[i])) !== "NaN") {
                plat+=platNum[i]
            }
        }
        //filtering dua huruf depan sebagai identifikator plat
        for (let i = 0; i < 2; i++) {
            if (String(Number(platNum[i])) === "NaN" && platNum[i] !== ' ') {
                identificator+=platNum[i].toUpperCase()
            }
        }
        //filtering username input
        for (let i = 0; i < userName.length; i++) {
            if (i === 0 || userName[i-1] === ' ') {
                name+=userName[i].toUpperCase()
            }
            else {
                name+=userName[i].toLowerCase()
            }
        }
        //pengecekan apakah plat nomor valid
        if (plat === '' || identificator.length === 0) {
            alert('your vehicle ID number is invalid!')
            return
        }
        else {
            let temp = `City with ${identificator} plat number`
            for (let j = 0; j < database.id.length; j++) {
                if (identificator === database.id[j]) {
                    temp = database.idCity[j]
                    break
                }
            }
            if (Number(plat%2) === 0 && todayDate%2 === 0) {
                document.getElementById("result").innerHTML = `Dear ${name}! You are from ${temp}, enjoy your trip to Jakarta today!`
            }
            if (Number(plat%2) !== 0 && todayDate%2 !== 0) {
                document.getElementById("result").innerHTML = `Dear ${name}! You are from ${temp}, enjoy your trip to Jakarta today!`
            }
            else {
                if (Number(plat%2) !== 0 && todayDate%2 === 0) {
                    document.getElementById("result").innerHTML = `Dear ${name}! You are from ${temp}. Unfortunately, you have odd vehicle ID number therefore, please avoid ${database.evenRoute}. STAY SAFE!`
                }
                if (Number(plat%2) === 0 && todayDate%2 !== 0) {
                    document.getElementById("result").innerHTML = `Dear ${name}! You are from ${temp}. Unfortunately, you have even vehicle ID number therefore, please avoid ${database.evenRoute}. STAY SAFE!`
                }
            }
        }
    }
    else {
        alert('ERROR! Minimum each input have to be more than 5 characters')
        return
    }
}
//Menampilkan hasil function diatas pada saat klik button di website
document.getElementById("button").onclick = ganjilGenap();