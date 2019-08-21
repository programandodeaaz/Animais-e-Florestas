var a = 2;

function soma() {
  var b = a + a;
  return b;
}
soma();
console.log(a);
console.log(soma());

// -------------------------------------------------------------- 

function janela() {
  var window  = 'janela';
  return window;
}
console.log(janela());
console.log(window);

// --------------------------------------------------------------- 

function quadrado(cm) {
  function area() {
      var area = cm * cm;
      testeGlobal = 'Testando Isso';
      return area;
    }
    function perimetro() {
      var lados = 4,
      perimetro = 4 * cm;
      return perimetro;
    }
    console.log(area());
    console.log(perimetro());
    console.log(cm);
  }

  function triangulo() {
    var ladosTriangulo = 3;
  }

  quadrado(20);
  console.log(testeGlobal);

  // ----------------------------------------------------------------- 


