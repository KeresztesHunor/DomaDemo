class Gomb
{
    #index;
    #gombNyomasEvent;

    constructor(szuloElem, index)
    {
        this.#index = index;
        $(szuloElem).append("<button>Gomb</button>");
        const GOMB = $(szuloElem).children("button:last-child");

        //$(GOMB).on("click", () => window.dispatchEvent(new CustomEvent("gombNyomas", { detail: this.#index }))); //Lassabb, mert minden event dispatch-nél új CustomEvent-et példányosít

        this.#gombNyomasEvent = new CustomEvent("gombNyomas", { detail: this.#index }); //Gyorsabb, mert előre lementi egy változóba a CustomEvent-et
        $(GOMB).on("click", () => window.dispatchEvent(this.#gombNyomasEvent));         //és minden dispatch-nél azt a változó értéket adja vissza
    }
}

export default Gomb;