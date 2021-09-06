import {UserProps} from "../components/user/User";

interface AllUser {
  currentUser: UserProps;
  allUsers: Array<UserProps>;
}

export default AllUser;