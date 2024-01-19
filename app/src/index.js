import React from "react";
import ReactDOM from "react-dom";
import App from '../src/containers/App';

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept('../src/containers/App', function () {
        // Xử lý khi module được chấp nhận
        const NextApp = require('../src/containers/App').default;
        render(NextApp);
    });
}
