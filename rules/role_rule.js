const Constants = require( "../constants");

class RoleHelper {
    constructor(toSelf=true,toOthers = []){
        this.toSelf = toSelf;
        this.toOthers = toOthers;
    }
}

const ACCESS = new Map([
    [Constants.ROLES[0], new Map([
        [Constants.ACTION.CREATE,new RoleHelper(true,Constants.ROLES)],
        [Constants.ACTION.READ,new RoleHelper(false,Constants.ROLES)],
        [Constants.ACTION.DELETE,new RoleHelper(false,Constants.ROLES)],
        [Constants.ACTION.UPDATE,new RoleHelper(false,Constants.ROLES)]
    ])],
    [Constants.ROLES[1], new Map([
        [Constants.ACTION.CREATE,new RoleHelper(false,[])],
        [Constants.ACTION.READ,new RoleHelper()],
        [Constants.ACTION.DELETE,new RoleHelper()],
        [Constants.ACTION.UPDATE,new RoleHelper()]
    ])
    ]
]);

module.exports = ACCESS;