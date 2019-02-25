import {User} from '../first-page/user.model';
export class RegisterService{

private user: User[];


addUser(user:User)
{

    this.user.push(user);
}
}
