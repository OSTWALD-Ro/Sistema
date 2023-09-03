'use strict';

// Crear Elementos <html>
// Elementos <head>

const title1 = document.createElement('title');  document.head.appendChild(title1);  title1.id = "title1";  title1.textContent = "Sesión";

// Crear Estilos <style>
const style1 = document.createElement('style');  document.head.appendChild(style1);  style1.id = "style1";
style1.textContent = `
  html {
    background-color: rgb( 0, 0, 0);
    border: ridge rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    box-shadow: 0 0 1.5vh rgb(63, 63, 63);
    border-radius: 0px 0px 0px 0px;
    margin: solid;
    padding: solid;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    display: flex;
    height: 99vh;
    width: 100%;
    font-family: Arial, sans-serif;
  }
  
  html:hover {
    border: double rgb(191, 191, 191);
    color: rgb(191, 191, 191);
    box-shadow: 0 0 1.5vh rgb(191, 191, 191);
  }

  body {
    background-color: rgb( 0, 0, 0);
    border: ridge rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    box-shadow: 0 0 1.5vh rgb(63, 63, 63);
    border-radius: 20px 20px 20px 20px;
    margin: solid;
    padding: solid;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    display: flex;
    height: 99.25%;
    width: 100%;
  }
  
  body:hover {
    border: double rgb(191, 191, 191);
    color: rgb(191, 191, 191);
    box-shadow: 0 0 1.5vh rgb(191, 191, 191);
  }

  #p1 {
    align-self: flex-end;
  }
`;

// Elementos <body>

const p1= document.createElement("p");  document.body.appendChild(p1);  p1.id = "p1";  p1.textContent;

// Constantes

// Variables

var testMode = false; // false Modo Normal | true Modo Prueba

var currentURL = window.location.href;
var mainURL = "https://ostwald-ro.github.io/Sistema/Sesión";
var mainURLError = "https://ostwald-ro.github.io/Sistema/Sesi%C3%B3n";
// var mainURLErrorHTML = "https://ostwald-ro.github.io/Sistema/Sesi%C3%B3n.html";

var alternativeFunctions = true; // Funciones Alternativas | false true

var fileName, segundosReintentando, s;
var segundo = 1000;
    
// Funciones      

function end(_blank)
{

  if (
      alternativeFunctions === true
     )
  {
    if (
        testMode !== true
       )
    {
      window.location.href = mainURL;
    } else
    {
      // window.location.href = currentURL;
      location.reload(true);
    }
  } else 
  {


    // location.reload(true);

    if (
        _blank === true
       )
    {

      if (
          testMode !== true
         )
      {
        window.open(mainURL, '_blank');
      } else
      {
        window.open(currentURL, '_blank');
      }

    } else
    {

      if (
          testMode !== true
         )
      {
        window.open(mainURL);
      } else
      {
        window.open(currentURL);
      }

    }
    window.close();
  }
}
      
function localizarArchivo() 
{
  function archivoAusente() 
  {
          
    p1.textContent = "Archivo Ausente.";

    setTimeout(function()
    {
      segundosReintentando = (10);

      // while (segundosReintentando > 0) {}
          
      setInterval(function() 
      {
        if (
            segundosReintentando >= 0
           )
        {
          if (segundosReintentando == 1)
          {
            s = "";
          } else 
          {
            s = "s";
          }

          p1.textContent = "Reintentando en " + (segundosReintentando) + " segundo" + s + "...";

          segundosReintentando = (segundosReintentando - 1);
        } else 
        {
          s,  segundosReintentando = "";

          if (segundosReintentando == 0) 
          {
            end(true);
          }
        }
      }, segundo);
    }, segundo);          
  }

  p1.textContent = "Localizando Archivo...";
      
  setTimeout(function() 
  {
    fetch(fileName)
    .then(response => response.text())
    .then(data => 
    {
      var linesTitlesTable = 1;
      var userLinesTable = 1;
      var passwordLinesTable = 2;

      var ID = 1;

      // Dividir el contenido del archivo en líneas
      var lines = data.split("\n");

      // Dividir en palabras un renglón
      var lineWords = lines[(1)-linesTitlesTable].split(" ");
          
      // lineWords[2];

      var usuario = data.split("\n")[(ID)+(linesTitlesTable)-1].split(" ")[(userLinesTable)-1];
      var contraseña = data.split("\n")[(ID)+(linesTitlesTable)-1].split(" ")[(passwordLinesTable)-1];

      p1.textContent = "Archivo Localizado.";
            
      setTimeout(function() 
      {
        if (
            testMode === true
           )
        {
          p1.textContent = usuario + " " + contraseña;
              
          setTimeout(function()
          {
            // end(true);
          }, segundo);
        }
      }, segundo);
    })
    .catch(error => 
    {
      archivoAusente();
    });
  }, segundo);
}

function init() 
{
  fileName = "https://ostwald-ro.github.io/Sistema/ID.txt";
  localizarArchivo();
}

function setup()
{
  if (
      testMode === true
     )
  {
    mainURLError = currentURL;
    alternativeFunctions = false;
  }
      
  if (
      currentURL !== mainURLError
     )
  {
    end();
  }
}
    
// Codigo Inicial

setup();

// Codigo Despues de Cargar la Pagina Completa

document.addEventListener("DOMContentLoaded", function() 
{

  if (
      currentURL === mainURLError
     )
  {
    // Si se abrio desde la URL Original      
    init();
  } else 
  {
    // Si se abrio desde otra URL
  }
});