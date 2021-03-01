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

    append(arg) {
        arg.forEach (ele => {
            this.htmlEls.innerHTML.append(ele.outerHTML)
        })
    }

    attr() {
        let attrs = {};
        this.htmlEls.forEach ( ele => {
            attrs[ele] = ele.innerHTML
        })
        return attrs;
    }
    
    addClass(newClass) {
        this.htmlEls.forEach(ele => {
            ele.classlist.add(newClass)
        });
    }

    removeClass(newClass) {
        this.htmlEls.forEach(ele => {
            ele.classlist.remove(newClass)
        });
    }

    children() {
        let childrens = new domNodeCollection();
        this.htmlEls.forEach((ele) => {
            childrens.htmlEls.append(ele.children)
        });
        return childrens;
    }

    parent() {
        let parents = new domNodeCollection();
        this.htmlEls.forEach((ele) => {
            parents.htmlEls.append(ele.parentNode)
        });
        return parents;
    }
}



