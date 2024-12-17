// src/App.tsx
import React, { useState } from 'react';
import ProductModal from './components/productModal/productModal';
import { Product } from './components/product';
import NavigationBar from './components/navigationBar/navigationBar';
import SideBar from './components/sideBar/sideBar';
import ProductCard from './components/productCard/productCard';
import { Grid, Container, Pagination, Drawer } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff76df',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontSize: 16,
  },
});

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    inStock: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const itemsPerPage = 6;

  const products: Product[] = [
      {
        "id": 1,
        "name": "Электрогитара",
        "description": "Это описание товара. \n Очень длинное прям очень очень очень очень очень очень\n очень очень очень очень очень очень очень очень очень очень очень очень очень очень ",
        "category": "Электрогитары",
        "quantity": 3,
        "measure": "шт",
        "image": "./dataPictures/guitar1.webp"
      },
      {
        "id": 2,
        "name": "Гитара классическая CB SKY",
        "description": "Классическая 6-струнная гитара.",
        "category": "Классические гитары",
        "quantity": 10,
        "measure": "шт",
        "image": "./dataPictures/guitar2.jpeg"
      },
      {
        "id": 3,
        "name": "Пианино цифровое",
        "description": "Описание товара каоке-то",
        "category": "Пианино",
        "quantity": 10,
        "measure": "шт",
        "image": ""
      },
      {
        "id": 4,
        "name": "Детская гитара",
        "description": "Описание товара 4",
        "category": "Гитары для кайфа",
        "quantity": 10,
        "measure": "шт",
        "image": "./dataPictures/guitar3.jpg"
      },
      {
        "id": 5,
        "name": "Продукт 5",
        "description": "Описание товара 5",
        "category": "Категория 1",
        "quantity": 10,
        "measure": "шт",
        "image": ""
      },
      {
        "id": 6,
        "name": "Продукт 6",
        "description": "Описание товара 6",
        "category": "Категория 1",
        "quantity": 10,
        "measure": "шт",
        "image": ""
      },
      {
        "id": 7,
        "name": "Продукт 7",
        "description": "Описание товара 7",
        "category": "Категория 1",
        "quantity": 10,
        "measure": "шт",
        "image": ""
      }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = new RegExp(filters.search, 'i').test(product.name);
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesStock = filters.inStock ? product.quantity > 0 : true;
    return matchesSearch && matchesCategory && matchesStock;
  });

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NavigationBar toggleSidebar={() => setIsDrawerOpen(!isDrawerOpen)} />
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <SideBar filters={filters} setFilters={setFilters} />
        </Drawer>

        <Container maxWidth="lg" sx={{ mt: 10 }} > {/* Увеличил ширину контейнера и отступ сверху */}
          <Grid container spacing={3} pb={5}> {/* Изменил отступ снизу */}
            {paginatedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}> {/* Изменил размеры гридов для разных экранов */}
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
          />
        </Container>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;