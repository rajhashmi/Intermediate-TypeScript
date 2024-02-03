interface User{
    name:string
};
interface User{
    age: number
};

// TypScript will merge the two interfaces

const user: User = {
    name:'shahid',
    age: 19
};

// 2. same thing will happen in NameSpace

namespace Validation{
    export function validation(){console.log("hi")}
}
namespace Validation{
    export function validateEmail(){
        console.log("hi");
    }
};
// Both function are accessible via validation namespace
Validation.validation();
Validation.validateEmail();



