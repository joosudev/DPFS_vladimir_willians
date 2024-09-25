import React, { useEffect, useState } from 'react';
import apiService from './services/apiService'; // Asegúrate de que está importado correctamente

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [lastCreatedUser, setLastCreatedUser] = useState(null);

  // Este efecto se ejecuta cuando el componente se monta
  useEffect(() => {
    // Llama a la API de usuarios y productos
    apiService.get('/api/users')
      .then(response => {
        console.log('Usuarios API Response:', response.data); // Verifica la respuesta de la API de usuarios
        const { count, users } = response.data;
        setTotalUsers(count);
        setLastCreatedUser(users[users.length - 1]); // Último usuario creado
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });

    apiService.get('/api/products')
      .then(response => {
        console.log('Productos API Response:', response.data); // Verifica la respuesta de la API de productos
        const { count } = response.data;
        setTotalProducts(count); // Actualiza el total de productos
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Total de productos: {totalProducts}</h2>
        <h2>Total de usuarios: {totalUsers}</h2>
        {lastCreatedUser && (
          <div>
            <h3>Último usuario creado:</h3>
            <p>Nombre: {lastCreatedUser.name}</p>
            <p>Email: {lastCreatedUser.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
