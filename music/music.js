// API 활용 (o)
/* CORS 오류가 발생, 
Allow CORS: Access-Control-Allow-Origin 크롬 확장 프로그램을 통해 우회*/
fetch('https://itunes.apple.com/lookup?id=1635469693&entity=song')
    .then(function (response) {
        return response.json();
    })
    .then((json) => {
        for (let i = 1; i < json["results"].length; i++) {
            console.log(json["results"][i]["trackName"]);
        }

        function musicClick() {
            var numberIndex = Math.floor(Math.random() * json["results"].length) + 1;
            const mbody = document.querySelector("#modal-body");
            let trs = ''
            trs += `<h5>${json["results"][numberIndex]["trackName"]}</h5>`
            mbody.innerHTML = trs;

            var btnCopy = document.querySelector("#btnCopy");
            btnCopy.addEventListener("click", () => {
                navigator.clipboard.writeText
                    (json["results"][numberIndex]["trackName"]).then(
                        () => { }
                    );
            })
        }

        var musicButton = document.querySelector("#blButton");
        musicButton.addEventListener("click", musicClick);

    });