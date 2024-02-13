import React, { createContext, useState } from "react";
var UserContext = createContext(undefined);
var UserContextProvider = function (_a) {
    var children = _a.children;
    var _b = useState(null), user = _b[0], setUser = _b[1];
    return (React.createElement(UserContext.Provider, { value: { user: user, setUser: setUser } }, children));
};
export { UserContext, UserContextProvider };
