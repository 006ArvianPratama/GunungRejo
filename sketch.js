//cuaca
let dataAPI;
let urlAPI = "https://api.openweathermap.org/data/2.5/weather?q=Gunung Rejo&appid=1e7d6a61963583838b8ea02a9c6a6921&units=metric"

//Data Digram Pie
let dataPiejk;
let urljk = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRiFNL3eWufkLjMhMiDaT-PdFeJuZrxbfdEbUwrxAvE80vW3anxk0Wcoud7TPk5hm4P4Wkg4h61rkP/pub?output=csv"

let dataPieagama ;
let urlagama = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTgSYdSdtxhvZvox72BuMOKw0NOr3LPf8FU5a_D3POVXtdeWxdPeAC4VDfb3zcQDDuQ84swExeYsmCc/pub?output=csv"

let dataPendidikan;
let urlpen = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrBGT5WG5Lr90cUHBMO6b-TBwqDyNXpxoFYk_FULLKRnKSP3CLwE7Ks89QilXIl68S9r4Vto0i2Jue/pub?output=csv"

let datapekerjaan;
let urlpek = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQOJIWo9JHWdy0ORREAn4TAxemEoHO6qIgKcc6sp5qdPvZDnKtB8Uhrnq3wg0J-Ue4hL_u0kyxmTPXf/pub?output=csv"

let dataetnis;
let urlet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT81siFjvk4_weyY8RtwRBduYSTTJu1xLxfUYS4KRhT_J4Xzm11xtbGcqCFT-6S7hNdcwtfRWKfQ8Zx/pub?output=csv"


//insert gambar
let latar;
let semua;
let sumber;
let bawah;
let peta;
let organigram;
let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
r = 15


function infoCuaca (p, q, data, fontSize){
  textSize (fontSize);
  fill('black')
  noStroke()
  textFont(RobotoMonoExtraLight)

// Nama Desa
  text (data.name,
        posP = 120,
        posQ = 2080,
        textSize (20))
 // Cuaca
  text(data.weather [0].main,
      posP= 350,
      posQ= 2092,
      textSize (30))
  text('Cuaca',
      posP = 350,
      posQ = q + 2115,
      textSize(13))
 // temperatur
  text(data.main.temp+"°c",
      posP =p + 120,
      posQ =q + 2130,
      textSize(40))

 // kecepatan angin
  text('Kecepatan Angin',
      posP = p + 350,
      posQ = q + 2190,
      textSize(13))
  text(data.wind.speed +" km/h ",
      posP =p + 350,
      posQ =q + 2170, 
      textSize (30))
 // kelembaban
  text (data.main.humidity + " % ",
      posP = p + 350,
      posQ = q + 2250 ,
      textSize (30))
  text('Kelembaban',
      posP = p + 350,
      posQ = q + 2270,
      textSize(13))
  }

function preload(){
  dataAPI = loadJSON(urlAPI);
  latar = loadImage('Latar.jpg');
  bawah = loadImage('bawah.png');
  peta = loadImage('peta.jpg')
  semua =loadImage('semua.png');
  sumber = loadImage('sumber.png')
  organigram = loadImage('Organigram.jpg');
  RobotoMonoSemiBold = loadFont('RobotoMono-SemiBold.ttf')
  RobotoMonoMedium = loadFont('RobotoMono-Medium.ttf')
  RobotoMonoExtraLight = loadFont('RobotoMono-ExtraLight.ttf')
  dataPiejk = loadTable(urljk, 'csv', 'header');
  dataPieagama = loadTable(urlagama, 'csv', 'header');
  dataPendidikan = loadTable(urlpen, 'csv', 'header');
  datapekerjaan = loadTable(urlpek, 'csv', 'header');
  dataetnis = loadTable(urlet, 'csv', 'header');
}

function setup() {
  createCanvas(1350,5150);
  //noLoop(); // Run once and stop
  
}


function draw() {
  background('white');
  noStroke()

 //bg diagram
  fill('#F5F5F5');
  rect(110,2995,320,1920);
  
 //Background
  image(latar,0,0,1600,900);
  fill(51,66,87,200);
  
 //Logo
  image(semua,460,150,450,600);
  
 //Organigram
  fill('black')
  textSize(30)
  textFont(RobotoMonoMedium)
  text("D.Struktur Perangkat Desa Gunung Rejo 2023",110,2410)
  image(organigram,150,2430,760,440)
  
 //Peta Desa
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (30)
  text ("B.Peta Potensi Sumber Daya Desa Gununug Rejo",110,1490)
  image(peta,110,1520,440,400)
  
 //Tentang Gunug Rejo
  textSize(30)
  textFont(RobotoMonoMedium)
  fill('black')
  text("A.Profil Desa Gunung Rejo",110,980)
  
  textSize(18)
  textFont(RobotoMonoExtraLight)
  text("     Desa Gunung rejo merupakan salah satu desa di Kecamatan Way Lima  ",130,1030)
  text("Kabupaten Pesawaran Lampung. Nama Gunung Rejo diambil dari keadaan dan ",130,1050+r)
  text("kondisi geografis desa yang berada di daerah tinggi(Pegunungan) dan ",130,1070+2*r)
  text("daratan rendah(Rawa/Pesawahan), Gunung yang berarti pegunungan dan Rejo",130,1090+3*r)
  text("yang dalam bahasa jawa artinya sejahtera ataupun makmur. Tahun 1936  ",130,1110+4*r)
  text("merupakan tahun berdirinya desa Gunung Rejo, penduduk desa Gunung Rejo 100%",130,1130+5*r)
  text("bersuku jawa dan beraga Islam, meskipun demikian masyarakat desa Gunung",130,1150+6*r)
  text("Rejo sangat toleran terhadapa kepercayaan orang lain dan tetap saling",130,1170+7*r)
  text("menghargai satu sama lain. Disektor perekonomian mayoritas masyarakatnya",130,1190+8*r)
  text("berprofesi sebagai petani padi dan pengrajin, sedangkan disektor pendidikan",130,1210+9*r)
  text("desa Gunung Rejo sudah memiliki dua TK/PAUD, dua SD dan satu MTS.",1301230+10*r)

  //text diagram
  textSize(12)
  textFont(RobotoMonoExtraLight) 

  //pendidikan
  text("Berdasarkan diagram pendidikan disamping, dapat dilihat bahwasanya tingkat", 550, 3100 )
  text("pendidikan di desa Gunung Rejo berada pada rentan Sekolah Dasar(SD) - Sekolah ", 500, 3120)
  text("Menengah Atas(SMA), dengan jumlah siswa yang cukup banyak yakni 608(SD), 621(SMP)", 500, 3140)
  text("696(SMA). Selain itu banyak anak-anak di desa Gunung Rejo yang masi duduk di bangku", 500, 3160)
  text("TK dan PAUD, yakni sebanyak 126 siswa. Fasilitas penunjang pendidikan di desa Gunung", 500, 3180)
  text("Rejo juga sudah cukup baik dengan adanya dua TK/PAUD, dua SD dan satu Mts. Para anak-anak ",500, 3200)
  text("di desa Gunung Rejo lebih mudah untuk mengakses pendidikan di desanya sendiri tanpa dengan ", 500, 3220)
  text("bersekolah ke desa tetangga yang jaraknya cukup jauh.", 500, 3240)


  //agama
  text("Dilihat dari data diagram Agama disamping, seluruh masyarakat desa Gunung", 550, 3550)
  text("Rejo memiliki kepercayaan yang sama yaitu agama Islam dengan jumlah total yakni", 500, 3570)
  text("2186 jiwa. Dalam kegiatan keagamaan masyarakat desa Gunug Rejo sangat antusias,", 500, 3590)
  text("dilihat dari pengajian rutinan di setiap malam jumat(bapak-bapak), pengajian  ", 500, 3610)
  text("rutinan hari selasa(ibu-ibu) dan pengajian rutinan yang diadakan di masjid", 500, 3630)
  text("satu bulan sekali.", 500, 3650)

  //pekerjaan
  text("Mata pencaharian masyarakat desa Gunung Rejo dapat dikelompokkan menjadi ", 550, 3940)
  text("enam golongan yaitu buruh, petani, pedagang keliling, pengrajin, PNS dan peternak.", 500, 3960)
  text("Dikarenakan keadaan dan kondisi geografis lingkunganya yakni pegunungan dan ", 500, 3980)
  text("pesawahan  mata pencaharian masyarakat desa Gunug Rejo rata-rata buruh dan bertani.", 500, 4000)
  text("Komoditas tanam pertanian desa Gunung Rejo yaitu tanaman padi,yang nantinya", 500, 4020)
  text("dijadikan konsumsi pribadi ataupun dijual dalam bentuk gabah. Namun sayangnya ", 500, 4040)
  text("para petani hanya bisa menanam padi satu kali dalam setahun dikarenakan banjir yang", 500, 4060)
  text("datang dilahan pertanian di setiap tahunya.", 500, 4080)

  //etnis
  text("Penduduk desa Gunung Rejo mayoritas bersuku jawa, dikarenakan dahulunya masyarakat", 550, 4350)
  text("desa Gunung Rejo merupakan transmigran dari Jawa Tengah yaitu purworejo, kebumen ", 500, 4370)
  text("dan solo, oleh karena itu penduduk desa Gunung Rejo 100% bersuku jawa. Meskipun  ", 500, 4390)
  text("transmigran, masyarakat desa Gununug Rejo masi sangat kental dengan budaya jawanya yaitu", 500, 4410)
  text("salah satunya masih lestarinya tarian tradisional Kuda Lumping di desa Gunug Rejo.", 500, 4430)

  //jumlah penduduk
  text("Desa Gunung Rejo memiliki populasi penduduk yang cukup banyak dan padat, ", 550, 4720)
  text("dengan jumlah total 2186 jiwa dalan satu desa. Jumlah populasi laki-laki dan ", 500, 4740)
  text("perempuan di desa Gunung Rejo dilihat dari diagram Jumlah Penduduk terlihat seimbang,", 500, 4760)
  text("sehingga tidak terjadi kesenjangan antaran gender laki-laki dan perempuan di desa ", 500, 4780)
  text("Gunug Rejo Kecamatan Way Lima.", 500, 4800)

 //Dashboard Text
  fill('yellow');
  textFont(RobotoMonoSemiBold);
  textSize(60);
  text("DASHBOARD DESA GUNUNG REJO",200,60);

 //Bawah
  image(bawah,60,5000,1350,210)

 //Informasi Cuaca
  textFont(RobotoMonoMedium)
  fill("black");
  textSize (30)
  text ('C.Informasi Cuaca', 110,1980)

  fill (51,66,87,200);
  rect (110,2050,422,250,20);

 // info cuaca
  infoCuaca (0, 0, dataAPI, 500/20)
  
  textFont(RobotoMonoExtraLight)
  fill(0);
  noStroke();
  textSize(18);
  
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);

 //tanggal
  text(currentDate, 110, 2020);

 //waktu
  text(currentTime, 110, 2040);

 //gambar weather
  image(sumber,120,2190,200,85)
  
 //Data Umur
 //fill('white')
 //fill('black')
  
  textFont(RobotoMonoMedium)
  textSize(30)
  text("E.Data Statistik Desa Gunung Rejo",110,2970)

 // textSize(18)
  //text("Data Usia",450,2080)
  
  //textFont(RobotoMonoExtraLight)
  //rect(180,2100,1,300)
  //rect(180,2400,600,1)
  //fill('#32CD32')
  //rect(215,2120,75,280)
  //fill('#00FF00')
  //rect(340,2160,75,240)
  //fill('#7CFC00')
  //rect(465,2300,75,100)
  //fill('#ADFF2F')
  //rect(590,2375,75,25)
  
  //jumlah data
 //  textSize(16)
  //  fill ('black');
    //text(0,170,2400);
    //text(500,150,2350);
    //text(1000,140,2300);
    //text(1500,140,2250);
    //text(2000,140,2200);
    //text(2500,140,2150);
    //text(3000,140,2100);
  
  //text('0-30 Thn', 215,2420);
  //text('30-60 Thn', 340,2420);
  //text('60-90 Thn', 465,2420);
  //text('>90 Thn', 590,2420);



  anglesjk = dataPiejk.getColumn('jk')
  pieChartjk(200, anglesjk);
  
  anglesagama = dataPieagama.getColumn('agama')
  pieChartagama(200, anglesagama);
  
  anglespen = dataPendidikan.getColumn('Pendidikan')
  pieChartpen(200, anglespen);
  
  anglespek = datapekerjaan.getColumn('pekerjaan')
  pieChartpek(200, anglespek);

  angleset = dataetnis.getColumn('etnis')
  pieChartet(200, angleset);
}

function pieChartjk(diameterjk, dataPeijk) {
  let lastAnglejk = 0;
  var piecolorjk = ['#000000 ','#151B54 '];
  for (var i = 0; i < dataPeijk.length; i++) {
    fill(piecolorjk[i]);
    arc(
      270,
      4750,
      diameterjk,
      diameterjk,
      lastAnglejk,
      lastAnglejk + radians(anglesjk[i])
    );
    lastAnglejk += radians(anglesjk[i]);
  }
//Data Jenis Kelamin
  fill('black')
  textSize(18)
  textFont(RobotoMonoMedium)
  text("5.Diagram Jumlah Penduduk",150,4630)
  textFont(RobotoMonoExtraLight)
  textSize(12)
  text("Laki-Laki            = 1130",170,4874)
  text("Perempuan            = 1056",170,4894)
  
 //penanda warna
  fill(piecolorjk[0]) ;
  circle(280,4874,10);
  fill(piecolorjk[1]) ;
  circle(280,4894,10);

}

function pieChartagama(diameter, dataPeiagama) {
  let lastAngle = 0;
  var piecoloragama = ['#646D7E'];
  for (var i = 0; i < dataPeiagama.length; i++) {
    fill(piecoloragama[i])
    arc(
      270,
      3620,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglesagama[i])
    );
    lastAngle += radians(anglesagama[i]);
  }
  
  fill('white')
  fill('black')
  textFont(RobotoMonoMedium)
  textSize(18)
  text("2.Diagram Agama",150,3500)
  
  textFont(RobotoMonoExtraLight)
  textSize(12)
  text("Islam            = 2186",195,3754)
  
  fill(piecoloragama[0]) ;
  circle(300,3750,10);
  
}

function pieChartpen(diameter, dataPendidikan) {
  let lastAngle = 0;
  var piecolorpen = ['#3B3131','#625D5D','#837E7C ','#B6B6B4 ','#BCC6CC ', '#6D7B8D','#566D7E','#737CA1']
  for (var i = 0; i < dataPendidikan.length; i++) {
    fill(piecolorpen[i])
    arc(
      270,3120,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglespen[i])
    );
    lastAngle += radians(anglespen[i]);
  }
  // Data Pendidikan
  fill('white')
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("1.Diagram Pendidikan",150,3015)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Tidak Sekolah        = 26",170,3250)
  text("PAUD      `          = 81",170,3270)
  text("TK                   = 45",170,3290)
  text("SD                   = 608",170,3310)
  text("SMP                  = 621",170,3330)
  text("SMA                  = 696",170,3350)
  text("DIPLOMA              = 29",170,3370)
  text("SARJANA              = 4",170,3390)
  
  fill(piecolorpen[0]) ;
  circle(300,3245,10);
  fill(piecolorpen[1]) ;
  circle(300,3265,10);
   fill(piecolorpen[2]) ;
  circle(300,3285,10);
   fill(piecolorpen[3]) ;
  circle(300,3305,10);
   fill(piecolorpen[4]) ;
  circle(300,3325,10);
   fill(piecolorpen[5]) ;
  circle(300,3345,10);
   fill(piecolorpen[6]) ;
  circle(300,3365,10);
   fill(piecolorpen[7]) ;
  circle(300,3385,10);
}
function pieChartpek(diameter, datapekerjaan) {
  let lastAngle = 0;
  var piecolorpek = ['#2B3856','#151B54','#342D7E ','#0041C2 ','#1569C7 ', '#1F45FC']
  for (var i = 0; i < datapekerjaan.length; i++) {
    fill(piecolorpek[i])
    arc(
      270,3975,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglespek[i])
    );
    lastAngle += radians(anglespek[i]);
  }

//Data Pekerjaan
  fill('white')
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("3.Diagram Pekerjaan",150,3860)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Buruh                    = 479",170,4100)
  text("Petani                   = 237",170,4120)
  text("Pengrajin                = 40",170,4140)
  text("Pedagang Keliling        = 22",170,4160)
  text("PNS                      = 13",170,4180)
  text("Peternak                 = 5",170,4200)

//penanda warna
  fill(piecolorpek[0]) ;
  circle(300,4100,10);
   fill(piecolorpek[1]) ;
  circle(300,4120,10);
   fill(piecolorpek[2]) ;
  circle(300,4140,10);
   fill(piecolorpek[3]) ;
  circle(300,4160,10);
   fill(piecolorpek[4]) ;
  circle(300,4180,10);
   fill(piecolorpek[5]) ;
  circle(300,4200,10);


}

function pieChartet(diameter, dataetnis) {
  let lastAngle = 0;
  var piecoloret = ['#151B54']
  for (var i = 0; i < dataetnis.length; i++) {
    fill(piecoloret[i])
    arc(
      270,4410,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angleset[i])
    );
    lastAngle += radians(angleset[i]);
  }

//Data Pekerjaan
  fill('white')
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("4.Data Etnis",150,4290)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Jawa                 = 2186",170,4530)

//penanda warna
  fill(piecoloret[0]) ;
  circle(300,4525,10);

}