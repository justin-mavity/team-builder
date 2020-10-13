import { v4 as uuid } from "uuid";

const initialMemberList = [
  {
    id: uuid(),
    memberName: "Justin",
    email: "justinmavity1021@gmail.com",
    role: "Backend enigneer",
  },
];

export default {
  get() {
    return Promise.resolve({
      status: 200,
      success: true,
      data: initialMemberList,
    });
  },
  post(url, { memberName, email, role }) {
    const newMember = { id: uuid(), memberName, email, role };
    return Promise.resolve({ staus: 200, successs: true, data: newMember });
  },
};
