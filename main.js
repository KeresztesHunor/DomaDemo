import Gomb from "./Gomb.js";

$(() => {
    new Gomb("body", 0);
    new Gomb("body", 1);
    new Gomb("body", 2);
    $(window).on("gombNyomas", event => console.log(event.detail));
});