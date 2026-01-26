import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "./AuthenticatedLayout";

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selctedConversation = page.props.selectedConversation;
    console.log("conversations", conversations);
    console.log("selctedConversation", selctedConversation);
    return (
        <>
            ChatLayout
            <div>{children}</div>
        </>
    );
};
export default ChatLayout;
