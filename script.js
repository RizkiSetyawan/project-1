var btn = document.querySelector("button.btn.btn-primary.mb-2")

var tbody = document.querySelector('tbody')

btn.addEventListener('click', function () {
  var tr = document.createElement('tr')
  var td = document.createElement('td')
  var td2 = document.createElement('td')
  var td3 = document.createElement('td')
  var td4 = document.createElement('td')

  var x = document.getElementsByClassName('form-control')[0].value;
  var text = document.createTextNode(x)

  var y = document.getElementsByClassName('form-control')[1].value;
  var text2 = document.createTextNode(y)

  var z = document.getElementsByClassName("custom-select")[0].value;
  var text3 = document.createTextNode(z)

  var foo = new Date();

  var tahun = foo.getFullYear();
  var bulan = foo.getMonth();
  var tanggal = foo.getDate();
  var hari = foo.getDay();
  var jam = foo.getHours();
  var menit = foo.getMinutes();
  // var detik = foo.getSeconds();

  var namaHari;
  var namaBulan;

  switch (hari) {
    case 0: var namaHari = "Minggu"; break;
    case 1: var namaHari = "Senin"; break;
    case 2: var namaHari = "Selasa"; break;
    case 3: var namaHari = "Rabu"; break;
    case 4: var namaHari = "Kamis"; break;
    case 5: var namaHari = "Jumat"; break;
    case 6: var namaHari = "Sabtu"; break;
  }

  switch (bulan) {
    case 0: var namaBulan = "Januari"; break;
    case 1: var namaBulan = "Februari"; break;
    case 2: var namaBulan = "Maret"; break;
    case 3: var namaBulan = "April"; break;
    case 4: var namaBulan = "Mei"; break;
    case 5: var namaBulan = "Juni"; break;
    case 6: var namaBulan = "Juli"; break;
    case 7: var namaBulan = "Agustus"; break;
    case 8: var namaBulan = "September"; break;
    case 9: var namaBulan = "Oktober"; break;
    case 10: var namaBulan = "November"; break;
    case 11: var namaBulan = "Desember"; break;
  }

  var tampilanTanggal = namaHari + ", " + tanggal + " " + namaBulan + " " + tahun;
  tampilanTanggal += " " + jam + ":" + menit;


  var zz = tampilanTanggal;
  var text4 = document.createTextNode(zz)


  td.appendChild(text)
  td2.appendChild(text2)
  td3.appendChild(text3)
  td4.appendChild(text4)

  tr.appendChild(td)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)

  tbody.appendChild(tr)


  var inquiry = document.getElementsByTagName('b')[0]
  var a = inquiry.innerHTML.split(',').join('')

  if (td3.innerHTML == 'Pendekar Rajawali Style') {
    inquiry.innerHTML = (parseInt(a) + 75000).toLocaleString()
  }
  if (td3.innerHTML == 'Sun Gokong Style') {
    inquiry.innerHTML = (parseInt(a) + 80000).toLocaleString()
  }
  if (td3.innerHTML == 'Sasuke Style') {
    inquiry.innerHTML = (parseInt(a) + 55000).toLocaleString()
  }
  if (td3.innerHTML == 'Midoriya Style') {
    inquiry.innerHTML = (parseInt(a) + 75000).toLocaleString()
  }
  if (td3.innerHTML == 'Kaneki Ken Style') {
    inquiry.innerHTML = (parseInt(a) + 60000).toLocaleString()
  }
  if (td3.innerHTML == 'Mo Salah Style') {
    inquiry.innerHTML = (parseInt(a) + 65000).toLocaleString()
  }
  if (td3.innerHTML == 'Itachi Style') {
    inquiry.innerHTML = (parseInt(a) + 50000).toLocaleString()
  }
  if (td3.innerHTML == 'Pain Style') {
    inquiry.innerHTML = (parseInt(a) + 65000).toLocaleString()
  }



  var tes = document.querySelectorAll('td:nth-child(3)')
  // console.log(tes[0].innerHTML)
  // console.log(tes[1].innerHTML)
  var uniqueNumber = []
  var frequent = []
  var maxFreq = 1
  var mode = 0


  for (var i = 0; i < tes.length; i++) {
    if (uniqueNumber.indexOf(tes[i].innerHTML) === -1) {
      uniqueNumber.push(tes[i].innerHTML)
    }
  }
  // console.log(uniqueNumber)
  for (var i = 0; i < uniqueNumber.length; i++) {
    frequent[i] = 0
    for (var j = 0; j < tes.length; j++) {
      if (tes[j].innerHTML == uniqueNumber[i]) {
        frequent[i]++
      }
    }
  }
  // console.log(frequent)
  for (var i = 0; i < frequent.length; i++) {
    if (frequent[i] > maxFreq) {
      maxFreq = frequent[i]
    }
  }
  for (var i = 0; i < frequent.length; i++) {
    if (frequent[i] === maxFreq) {
      mode = uniqueNumber[i]
    }
  }
  // console.log(mode)
  var inquiry2 = document.getElementsByTagName('strong')[1]
  inquiry2.innerHTML = mode

  var poto2 = document.querySelector('h4 img')

  if (mode == 'Pendekar Rajawali Style') {
    poto2.setAttribute('src', 'image/9.jpg')
  }
  if (mode == 'Sun Gokong Style') {
    poto2.setAttribute('src', 'image/10.jpg')
  }
  if (mode == 'Sasuke Style') {
    poto2.setAttribute('src', 'image/6.jpg')
  }
  if (mode == 'Midoriya Style') {
    poto2.setAttribute('src', 'image/7.jpg')
  }
  if (mode == 'Kaneki Ken Style') {
    poto2.setAttribute('src', 'image/8.jpg')
  }
  if (mode == 'Mo Salah Style') {
    poto2.setAttribute('src', 'image/5.jpg')
  }
  if (mode == 'Itachi Style') {
    poto2.setAttribute('src', 'image/12.jpg')
  }
  if (mode == 'Pain Style') {
    poto2.setAttribute('src', 'image/11.jpg')
  }

})

// var poto = document.getElementsByTagName('strong')[0]
// var poto2 = document.querySelector('h4 img')

// console.log(poto2)


// poto.addEventListener('change', function () {
//   poto2.setAttribute('src', 'image/3.jpg')
// })

// var inquiry2 = document.getElementsByTagName('strong')[0]
// console.log(inquiry2.innerHTML)

// var tes = document.querySelectorAll('th:nth-child(3)')
// tes.setAttribute('class', 'top')
// console.log(tes)

// var foo = new Date();

// var tahun = foo.getFullYear();
// var bulan = foo.getMonth();
// var tanggal = foo.getDate();
// var hari = foo.getDay();
// var jam = foo.getHours();
// var menit = foo.getMinutes();
// var detik = foo.getSeconds();

// var namaHari;
// var namaBulan;

// switch (hari) {
//   case 0: var namaHari = "Minggu"; break;
//   case 1: var namaHari = "Senin"; break;
//   case 2: var namaHari = "Selasa"; break;
//   case 3: var namaHari = "Rabu"; break;
//   case 4: var namaHari = "Kamis"; break;
//   case 5: var namaHari = "Jumat"; break;
//   case 6: var namaHari = "Sabtu"; break;
// }

// switch (bulan) {
//   case 0: var namaBulan = "Januari"; break;
//   case 1: var namaBulan = "Februari"; break;
//   case 2: var namaBulan = "Maret"; break;
//   case 3: var namaBulan = "April"; break;
//   case 4: var namaBulan = "Mei"; break;
//   case 5: var namaBulan = "Juni"; break;
//   case 6: var namaBulan = "Juli"; break;
//   case 7: var namaBulan = "Agustus"; break;
//   case 8: var namaBulan = "September"; break;
//   case 9: var namaBulan = "Oktober"; break;
//   case 10: var namaBulan = "November"; break;
//   case 11: var namaBulan = "Desember"; break;
// }

// var tampilanTanggal = namaHari + ", " + tanggal + " " + namaBulan + " " + tahun;
// tampilanTanggal += " " + jam + ":" + menit + ":" + detik;

// console.log(tampilanTanggal);












