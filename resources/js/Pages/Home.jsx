import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ChatLayout from "@/Layouts/ChatLayout";

function Home() {
    return <>Messages</>;
}

Home.layout = (page) => (
    <AuthenticatedLayout>
        {" "}
        <ChatLayout>{page}</ChatLayout>{" "}
    </AuthenticatedLayout>
);

export default Home;
