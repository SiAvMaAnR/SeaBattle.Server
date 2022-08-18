import Field, { Cell } from "./field";

class MyField extends Field {

    constructor() {
        super();
    }


    public setField(field: number[][]): number[][] {
        super.field = field;
        return super.field;
    }

}

export default MyField;
