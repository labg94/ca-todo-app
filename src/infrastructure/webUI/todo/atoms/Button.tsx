import React from "react";

export const Button = ({onClick, children}: { onClick: () => void, children: string }) => <button
    onClick={onClick}>{children}</button>;
