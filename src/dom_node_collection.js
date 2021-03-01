export class domNodeCollection {
    constructor(htmlEls) {
        this.htmlEls = htmlEls; // array of HTMLElements
    }

    html(string) {
        if (string instanceof String) {
            this.htmlEls.forEach(element => {
                element.innerHTML = string;
            })
        } else {
            return this.htmlEls[0].innerHTML;
        }
    }

    empty() {
        this.htmlEls.map(html => {
            html = "";
        })
    }

    

}



