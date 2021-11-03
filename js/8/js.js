let personData = [
    {
        uid: 112233,
        firstName: "amirhosein",
        lastName: "kazemi",
        city: "isfahan",
        postalCode: 2345672345,
        phoneNumber: "03111234234",
        position: "ui designer",
    },
    {
        uid: 223344,
        firstName: "ali",
        lastName: "ahmadi",
        city: "abhar",
        postalCode: 334563232,
        phoneNumber: "04111334452",
        position: "analyzer",
    },
    {
        uid: 334455,
        firstName: "ali",
        lastName: "ahmadi",
        city: "rasht",
        postalCode: 9945643232,
        phoneNumber: "01131394855",
        position: "ui designer",
    },
    {
        uid: 445566,
        firstName: "shahriar",
        lastName: "ahmadi gol",
        city: "mashhad",
        postalCode: 5545689232,
        phoneNumber: "04121334415",
        position: "ui designer",
    },
    {
        uid: 556677,
        firstName: "reza",
        lastName: "rahmani",
        city: "semnan",
        postalCode: 774565392,
        phoneNumber: "09331334225",
        position: "analyzer",
    },
    {
        uid: 667788,
        firstName: "mohammadhadi",
        lastName: "soleimani",
        city: "shiraz",
        postalCode: 7845482232,
        phoneNumber: "07771333455",
        position: "php programmer",
    },
    {
        uid: 778899,
        firstName: "mohsen",
        lastName: "zare",
        city: "zahedan",
        postalCode: 1145119212,
        phoneNumber: "01221399450",
        position: "ux designer",
    },
    {
        uid: 889900,
        firstName: "milad",
        lastName: "rabbani",
        city: "qom",
        postalCode: 8845383233,
        phoneNumber: "08121320452",
        position: "node programmer",
    },
    {
        uid: 990011,
        firstName: "mahdi",
        lastName: "mohseni nasab",
        city: "ahvaz",
        postalCode: 2242689035,
        phoneNumber: "02211783452",
        position: "ux designer",
    },
    {
        uid: 113344,
        firstName: "soheil",
        lastName: "hosein",
        city: "arak",
        postalCode: 1145129244,
        phoneNumber: "01221334665",
        position: "java programmer",
    },
];

// Adding the entire table to the body tag
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '100%';
tbl.setAttribute('border', '1');
var tbdy = document.createElement('tbody');
var tr = document.createElement("tr")
let heading_1 = document.createElement("th");
let heading_2 = document.createElement("th");
let heading_3 = document.createElement("th");
let heading_4 = document.createElement("th");
let heading_5 = document.createElement("th");
let heading_6 = document.createElement("th");
let heading_7 = document.createElement("th");
let heading_8 = document.createElement("th");

heading_1.textContent = "Row";
heading_2.textContent = "Uid";
heading_3.textContent = "First Name";
heading_4.textContent = "Last Name";
heading_5.textContent = "City";
heading_6.textContent = "Postal Code";
heading_7.textContent = "Phone number";
heading_8.textContent = "Position";
tr.appendChild(heading_1);
tr.appendChild(heading_2);
tr.appendChild(heading_3);
tr.appendChild(heading_4);
tr.appendChild(heading_5);
tr.appendChild(heading_6);
tr.appendChild(heading_7);
tr.appendChild(heading_8);
tr.style.background = "gray"
tbdy.appendChild(tr)
let dateHtml = ""
for (let i = 0; i < personData.length; i++) {
    if(i % 2 !== 0){
        dateHtml += `<tr style="background: gray"><td>${i + 1}</td>
       <td>${personData[i].uid}</td>
       <td>${personData[i].firstName}</td>
       <td>${personData[i].lastName}</td>
       <td>${personData[i].city}</td>
       <td>${personData[i].postalCode}</td>
       <td>${personData[i].phoneNumber}</td>
       <td>${personData[i].position}</td></tr>`;
    }
    else{
        dateHtml += `<tr><td>${i + 1}</td>
       <td>${personData[i].uid}</td>
       <td>${personData[i].firstName}</td>
       <td>${personData[i].lastName}</td>
       <td>${personData[i].city}</td>
       <td>${personData[i].postalCode}</td>
       <td>${personData[i].phoneNumber}</td>
       <td>${personData[i].position}</td></tr>`;
    }

}
tbl.appendChild(tbdy)
tbl.innerHTML += dateHtml;
body.appendChild(tbl)
