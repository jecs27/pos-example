'use client';
import { useState } from 'react';
import { Card, TextInput, Button, Table, TableHead, TableRow, TableCell, TableBody, Title, Subtitle } from '@tremor/react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  return (
    <div className="container mx-auto p-4">
      <Card className="mt-8">
        <Title>Lista de Productos</Title>
        {products.length > 0 ? (
          <Table className="mt-4">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Subtitle>No hay productos registrados.</Subtitle>
        )}
      </Card>
    </div>
  );
};

export default ProductsPage;