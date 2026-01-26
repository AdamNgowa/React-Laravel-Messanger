import { usePage } from "@inertiajs/react";
import Echo from "laravel-echo";
import { useEffect } from "react";

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selctedConversation = page.props.selectedConversation;
    console.log("conversations", conversations);
    console.log("selctedConversation", selctedConversation);

    useEffect(() => {
        Echo.join("online")
            .here((users) => {
                console.log("here", users);
            })
            .joining((user) => {
                console.log("joining", user);
            })
            .leaving((user) => {
                console.log("leaving", user);
            })
            .error((error) => {
                console.log("error", error);
            });

        return () => {
            Echo.leave("online");
        };
    }, []);

    return (
        <>
            ChatLayout
            <div>{children}</div>
        </>
    );
};
export default ChatLayout;
