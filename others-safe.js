var ac = window.location.hostname,
    ab = 'http://broindo.blogspot.com';
var ad = ['safelinku18.blogspot.com', 'broindo.blogspot.com', 'oxoco.blogspot.com', 'autosafelinku.blogspot.com'];
var nametag = document.createElement('style');
nametag.innerHTML = `\
div#elementverifikotak {\
    background: rgba(255,255,255,0.8);\
    -webkit-backdrop-filter: saturate(180%) blur(20px);\
    backdrop-filter: saturate(180%) blur(20px);\
\
border: 1px solid #EBEBEB;\
    padding: 25px;\
    margin: 30px auto;\
    max-width: 770px;\
width:100%;\
    z-index: 99;\
    border-radius: 9px;\
    box-shadow: 0 3px 10px rgba(0,0,0,.2);\
}\
#CodeVerifRandom {\
    margin: 30px 30% 10px;\
    font-size: 30px;\
    color: black;\
    box-shadow: 0 0 5px 2px black;\
    border-radius: 10px;\
    background-color: #e8dcdc;\
	box-shadow:0 15px 1rem -1rem rgba(0,0,0,0.5);\
}\
div#notifVerif {\
    margin-top: 10px;\
    font-size: 13px;\
    font-weight: bold;\
    color: red;\
}\
span.greatbung {\
    color: green;\
    font-weight: bold;\
}\
.formgroup{position: relative;box-shadow:0 15px 1rem -1rem rgba(0,0,0,0.5)}\
.input-group input {\
    background: #f3f4f7;\
    width: 100%;\
    padding: 15px;\
    border-radius: 5px;\
    border: 1px solid transparent;\
    font-size: 16px;\
    color: #000;\
    outline: none;\
    text-indent: 40px;\
    transition: all .3s;\
	position: relative;\
\
}\
.containercode{margin-bottom: 48px;}\
.input-group-btn {position: absolute;top: 0;right: 0;}\
.btn-submit {border-radius: 0 5px 5px 0;background: #ff8c8c;color: #fff;border: 0;padding: 16px 52px;font-weight: 500;outline: none;transition: all .3s;-webkit-appearance: button;cursor: pointer;}\
@media screen and (max-width:362px){.input-group input{text-indent: 15px;}.btn-submit {padding: 16px 20px;}}\
`;
document.head.appendChild(nametag);
function makenumber(c) {
    for (var d = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], f = c, g = new Array(), h = 0; h <= f - 1; h++) {
        g[h] = d[parseInt(Math.random() * d.length)];
        g = g;
        randomnumber = g.join('')
    }
};
function get_remove_long_Path() {
    var c = window.location.href.split(Path)[0];
    window.history.replaceState({}, document.title, c)
};
if (window.location.href.indexOf(path_home) > 0) {
    var getURLpath_home = window.location.href;
    getURLpath_home = getURLpath_home.replace('?m=1', '');
    getURLpath_home = getURLpath_home.replace('?m=0', '');
    getURLpath_home = getURLpath_home.replace('%3D', '');
    getURLpath_home = getURLpath_home.replace('%3D%3D', '');
    getURLpath_home = getURLpath_home.replace('&m=1', '');
    getURLpath_home = getURLpath_home.replace('&m=0', '');
    if (remove_long_Path == false) {
        var getLinkDefault2 = window.location.href.split(path_home)[0];
        window.history.replaceState({}, document.title, getLinkDefault2)
    };
    if (verifikasi == false) {
        document.getElementsByClassName('containerr')[0].innerHTML = `\
<div class='container'><div class="IMGCover" id="elementverifikotak">\
    <div class="card border-primary mb-3" style="">\
        <div class="card-header text-center" id="judullinkdiverifikasi">\
            <div id="judullinkready"><h5 class="card-title">Human Verification</h5></div>\
        </div>\
        <div class="card-body text-primary text-center">\
            <p class="card-text">Human verification is a feature used to ensure that only humans visit protected links.</p>\
            <div id='CodeVerifRandom'></div>\
<div class='containercode'><div class="formgroup">\
<div class="input-group">\
<input class='form-control' id='insertCode' placeholder='insert Code'></input>\
\
<span class="input-group-btn">\
<button class="btn-submit" id="safelinkready" role="button" onclick='CheckVerif()'>verifikasi</button>\
</span>\
</div>\
</div></div>\
            <div id='notifVerif'></div>\
        </div>\
    </div>\
</div></div>`;
        document.getElementsByTagName('body')[0].setAttribute('style', 'background-size: 100% 100%;background: url(#) no-repeat fixed center top #ffffff;');
        if (verifikasi_Number == false) {
            document.getElementById('CodeVerifRandom').innerHTML = (makenumber(jumlah_Nomor_Verif), randomnumber)
        } else {
            document.getElementById('CodeVerifRandom').remove();
            document.getElementById('insertCode').remove();
            document.getElementById('safelinkready').setAttribute('onclick', 'NextVerif()')
        }
    }
};
function CheckVerif() {
    if (Number(document.getElementById('CodeVerifRandom').innerHTML) == document.getElementById('insertCode').value) {
        document.getElementById('notifVerif').innerHTML = '<span class="greatbung">Success<br/>Please Wait...</span>';
        NextVerif()
    } else {
        document.getElementById('notifVerif').innerHTML = 'Wrong Code !! Check again ...';
        document.getElementById('insertCode').focus()
    }
};
(function (c) {
    c.fn.replaceText = function (d, e, f) {
        return this.each(function () {
            var g = this.firstChild,
                h = [];
            if (g) {
                do
                    if (3 === g.nodeType) {
                        var i = g.nodeValue;
                        var j = i.replace(d, e);
                        j !== i && (!f && /</.test(j) ? (c(g).before(j), h.push(g)) : g.nodeValue = j)
                    } while (g = g.nextSibling)
            }
            h.length && c(h).remove()
        })
    }
});
function ae(c, d) {
    for (var e = false, f = 0; f < d.length; f++)
        if (d[f] == c) {
            e = true;
            break
        } return e
}
0 == ae(ac, ad) && (window.location.href = ab);
function NextVerif() {
    $.ajax({
        'url': '/feeds/posts/summary?alt=json-in-script',
        'type': 'get',
        'dataType': 'jsonp',
        'success': function (c) {
            var d = '',
                f = c.feed.entry,
                g = new Array();
            if (document.getElementById('notifVerif').innerHTML = '<span class="greatbung">Url accessed...</span>', void 0 !== f) {
                for (var h = 0; h < f.length; h++) {
                    for (var i = 0; i < f[h].link.length; i++)
                        if ('alternate' == f[h].link[i].rel) {
                            d = f[h].link[i].href;
                            break
                        } g[h] = d;
                    var j = Math.random() * g.length;
                    j = parseInt(j), resultgenerate = g[j]
                }
                window.location.href = resultgenerate + Path + getURLpath_home.split(path_home)[1]
            } else resulturl.val('No result!')
        },
        'error': function () {
            document.getElementById('notifVerif').innerHTML = 'Error loading feed!'
        }
    })
}
