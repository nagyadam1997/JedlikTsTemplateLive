var Jedlik;
(function (Jedlik) {
    class MyApplication {
        constructor() {
            const element = document.createElement("h1");
            element.innerHTML = "Hello World!";
            element.setAttribute("style", "color:Red");
            document.body.appendChild(element);
        }
    }
    Jedlik.MyApplication = MyApplication;
})(Jedlik || (Jedlik = {}));
window.onload = () => {
    const app = new Jedlik.MyApplication();
};
//# sourceMappingURL=app.js.map