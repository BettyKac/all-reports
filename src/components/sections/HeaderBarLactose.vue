<template>
    <div class="header-container">
      <h1 class="header-title">Analýza <span class="adelle-font"> laktózové intolerance</span></h1>
    </div>
  </template>
  
  <script></script>
  <style>
  .header-container {
  background-color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  z-index: 2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}
  
  .header-title {
    margin: 10px;
    color: #e56a54;
  }
  
  .adelle-font {
    font-family: 'Adelle', sans-serif;
    font-weight: 600;
    color: black;
  
  }
  
  .header-method {
    margin-top: 0;
    margin-left: 10px;
  }
  
  @media (max-width: 768px) {
    .header-container {
      display: none;
      padding: 0px 40px;
    }
    .header-title {
      font-size: 1.2rem;
    }
    .header-method {
      font-family: 'Adelle-Light', sans-serif;
      font-size: 0.9rem;
    }
    .adelle-font {
      font-size: 0.9rem;
    }
  }
  </style>
  