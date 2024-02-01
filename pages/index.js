import { getSession } from "next-auth/react";

export default function Home() {
  return <div>todo</div>;
}

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
