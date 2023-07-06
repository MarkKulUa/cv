import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/style.scss';

class GraphiApp extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    timeoutCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    return loading ? null : <App />;
  }
}

function timeoutCall() {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), 1500));
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<GraphiApp />);
