import { getSession } from "next-auth/react";
import AddTodoPage from "../components/template/AddtodoPage";

function Addtodo() {
  return <AddTodoPage />;
}

export default Addtodo;
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
