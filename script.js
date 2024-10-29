//your JS code here. If required.
const ul = document.querySelector('#bands');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let neew = bands.map((ele)=>{return ele.split(' ')})
neew.sort((a,b)=>{
    let aFirst,bFirst;
    aFirst = a[0];
    bFirst = b[0]
    if(a[0]=='A' || a[0]=='An' || a[0]=='The') aFirst = a[1];
    if(b[0]=='A' || b[0]=='An' || b[0]=='The') bFirst = b[1];
    if(aFirst < bFirst) return -1;
    if(aFirst > bFirst) return 1;
    return 0;
})

neew = neew.map((ele)=>{return ele.join(' ');})
neew = neew.map((ele)=>{
    const e = document.createElement('li');
    const text = document.createTextNode(ele);
    e.appendChild(text);
    return e;
});
neew.reverse();
neew.forEach((ele)=>{
	ul.insertBefore(ele , ul.children[0]);
})

