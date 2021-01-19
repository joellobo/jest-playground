const hello = require('../src/hello');

//o que será executado antes de todos os testes
beforeAll(async () => {
   console.log('Iniciando TDD com jest!');
});

//o que será executado após todos os testes
afterAll(() => {
    console.log('servidor fechado');
});

describe('inicio dos testes', () => {
   //aqui não iremos testar uma rota e sim o retorno de uma função.
   test('irá verificar o retorno da função saytdd', () => {
      //é esperado que o retorno da função saytdd seja:
      expect(hello()).toMatch('Hello!');
   });
});