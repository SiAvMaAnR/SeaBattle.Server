"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckerInitField {
    getShips(socketId, field) {
        let shipsCoords = this.getShipCoords(field);
        console.log(shipsCoords);
        const shipsVertical = this.getAllShips(shipsCoords, true);
        const shipsHorizontal = this.getAllShips(shipsCoords, false);
        console.log("VERTICAL");
        shipsVertical.forEach((ship) => {
            console.log(ship);
        });
        console.log("HORIZONTAL");
        shipsHorizontal.forEach((ship) => {
            console.log(ship);
        });
        const ships = [];
        // for (let i = 0, j = 0; i < shipsVertical.length, j < shipsHorizontal.length; i++, j++) {
        //     shipsVertical[i].coordinates.forEach(coordV => {
        //         shipsHorizontal[j].coordinates.forEach(coordH => {
        //             if (coordV.iY == coordH.iY && coordV.iX == coordH.iX) {
        //                 if (shipsVertical[i].countDecks >= shipsHorizontal[j].countDecks) {
        //                     ships.push(shipsVertical[i]);
        //                 } else {
        //                     ships.push(shipsHorizontal[j]);
        //                 }
        //             }
        //         });
        //     }
        //     );
        // }
        console.log("ships");
        ships.forEach(x => console.log(x));
        return shipsHorizontal;
    }
    getAllShips(shipsCoords, isVertical) {
        let coordinates = [];
        const allShips = [];
        if (isVertical) {
            shipsCoords = shipsCoords.sort((prev, next) => (prev.iX > next.iX)
                ? ((prev.iY > next.iY) ? 1 : -1)
                : -1);
        }
        for (let i = 0; i < shipsCoords.length; i++) {
            if (i === 0) {
                coordinates.push(shipsCoords[i]);
                if (shipsCoords.length == 1) {
                    allShips.push({
                        countDecks: coordinates.length,
                        coordinates: [...coordinates]
                    });
                }
                continue;
            }
            const condition = (isVertical)
                ? Math.abs(shipsCoords[i].iY - shipsCoords[i - 1].iY) === 1 && shipsCoords[i].iX === shipsCoords[i - 1].iX
                : Math.abs(shipsCoords[i].iX - shipsCoords[i - 1].iX) === 1 && shipsCoords[i].iY === shipsCoords[i - 1].iY;
            if (condition) {
                coordinates.push(shipsCoords[i]);
            }
            else {
                allShips.push({
                    countDecks: coordinates.length,
                    coordinates: [...coordinates]
                });
                coordinates.length = 0;
                coordinates.push(shipsCoords[i]);
            }
            if (i === shipsCoords.length - 1) {
                allShips.push({
                    countDecks: coordinates.length,
                    coordinates: [...coordinates]
                });
            }
        }
        return allShips;
    }
    getShipCoords(field) {
        return field.map((row, iY) => {
            return row.map((cell, iX) => {
                if (cell == 1 /* Cell.Exists */) {
                    return { iY, iX };
                }
            });
        }).flat().filter(cell => cell);
    }
}
exports.default = CheckerInitField;
//# sourceMappingURL=checkInitField.js.map