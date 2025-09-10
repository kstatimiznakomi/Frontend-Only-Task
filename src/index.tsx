import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import "./index.scss";
import {Provider} from "react-redux";
import {stageStore} from "@/store/stageStore";

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={stageStore}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    );
}