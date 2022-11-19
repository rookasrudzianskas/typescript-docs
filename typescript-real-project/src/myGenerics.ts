const score:Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

// this could be anything
function identityTwo(val: any): any {
    return val;
}

// this is almost like any, I am ready to accept any, string, number
// this is then I give a number, so the value I accept is number
// and the value I return is number
// We are locking the value in here
function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree(true);
// same as the third one
// H could be as well a number, string, boolean
function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

// in this case we pass the custom type
identityFour<Bottle>({brand: "Coca Cola", type: 1});