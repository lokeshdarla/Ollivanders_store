import React from 'react';
var InvitationEmail = function () {
    return (React.createElement("section", { className: "max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900" },
        React.createElement("header", null,
            React.createElement("a", { href: "#" },
                React.createElement("img", { className: "w-auto h-7 sm:h-8", src: "https://merakiui.com/images/full-logo.svg", alt: "" }))),
        React.createElement("main", { className: "mt-8" },
            React.createElement("h2", { className: "text-gray-700 dark:text-gray-200" }, "Hi Olivia,"),
            React.createElement("p", { className: "mt-2 leading-loose text-gray-600 dark:text-gray-300" },
                "Alicia has invited you to join the team on",
                ' ',
                React.createElement("span", { className: "font-semibold " }, "Meraki UI"),
                "."),
            React.createElement("button", { className: "px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" }, "Accept the invite"),
            React.createElement("p", { className: "mt-8 text-gray-600 dark:text-gray-300" },
                "Thanks, ",
                React.createElement("br", null),
                "Meraki UI team")),
        React.createElement("footer", { className: "mt-8" },
            React.createElement("p", { className: "text-gray-500 dark:text-gray-400" },
                "This email was sent to",
                ' ',
                React.createElement("a", { href: "#", className: "text-blue-600 hover:underline dark:text-blue-400", target: "_blank" }, "contact@merakiui.com"),
                ". If you'd rather not receive this kind of email, you can",
                ' ',
                React.createElement("a", { href: "#", className: "text-blue-600 hover:underline dark:text-blue-400" }, "unsubscribe"),
                ' ',
                "or",
                ' ',
                React.createElement("a", { href: "#", className: "text-blue-600 hover:underline dark:text-blue-400" }, "manage your email preferences"),
                "."),
            React.createElement("p", { className: "mt-3 text-gray-500 dark:text-gray-400" },
                "\u00A9 ",
                new Date().getFullYear(),
                " Meraki UI. All Rights Reserved."))));
};
export default InvitationEmail;