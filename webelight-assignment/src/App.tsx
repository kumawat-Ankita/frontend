import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Product List</h1>
          <ProductList />
          <h1>Cart</h1>
          <Cart />
        </div>
      </Qu