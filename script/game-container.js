class Gamecontainer {
  constructor() {
    this.element = document.querySelector("#gameBoard");
  }
  createContainer() {
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.display = "flex";
    this.createCell();

    //
  }

  createCell() {
    const cellsArray = [];

    let cell = document.createElement("div");
    this.element.append(cell);
    for (let i = 9; i >= 0; i--) {
      const cellArray = [];
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement("div");
        cell.classList.add("box");
        cell.setAttribute("id", `${i}${j}`);
        cell.setAttribute("row", `${i}`);
        const evenRow = i % 2 === 0;
        cell.setAttribute("col", evenRow ? j : 10 - (j + 1));
        cellArray.push(`${i},${j}`);
        this.element.append(cell);
      }
      cellsArray.push(cellArray);
    }
    console.log(cellsArray);
  }
}
