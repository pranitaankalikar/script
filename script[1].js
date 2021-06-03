let names;
const localName = localStorage.getItem('NAME');
if(localName === null) { names = []; }
else { names = JSON.parse(localName); }

let email;
const localEmail = localStorage.getItem('EMAIL');
if(localEmail === null) { email = []; }
else { email = JSON.parse(localEmail); }

let phone;
const localPhone = localStorage.getItem('PHONE');
if(localPhone === null) { phone = []; }
else { phone = JSON.parse(localPhone); }


/*let date;
const localDate = localStorage.getItem('DATE');
if(localDate === null) { date = []; }
else { date = JASON.parse(localDate); }

let time;
const localTime = localStorage.getItem('TIME');
if(localTime === null) { time = []; }
else { time = JASON.parse(localDate); } */

const button = document.getElementById("button");
const NDetails = document.getElementById('namO');
const EDetails = document.getElementById('emailO');
const PDetails = document.getElementById('phonO')
const Edit = document.getElementById('edit');
const Delete = document.getElementById('delete');
button.onclick = () => {
    if(names != null && email != null && phone != null /*&& date != null && time != null*/) {
        names.push(`${document.getElementById("name").value}`);
        localStorage.setItem('NAME', JSON.stringify(names));

        email.push(`${document.getElementById("email").value}`);
        localStorage.setItem('EMAIL', JSON.stringify(email));

        phone.push(`${document.getElementById("phone").value}`);
        localStorage.setItem('PHONE', JSON.stringify(phone));

        /*date.push(`${document.getElementById("date").value}`);
        localStorage.setItem('DATE', JSON.stringify(date));

        time.push(`${document.getElementById("time").value}`);
        localStorage.setItem('TIME', JSON.stringify(time)); */
        location.reload();
    }
};

// adding data in front page
for(let i=0; i<names.length; i++) {
    if(NDetails === null) {break;}
    NDetails.innerHTML += `${names[i]} <br>`;
    var des = document.createElement('button');
    des.id = i;
    des.appendChild(document.createTextNode('DELETE'));
    Edit.innerHTML += `<button id = ${i}>EDIT</button> <br>`
    Delete.appendChild(des);

}

for(let i=0; i<email.length; i++) {
    if(EDetails === null) {break;}
    EDetails.innerHTML += `${email[i]} <br>`;
}

for(let i=0; i<phone.length; i++) {
    if(PDetails === null) {break;}
    PDetails.innerHTML += `${phone[i]} <br>`;
}

//var delItem = document.getElementById('delete');
Delete.addEventListener('click',dell);

function dell(e){
    var idx = e.target.className;
    console,console.log(idx);
    names.pop(idx);
    email.pop(idx);
    phone.pop(idx);
    localStorage.setItem('NAME', JSON.stringify(names));
    localStorage.setItem('EMAIL', JSON.stringify(email));
    localStorage.setItem('PHONE', JSON.stringify(phone));
    location.reload();
}
