function toXML() {
  // Textarea di Input
  const userInput = document.getElementById("userInput").value.trim();

  // Separa le linee si testo
  const lines = userInput.split("\n");

  let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n';

  // Iteriamo su ogni riga di testo per creare gli elementi XML
  lines.forEach(line => {
    // Se la riga contiene un ": " separa il nome dell'elemento e il contenuto
    if (line.includes(":")) {
      const [tagName, content] = line.split(":").map(s => s.trim());

      // Se il contenuto contiene delle voci separate da ";", le tratta come una lista
      if (content.includes(";")) {
        const items = content.split(";").map(s => s.trim());

        // Crea un nodo generico con sottoelementi per ogni item
        xmlContent += `  <${tagName}>\n`;
        items.forEach(item => {
          xmlContent += `    <item>${item}</item>\n`;
        });
        xmlContent += `  </${tagName}>\n`;
      } else {
        // Se non c'è una lista, crea direttamente l'elemento
        xmlContent += `  <${tagName}>${content}</${tagName}>\n`;
      }
    } else {
      // Se non contiene ":", tratta la riga come un elemento generico
      xmlContent += `  <item>${line}</item>\n`;
    }
  });

  xmlContent += "</root>";

  // Stampa sulla Textarea di Output
  document.getElementById("output").value = xmlContent;
}

function clean(){
  document.getElementById("output").value = "";
  document.getElementById("userInput").value = "";

}