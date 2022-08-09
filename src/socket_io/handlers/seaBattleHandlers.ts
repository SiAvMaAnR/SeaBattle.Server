import { Server } from "http";
import { Socket } from "socket.io";
import Cell from "../../enums/cell";
import ICoordinate from "../../interfaces/common/ICoordinate";
import MySeaBattleService from "../../services/seaBattleService";


const seaBattleHandlers = (io: Server, socket: Socket) => {
    const service = new MySeaBattleService();

    socket.on("battle:shot", (y: number, x: number) => {
        const isHit = service.shot({ y, x });
        socket.emit("battle:shot", isHit);
    });

    socket.on("battle:turn", (data) => {

    });

    socket.on("battle:end", (data) => {

    });
}

export default seaBattleHandlers;