import Field from "./field";

class MyField extends Field {

    

    constructor() {
        super();
    }

   
    public setField(field: number[][]){
        super.field = field;
    }
}

export default MyField;
