import ReactDOM from 'react-dom/client';
import React from 'react';

import BtnGroup from './BtnGroup.jsx';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(<BtnGroup />);
