//importa os módulos e aqruivos necessários
const request = require('supertest');
const sayTDD = require('../src/hello');

//o que será executado antes de todos os testes
beforeAll(async () => {
   console.log('Iniciando TDD com jest!');
});

//o que será executado após todos os testes
afterAll(() => {
    //o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
    server.close();
    console.log('servidor fechado');
});

describe('inicio dos testes', () => {
   //aqui não iremos testar uma rota e sim o retorno de uma função.
   test('irá verificar o retorno da função saytdd', () => {
      //é esperado que o retorno da função saytdd seja:
      expect(sayTDD()).toMatch('TDD é o Desenvolvimento Orientado por Testes');
   });
});