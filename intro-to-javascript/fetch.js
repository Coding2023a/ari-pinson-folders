function getData(url, params) {
url = (url + new URLSearchParams(query).toString());
fetch(url, params).then(res => res.json()).then(data => {
    let content = ''
    for (const item of json.data) {
        content += item.content + '<br>';
    }
    document.querySelector('#p1').innerHTML = content;
} );
}

const param = {query:"how many amos are in a mile?"};
getData("https://www.torahcalc.com/api/input?", param);