module.exports = {
  testEnvironment: "node", // Especifica el ambiente de pruebas (puede ser 'node', 'jsdom', 'electron', etc.)
  testMatch: ["<rootDir>/test/**/*.test.js"],
  // Rutas de los archivos de prueba
  moduleFileExtensions: ["js"], // Extensiones de archivo que Jest reconocerá
  // Aquí puedes agregar más opciones de configuración según tus necesidades
  testTimeout: 30000,
};
