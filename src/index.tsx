import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
